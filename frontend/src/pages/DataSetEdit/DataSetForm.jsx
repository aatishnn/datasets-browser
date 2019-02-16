import React, { Component } from 'react'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import Axios from 'axios';
import { FormGroup, Label, Form, Input, FormText, FormFeedback, Button } from 'reactstrap'
import { OrganizationFilter, LabelsFilter, DataTypeFilter, OwnershipFilter, FileFormatFilter, StudyTypeFilter, LocationFilter } from '../../components/SelectFilter';


const DataSetSchema = Yup.object().shape({
  'name': Yup.string()
    .required('Required'),
  'description': Yup.string()
    .required('Required'),
  'website': Yup.string()
    .url().required('Required'),
  'comments': Yup.string(),
  'organization': Yup.string().required('Required'),
  'labels': Yup.array().required('Required').min(0),
  'start_year': Yup.number().nullable().positive(),
  'end_year': Yup.number().nullable().positive()

});

const initialValues = {
  name: '',
  description: '',
  website: '',
  comments: '',
  organization: '',
  study_type: '',
  file_format: '',
  location: '',
  ownership: '',
  data_type: '',
  labels: [],
  start_year: null,
  end_year: null
}

class DataSetForm extends Component {
  render() {
    return (
      <Formik
        initialValues={this.props.data || initialValues}
        validationSchema={DataSetSchema}
        onSubmit={(values, { setSubmitting, setFieldValue}) => {
          const method = values.id ? 'put': 'post';
          const verb = values.id ? 'updated': 'created';
          const url = `/api/datasets/` + (method === 'put' ? `${values.id}/` :'')
          Axios[method](url, values)
            .then((res) => {
              setSubmitting(false)
              setFieldValue('id', res.data.id)
              toast.success(`Successfully ${verb} the dataset`)
            })
            .catch(() => {
              toast.success('There was an error saving the dataset')
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, handleSubmit, setFieldTouched, setFieldValue, values, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name of dataset</Label>
              <Input
                type="name"
                name="name"
                tag={Field}
                valid={touched.name && !errors.name}
                invalid={touched.name && errors.name}
              />
              <FormFeedback>{errors.name}</FormFeedback>
              <FormText></FormText>
            </FormGroup>
            <FormGroup>
              <Label for="name">Start Year</Label>
              <Input
                type="text"
                name="start_year"
                tag={Field}
                valid={touched.start_year && !errors.start_year}
                invalid={touched.start_year && errors.start_year}
              />
              <FormFeedback>{errors.start_year}</FormFeedback>
              <FormText></FormText>
            </FormGroup>
            <FormGroup>
              <Label for="name">End Year</Label>
              <Input
                type="text"
                name="end_year"
                tag={Field}
                valid={touched.end_year && !errors.end_year}
                invalid={touched.end_year && errors.end_year}
              />
              <FormFeedback>{errors.end_year}</FormFeedback>
              <FormText></FormText>
            </FormGroup>
            <FormGroup>
              <Label for="name">Description</Label>
              <Input
                type="textarea"
                name="description"
                component="textarea"
                rows="10"
                tag={Field}
                valid={touched.description && !errors.description}
                invalid={touched.description && errors.description}
              />
              <FormFeedback>{errors.description}</FormFeedback>
              <FormText></FormText>
            </FormGroup>
            <FormGroup>
              <OrganizationFilter
                name="organization"
                isMulti={false}
                value={{ value: values.organization, label: values.organization }}
                onChange={(value) => setFieldValue('organization', value.value)}
                onBlur={() => setFieldTouched('organization', true)}
                creatable={true}
              />
              <div class="form-control d-none is-invalid" />
              <FormFeedback>{errors.organization}</FormFeedback>
              <FormText></FormText>
            </FormGroup>

            <FormGroup>
              <LocationFilter
                name="location"
                isMulti={false}
                value={{ value: values.location, label: values.location }}
                onChange={(value) => setFieldValue('location', value.value)}
                onBlur={() => setFieldTouched('location', true)}
                creatable={true}
              />
              <div class="form-control d-none is-invalid" />
              <FormFeedback>{errors.location}</FormFeedback>
              <FormText></FormText>
            </FormGroup>

            <FormGroup>
              <LabelsFilter
                name="labels"
                value={values.labels.map(label => {
                  return {label: label, value: label}
                })}
                onChange={(value) => setFieldValue('labels', value.map(v => v.value))}
                onBlur={() => setFieldTouched('labels', true)}
              />
              <div class="form-control d-none is-invalid" />
              <FormFeedback>{errors.labels}</FormFeedback>
              <FormText></FormText>
            </FormGroup>
            <FormGroup>
              <Label for="name">Website</Label>
              <Input
                type="text"
                name="website"
                tag={Field}
                valid={touched.website && !errors.website}
                invalid={touched.website && errors.website}
              />
              <FormFeedback>{errors.website}</FormFeedback>
              <FormText></FormText>
            </FormGroup>

            <FormGroup>
              <DataTypeFilter
                name="data_type"
                isMulti={false}
                value={values.data_type && { value: values.data_type, label: values.data_type }}
                onChange={(value) => setFieldValue('data_type', value.value)}
                onBlur={() => setFieldTouched('data_type', true)}
              />
              <div class="form-control d-none is-invalid" />
              <FormFeedback>{errors.data_type}</FormFeedback>
              <FormText></FormText>
            </FormGroup>

            <FormGroup>
              <OwnershipFilter
                name="ownership"
                isMulti={false}
                value={values.ownership && { value: values.ownership, label: values.ownership }}
                onChange={(value) => setFieldValue('ownership', value.value)}
                onBlur={() => setFieldTouched('ownership', true)}
              />
              <div class="form-control d-none is-invalid" />
              <FormFeedback>{errors.ownership}</FormFeedback>
              <FormText></FormText>
            </FormGroup>

            <FormGroup>
              <FileFormatFilter
                name="file_format"
                value={values.file_format && { value: values.file_format, label: values.file_format }}
                isMulti={false}
                onChange={(value) => setFieldValue('file_format', value.value)}
                onBlur={() => setFieldTouched('file_format', true)}
              />
              <div class="form-control d-none is-invalid" />
              <FormFeedback>{errors.file_format}</FormFeedback>
              <FormText></FormText>
            </FormGroup>

            <FormGroup>
              <StudyTypeFilter
                name="study_type"
                isMulti={false}
                value={values.study_type && { value: values.study_type, label: values.study_type }}
                onChange={(value) => setFieldValue('study_type', value.value)}
                onBlur={() => setFieldTouched('study_type', true)}
              />
              <div class="form-control d-none is-invalid" />
              <FormFeedback>{errors.study_type}</FormFeedback>
              <FormText></FormText>
            </FormGroup>

            <FormGroup>
              <Label for="name">Comments</Label>
              <Input
                type="text"
                name="comments"
                component="textarea"
                row="5"
                tag={Field}
                valid={touched.comments && !errors.comments}
                invalid={touched.comments && errors.comments}
              />
              <FormFeedback>{errors.comments}</FormFeedback>
              <FormText></FormText>
            </FormGroup>


            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>

    );
  }
}

export default DataSetForm;