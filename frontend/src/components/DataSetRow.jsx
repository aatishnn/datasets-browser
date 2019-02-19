import React, { Component } from 'react'
import {
  Card, CardBody, CardHeader, CardFooter, CardText, Badge,
  Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom'

import _ from 'lodash'
import DataSetEditLink from './DataSetEditLink';

class DataSetRow extends Component {
  render() {
    var { data, ...rest } = this.props;
    return (
      <Card {...rest}>
        <CardHeader className="text-primary">
          <h2 className="h5">
            <Link to={`/dataset/${data.id}`}>{data.name}</Link>


            <a className="button button-info float-right"
              href={data.website} target="_blank" rel="noopener noreferrer" >Go to Source</a>
          </h2>

          {data.labels.map(label => {
            return <Badge className="mr-1" key={label} color="info">{label}</Badge>
          })}
          <span className="float-right">
            <DataSetEditLink id={data.id} />

          </span>

        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <CardText>
                {_.truncate(data.description, { length: 200, separator: '.' })} <Link to={`/dataset/${data.id}`}>more</Link>
              </CardText>
              <CardText>
                <strong>Organization collecting data:</strong><br />
                {data.organization}
              </CardText>
              <CardText>
                <strong>Location of Individuals:</strong><br />
                {data.location}
                <br/>
                <br/>
                {data.file_format && <Badge className="mr-1" color="white">{data.file_format}</Badge>}
        {data.data_type && <Badge className="mr-1" color="white">{data.data_type}</Badge>}
        {data.study_type && <Badge className="mr-1" color="white">{data.study_type}</Badge>}
        {data.ownership && <Badge className="mr-1" color="white">{data.ownership}</Badge>}
              </CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

export default DataSetRow
