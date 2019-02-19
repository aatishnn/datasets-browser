import React, { Component } from 'react'
import DataSet from '../components/DataSet';
import GoBackButton from '../components/GoBackButton'
import withDataSet from '../components/withDataSet';

const DataSetDetail = withDataSet(DataSet)

class DataSetDetailPage extends Component {
  render() {
    return (
      <div className="mt-4">
        <GoBackButton />
        <br />
        <br />
        <DataSetDetail/>
      </div>
    )
  }
}
export default DataSetDetailPage;

