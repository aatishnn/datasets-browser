import React, { Component } from 'react'
import Axios from 'axios';
import _ from 'lodash';
import { connect } from 'react-redux'
import DataSet from './DataSet';
import PagePagination from './PagePagination';
import Loading from './Loading';
import { setPage, setPages } from '../actions/filterActions';
import DataSetRow from './DataSetRow';
import { getFilter } from '../selectors/filterSelectors';

class DataSetList extends Component {
  cancelToken = Axios.CancelToken.source();

  state = {
    dataSets: [],
    loading: false,
  }
  onPageChange = (page) => {
    this.props.setPage(page)
  }

  buildQueryParams(prepend) {
    var params = prepend || '';
    params += _.join(this.props.label.map(l => `label=${l.value}`), '&')
    params += '&'
    params += _.join(this.props.location.map(l => `location=${l.value}`), '&')
    params += '&'
    params += _.join(this.props.organization.map(l => `organization=${l.value}`), '&')
    params += '&'
    params += _.join(this.props.ownership.map(l => `ownership=${l.value}`), '&')
    params += '&'
    params += _.join(this.props.dataType.map(l => `data_type=${l.value}`), '&')
    params += '&'
    params += _.join(this.props.fileFormat.map(l => `file_format=${l.value}`), '&')
    params += '&'
    params += _.join(this.props.studyType.map(l => `study_type=${l.value}`), '&')

    if (this.props.q) {
      params += `&q=${this.props.q}`
    }
    return params;
  }

  fetchData = () => {
    var { page, page_size } = this.props;
    this.setState({ loading: true })
    Axios.get(
      `/api/datasets/?page_size=${page_size}&page=${page}`
      + this.buildQueryParams('&')
      , {
        cancelToken: this.cancelToken.token
      })
      .then(res => {
        let pages = Math.ceil(res.data.count / page_size);
        this.setState({ dataSets: res.data.results, loading: false })
        this.props.setPages(pages)
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.page !== this.props.page
      || JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.fetchData()
    }
  }

  componentWillUnmount() {
    this.cancelToken.cancel('API request cancelled');
  }

  render() {
    var { loading } = this.state;
    var { page, pages } = this.props;
    if (loading) {
      return <Loading />
    }
    if (!this.state.dataSets.length) {
      return <div>No results found. Try broadening your search parameters.</div>
    }
    return (
      <div>
        {this.state.dataSets.map(dataSet => (
          <DataSetRow data={dataSet} key={dataSet.id} className="mb-4" />
        ))}
        <div className="float-right">
          <PagePagination page={page} pages={pages} onPageChange={this.onPageChange} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return getFilter(state)
}

export default connect(mapStateToProps, { setPage, setPages })(DataSetList);
