import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Axios from 'axios';


function withDataSet(WrappedComponent) {
  class DataSetComponent extends React.Component {
    state = {
      loading: false,
      data: null
    }
    componentDidMount() {
      this.setState({loading:true})
      Axios.get(`/api/datasets/${this.props.match.params.id}/`)
        .then(res => {
          this.setState({loading:false, data: res.data})
        })
    }
    render() {
      if (!this.state.loading) {
        return <WrappedComponent data={this.state.data} />
      }
      return <div>Loading...</div>
    }
  }

  return withRouter(DataSetComponent)
}


export default withDataSet;