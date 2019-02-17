import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import DataSetSuggestForm from './DataSetEdit/DataSetSuggestForm';
import GoBackButton from '../components/GoBackButton';


class DataSetSuggestPage extends Component {
  redirectAfterSuccess = () => {
    console.log("success")
    this.props.history.push('/dataset-suggest-success')
  }
  render() {
    return (
      <>
        <GoBackButton />
        <Card className="mt-4">
          <CardHeader><h3>Suggest dataset</h3></CardHeader>
          <CardBody>
            <DataSetSuggestForm onSuccess={this.redirectAfterSuccess}/>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default DataSetSuggestPage;