import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import DataSetForm from './DataSetForm';
import GoBackButton from '../../components/GoBackButton';


class DataSetCreate extends Component {
  render() {
    return (
      <>
      <GoBackButton />
      <Card className="mt-4">
        <CardHeader><h3>Create Dataset</h3></CardHeader>
        <CardBody>
          <DataSetForm/>
        </CardBody>
      </Card>
      </>
    );
  }
}

export default DataSetCreate;