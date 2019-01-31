import React, { Component } from 'react'
import {connect} from 'react-redux'
import {setLabel, setLocation, setOrganization} from '../actions'
import Axios from 'axios'
import _ from 'lodash'
import LabelFilter from './LabelFilter';

class FilterBar extends Component {
    state = {
        schema: null,
        selectedLocation: [],
        selectedOrganization: [],
        q: ''
    }

    componentDidMount() {
        Axios.get('/api/datasets/schema/')
            .then(res => {
                this.setState({ schema: res.data })
            })
    }

    getSelectOptions = (field) => {
        return _.get(this.state.schema.filters, field).options.map((v,i)=> {
            return {'label': v, 'value': v}
        })        
    }
    
    render() {
        var {schema} = this.state;
        return (
            <div>
                <LabelFilter 
                    label={'Labels'}
                    value={this.props.label}
                    onChange={e => this.props.setLabel(e)}
                    loading={schema === null}
                    options={this.state.schema && this.getSelectOptions('label')} />
                <LabelFilter
                    label={'Location of Individuals'}
                    value={this.props.location}
                    onChange={e => this.props.setLocation(e)}
                    loading={schema === null}
                    options={this.state.schema && this.getSelectOptions('location')} />
                <LabelFilter
                    label={'Organization (collecting data)'}
                    value={this.props.organization}
                    onChange={e => this.props.setOrganization(e)}
                    loading={schema === null}
                    options={this.state.schema && this.getSelectOptions('organization')} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        label: state.label,
        location: state.location,
        organization: state.organization,
    }
}

const mapDispatchToProps =  {
    setLocation,
    setOrganization,
    setLabel
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
