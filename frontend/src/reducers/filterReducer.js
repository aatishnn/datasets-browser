import { createReducer } from 'redux-starter-kit';
import { 
  setLabel, setLocation, setOrganization, setQ, setPage, setPages, setDataType, 
  setFileFormat, setStudyType, setOwnership, setSchema, setSchemaLoading } from '.././actions/filterActions';


const initialState = {
  label: [],
  location: [],
  organization: [],
  dataType: [],
  studyType: [],
  fileFormat: [],
  ownership: [],
  q: '',
  page: 1,
  pages: 1,  // we don't know yet
  page_size: 10,
  schema: null,
  schemaLoading: false
}

const filterReducer = createReducer(initialState, {
  [setLabel]: (state, action) => {
    state.label = action.payload
    state.page = 1
    state.pages = 1
  },
  [setLocation]: (state, action) => {
    state.location = action.payload
    state.page = 1
    state.pages = 1
  },
  [setOrganization]: (state, action) => {
    state.organization = action.payload
    state.page = 1
    state.pages = 1
  },
  [setDataType]: (state, action) => {
    state.dataType = action.payload
  },
  [setFileFormat]: (state, action) => {
    state.fileFormat = action.payload
  },
  [setStudyType]: (state, action) => {
    state.studyType = action.payload
  },
  [setOwnership]: (state, action) => {
    state.ownership = action.payload
  },
  [setQ]: (state, action) => {
    state.q = action.payload
    state.page = 1
    state.pages = 1
  },
  [setPage]: (state, action) => {
    state.page = action.payload
  },
  [setPages]: (state, action) => {
    state.pages = action.payload
  },
  [setSchema]: (state, action) => {
    state.schema = action.payload
  },
  [setSchemaLoading]: (state, action) => {
    state.schemaLoading = action.payload
  }
})

export default filterReducer;