import React, { Component } from 'react'
import { Card, CardBody, CardHeader, CardText, CardFooter } from 'reactstrap'
import DataSetForm from './DataSetForm';
import withDataSet from './withDataSet';
import GoBackButton from '../../components/GoBackButton';


class DataSetEdit extends Component {
  render() {
    return (
      <>
        <GoBackButton />
        <Card className="mt-4">
          <CardHeader><h3>Edit Dataset</h3></CardHeader>
          <CardBody>
            <DataSetForm data={this.props.data} />
          </CardBody>
        </Card>
      </>
    );
  }
}

export default withDataSet(DataSetEdit);