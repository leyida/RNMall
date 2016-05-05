import { createReducer } from '../../../util'
import types from '../../types'
import initialState from './deviceInitState'


export default createReducer(initialState, {
  [types.SET_PLATFORM]: (state, platform) => {
    return {...state, platform: platform}
  },

  [types.SET_VERSION]: (state, version) => {
    return {...state, version: version}
  }
})
