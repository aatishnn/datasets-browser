import React, { Component } from 'react'
import {Card, CardTitle, CardBody} from 'reactstrap';
import FilterBar from './FilterBar';

class Sidebar extends Component {
  render() {
    return (
      <Card>
          <CardBody>
            <CardTitle>Filter</CardTitle>
            <hr/>
            <FilterBar/>
          </CardBody>
      </Card>
    )
  }
}

export default Sidebar
