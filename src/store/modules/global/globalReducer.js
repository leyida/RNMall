import { createReducer } from '../../../util'
import initialState from './globalInitState'
import types from '../../types'


export default createReducer(initialState, {
  [types.SET_SESSION_TOKEN]: (state, data) => {
    return {...state, sessionToken: data}
  },

  [types.SET_STORE]: (state, data) => {
    return {...state, store:data }
  }
})
