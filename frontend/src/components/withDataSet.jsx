import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAuthState } from '../selectors/authSelectors';
import Axios from 'axios';

function withDataSet(WrappedComponent) {
  class RComponent extends Component {
    state = {
      data: null,
      error: false
    }
    componentDidMount() {
      var headers = {}
      if (this.props.authToken) {
        headers = { 'Authorization': `Token ${this.props.authToken}` }
      }
      Axios.get(`/api/datasets/${this.props.match.params.id}/`, { headers })
        .then(res => this.setState({ data: res.data }))
        .catch(err => this.setState({error: true}))
    }

    render() {
      if (this.state.error) {
        return <div>There was an error loading the data.</div>
      }

      if (this.state.data === null) {
        return <div>Loading...</div>
      }

      return <WrappedComponent data={this.state.data} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      authToken: getAuthState(state).token
    };
  }
  return withRouter(connect(mapStateToProps)(RComponent))
}

export default withDataSet;