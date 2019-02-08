import React, {Component} from 'react'
import {Button} from 'reactstrap'
import DataSet from '../components/DataSet';
import Axios from 'axios';
import { Link } from 'react-router-dom'


class DataSetDetailPage extends Component {
    state = {
        data: null
    }
    componentDidMount() {
        Axios.get(`/api/datasets/${this.props.match.params.id}`)
            .then(res => {
                this.setState({data: res.data})
            })
    }

    render() { 
        return (
            <div className="mt-4">
                <Link to="/"><Button color="secondary" className="rounded-pill">Back</Button></Link>
                <br/>
                <br/>
                {!this.state.data ? <div>Loading</div>: <DataSet data={this.state.data}/>}
            </div>
        )
    }
}
 
export default DataSetDetailPage;