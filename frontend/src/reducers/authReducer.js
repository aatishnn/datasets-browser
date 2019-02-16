import { createReducer } from 'redux-starter-kit';
import {loginSuccess, loginInProgress, loginFailed} from '../actions/authActions'

const initialState = {
  authenticated: false,
  token: null,
  inProgress: false,
  failed: false
}

const authReducer = createReducer(initialState, {
  [loginSuccess]: (state, action) => {
    state.authenticated = true
    state.token = action.payload
    state.inProgress = false
    state.failed = false
  },
  [loginInProgress]: (state, action) => {
    state.authenticated = false
    state.token = null
    state.inProgress = true
    state.failed = false
  },
  [loginFailed]: (state, action) => {
    state.authenticated = false
    state.token = null
    state.inProgress = false
    state.failed = true
  }
})

export default authReducer;