import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Collapse } from 'reactstrap'
import {
    setLabel, setLocation, setOrganization,
    setDataType, setFileFormat, setOwnership, setStudyType
} from '../actions'
import Axios from 'axios'
import _ from 'lodash'
import LabelFilter from './LabelFilter';

class FilterBar extends Component {
    state = {
        schema: null,
        advancedFilters: false
    }

    toggleAdvancedFilters = () => {
        this.setState({ advancedFilters: !this.state.advancedFilters })
    }

    componentDidMount() {
        Axios.get('/api/datasets/schema/')
            .then(res => {
                this.setState({ schema: res.data })
            })
    }

    getSelectOptions = (field) => {
        return _.get(this.state.schema.filters, field).options.map((v, i) => {
            return { 'label': v, 'value': v }
        })
    }

    render() {
        var { schema } = this.state;
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
                    label={'Ownership'}
                    value={this.props.ownership}
                    onChange={e => this.props.setOwnership(e)}
                    loading={schema === null}
                    options={this.state.schema && this.getSelectOptions('ownership')} />
                <div onClick={this.toggleAdvancedFilters} className="mt-4 mb-2">
                    <span className="text-primary">Advanced Filters </span>
                    <div className="float-right">
                        {this.state.advancedFilters ? '🡣' : '🡡'}
                    </div>
                </div>
                <Collapse isOpen={this.state.advancedFilters}>
                    <hr />
                    <LabelFilter
                        label={'Organization (collecting data)'}
                        value={this.props.organization}
                        onChange={e => this.props.setOrganization(e)}
                        loading={schema === null}
                        options={this.state.schema && this.getSelectOptions('organization')} />
                    <LabelFilter
                        label={'Data Type'}
                        value={this.props.dataType}
                        onChange={e => this.props.setDataType(e)}
                        loading={schema === null}
                        options={this.state.schema && this.getSelectOptions('data_type')} />
                    <LabelFilter
                        label={'Study Type'}
                        value={this.props.studyType}
                        onChange={e => this.props.setStudyType(e)}
                        loading={schema === null}
                        options={this.state.schema && this.getSelectOptions('study_type')} />
                    <LabelFilter
                        label={'File Format'}
                        value={this.props.fileFormat}
                        onChange={e => this.props.setFileFormat(e)}
                        loading={schema === null}
                        options={this.state.schema && this.getSelectOptions('file_format')} />
                </Collapse>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        label: state.label,
        location: state.location,
        organization: state.organization,
        ownership: state.ownership,
        dataType: state.dataType,
        studyType: state.studyType,
        fileFormat: state.fileFormat,

    }
}

const mapDispatchToProps = {
    setLocation,
    setOrganization,
    setOwnership,
    setLabel,
    setDataType,
    setFileFormat,
    setStudyType
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
