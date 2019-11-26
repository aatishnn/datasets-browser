import { createSelector } from 'redux-starter-kit'

export const getFilter = createSelector(['filter'])

export const getFilterSchema = createSelector({
  schema: 'filter.schema',
  schemaLoading: 'filter.schemaLoading'
})