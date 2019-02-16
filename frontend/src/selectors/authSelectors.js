import { createSelector } from 'redux-starter-kit'

export const getAuthState = createSelector(['auth'])

export const isAuthenticated = createSelector(['auth'], (auth) => auth.authenticated)