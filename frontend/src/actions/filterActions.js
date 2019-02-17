import {createAction} from 'redux-starter-kit';
import { getFilterSchema } from '../selectors/filterSelectors';
import Axios from 'axios';
import { getAuthState } from '../selectors/authSelectors';

export const setPage = createAction('filter/setPage')
export const setPages = createAction('filter/setPages')
export const setLabel = createAction('filter/setLabel')
export const setLocation = createAction('filter/setLocation')
export const setDataType = createAction('filter/setDataType')
export const setFileFormat = createAction('filter/setFileFormat')
export const setStudyType = createAction('filter/setStudyType')
export const setOwnership = createAction('filter/setOwnership')
export const setOrganization = createAction('filter/setOrganization')
export const setQ = createAction('filter/setQ')
export const setSchema = createAction('filter/setSchema')
export const setSchemaLoading = createAction('filter/setSchemaLoading')



export const refreshFilterSchema = () => {
  return (dispatch, getState) => {
    var headers = {}
    var token = getAuthState(getState()).token
    if (token) {
      headers = {'Authorization': `Token ${token}`}
    }
    let schemaData = getFilterSchema(getState())
    if( schemaData.schema === null && schemaData.schemaLoading === false ) {
      dispatch(setSchemaLoading(true))
      Axios.get('/api/datasets/schema/', {headers: headers})
        .then(res => dispatch(setSchema(res.data.filters)))
        .then(() => dispatch(setSchemaLoading(false)))
    }
  }
}