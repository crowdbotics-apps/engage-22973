import * as types from "./constants"

const initialState = { sampleAPI: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAMPLEAPI_POST_API_LOGIN_CREATE:
    case types.SAMPLEAPI_POST_API_LOGIN_CREATE_SUCCEEDED:
    case types.SAMPLEAPI_POST_API_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        sampleAPI: [...state.sampleAPI, action.response]
      })
    default:
      return state
  }
}
