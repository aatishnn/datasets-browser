import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardText, CardFooter } from 'reactstrap'
import DataSetForm from './DataSetForm';
import GoBackButton from '../../components/GoBackButton';
import withDataSet from '../../components/withDataSet';

const DataSetEditForm = withDataSet(DataSetForm)

class DataSetEdit extends Component {
  render() {
    return (
      <>
        <GoBackButton />
        <Card className="mt-4">
          <CardHeader><h3>Edit Dataset</h3></CardHeader>
          <CardBody>
            <DataSetEditForm/>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default DataSetEdit;