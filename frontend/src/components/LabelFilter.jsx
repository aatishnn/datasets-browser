import React, { Component } from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/lib/Creatable';
import makeAnimated from 'react-select/lib/animated';


class LabelFilter extends Component {
    render() {
        var {options, label, ...rest} = this.props; 
        var SelectComponent = Select;
        if ('creatable' in rest) {
          SelectComponent = CreatableSelect;
        }

        return (
            <div>
                <label>{label}</label>

                <SelectComponent
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
