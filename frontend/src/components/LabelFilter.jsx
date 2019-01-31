import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';


class LabelFilter extends Component {
    render() {
        var {options, label, ...rest} = this.props; 
        return (
            <div>
                <label>{label}</label>

                <Select
                    closeMenuOnSelect={true}
                    components={makeAnimated()}
                    isMulti
                    placeholder=""
                    options={options || []}
                    {...rest}
                />
            </div>

        )
    }
}

export default LabelFilter
