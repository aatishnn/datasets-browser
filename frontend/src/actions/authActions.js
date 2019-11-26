import {createAction} from 'redux-starter-kit'
import Axios from 'axios';

export const loginSuccess = createAction('auth/login')
export const loginInProgress = createAction('auth/inProgress')
export const loginFailed = createAction('auth/failed')
