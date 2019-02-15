import React, { Component } from 'react'
import _ from 'lodash'
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';

import {connect} from 'react-redux'
import {setQ} from '../actions/filterActions'

class SearchBar extends Component {
    state = {
        q: this.props.q
    }
    updateParams = _.debounce(() => {
        this.props.setQ(this.state.q)
        }, 1000
    )
    onChange = event => {
        this.setState({q: event.target.value})
        this.updateParams()
    }
    render() {
        return (
            <InputGroup>
                <InputGroupAddon addonType="prepend">Search
                </InputGroupAddon>
                <Input
                    type="search"
                    name="search"
                    value={this.state.q}
                    onChange={this.onChange} />
            </InputGroup>
        )
    }
}
const mapStateToProps = state => {
    return {q: state.q}
}

const mapDispatchToProps = {
    setQ
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
