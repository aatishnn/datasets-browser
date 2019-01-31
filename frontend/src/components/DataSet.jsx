import React, { Component } from 'react'
import {
    Card, CardBody, CardTitle, CardHeader, CardFooter, CardText, Badge,
    Row, Col, Button
} from 'reactstrap';

class DataSet extends Component {
    render() {
        var { data, ...rest } = this.props;
        return (
            <Card {...rest}>
                <CardHeader className="text-primary"><h2 className="h5">{data.name}</h2></CardHeader>
                <CardBody>
                    <Row>
                        <Col sm="9">
                            <CardText>
                                <p>{data.description}</p>
                                <p><strong>Organization collecting data:</strong><br/>
                                {data.organization}
                                </p>
                                <p><strong>Location of Individuals:</strong><br />
                                    {data.location}
                                </p>
                            </CardText>
                        </Col>
                        <Col sm="3" className="text-muted border border-right-0 border-top-0 border-bottom-0">
                            <strong>Added on:</strong><br /> {data.added_at.slice(0, "yyyy-mm-dd".length)} <br/>
                            <strong>Data Type:</strong><br /> {data.data_type || 'na'} <br />
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

export default DataSet
