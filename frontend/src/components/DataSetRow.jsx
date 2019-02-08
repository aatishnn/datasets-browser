import React, { Component } from 'react'
import {
    Card, CardBody, CardTitle, CardHeader, CardFooter, CardText, Badge,
    Row, Col, Button
} from 'reactstrap';
import _ from 'lodash'

class DataSetRow extends Component {
    render() {
        var { data, ...rest } = this.props;
        return (
            <Card {...rest}>
                <CardHeader className="text-primary"><h2 className="h5">{data.name}</h2></CardHeader>
                <CardBody>
                    <Row>
                        <Col sm="9">
                            <CardText>
                                {_.truncate(data.description, {length: 100})}
                            </CardText>
                            <CardText>
                                <strong>Organization collecting data:</strong><br />
                                {data.organization}
                            </CardText>
                            <CardText>
                                <strong>Location of Individuals:</strong><br />
                                {data.location}

                            </CardText>
                        </Col>
                        <Col sm="3" className="text-muted border border-right-0 border-top-0 border-bottom-0">
                            <strong>File Format:</strong><br /> {data.file_format || 'na'} <br />
                            <strong>Data Type:</strong><br /> {data.data_type || 'na'} <br />
                            <strong>Study Type:</strong><br /> {data.study_type || 'na'} <br />
                            <strong>Ownership:</strong><br /> {data.ownership || 'na'} <br />
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter>
                    {data.labels.map(label => {
                        return <Badge className="mr-1" key={label} color="secondary">{label}</Badge>
                    })}
                    <a className="button button-info float-right"
                        href={data.website} target="_blank" rel="noopener noreferrer" >Go to Source</a>
                </CardFooter>
            </Card>
        )
    }
}

export default DataSetRow
