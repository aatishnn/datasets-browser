import React, { Component } from 'react'
import {
  Card, CardBody, CardHeader, CardFooter, CardText, Badge,
  Row, Col, Collapse, Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

import _ from 'lodash'
import DataSetEditLink from './DataSetEditLink';

class DataSetRow extends Component {
  state = {
    collapse: this.props.collapse || false
  }
  render() {
    var { data, ...rest } = this.props;
    return (
      <Card {...rest}>
        <CardHeader className="text-primary">
          <h2 className="h5">
            <Link to={`/dataset/${data.id}`}>{data.name || <span>&nbsp;</span>}</Link>


            {/* <a className="button button-info float-right"
              href={data.website} target="_blank" rel="noopener noreferrer" >Go to Source</a> */}
            <span className="float-right">
            <Button color="white" outline size="sm" onClick={() => this.setState({collapse:!this.state.collapse})}>{this.state.collapse ? '🡣' : '🡡'}</Button>
          </span>
          </h2>
                 
          {data.labels.map(label => {
            return <Badge className="mr-1" key={label} color="white">{label}</Badge>
          })}
          
          <span className="float-right">
            <DataSetEditLink id={data.id} />
          </span>
          

        </CardHeader>
        <Collapse isOpen={this.state.collapse}>

        <CardBody>

          <Row>
            <Col>
              <CardText>
                {_.truncate(data.description, { length: 200, separator: '.' })} <Link to={`/dataset/${data.id}`}>more</Link>
              </CardText>
              <CardText>
        {data.organization && <Badge className="mr-1" color="white">{data.organization}</Badge>}
        {data.location && <Badge className="mr-1" color="white">{data.location}</Badge>}
        {data.file_format && <Badge className="mr-1" color="white">{data.file_format}</Badge>}
        {data.data_type && <Badge className="mr-1" color="white">{data.data_type}</Badge>}
        {data.study_type && <Badge className="mr-1" color="white">{data.study_type}</Badge>}
        {data.ownership && <Badge className="mr-1" color="white">{data.ownership}</Badge>}
              </CardText>
            </Col>
          </Row>

        </CardBody>
        </Collapse>

      </Card>
    )
  }
}

export default DataSetRow
