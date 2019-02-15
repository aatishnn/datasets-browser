import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getFilterSchema } from '../selectors/filterSelectors';
import { refreshFilterSchema } from '../actions/filterActions';
import LabelFilter from './LabelFilter';

function SelectFilter(field, label) {

  function mapStateToProps(state) {
    return {
      ...getFilterSchema(state)
    }
  }
  
  const mapDispatchToProps = {
    refreshFilterSchema

  }

  function wrapped(props) {
    var { schema, schemaLoading, refreshFilterSchema } = props;
    refreshFilterSchema()

    const getSelectOptions = () => {
      return _.get(schema, field).options.map((v, i) => {
        return { 'label': v, 'value': v }
      })
    }
    return <LabelFilter
      label={label}
      loading={schemaLoading}
      options={schema && getSelectOptions()} 
      {...props}
    />
  }
  return connect(mapStateToProps, mapDispatchToProps)(wrapped);
}

export const OrganizationFilter = SelectFilter("organization", "Organization");
export const LabelsFilter = SelectFilter("label", "Labels");
export const DataTypeFilter = SelectFilter("data_type", "Data Type");
export const OwnershipFilter = SelectFilter("ownership", "Ownership");
export const StudyTypeFilter = SelectFilter("study_type", "Study Type");
export const FileFormatFilter = SelectFilter("file_format", "File Format")
export const LocationFilter = SelectFilter("location", "Location of Individuals");
