import * as types from "./constants"
export const sampleapi_post_login_create = data => ({
  type: types.SAMPLEAPI_POST_LOGIN_CREATE,
  data
})
export const sampleapi_post_login_createSucceeded = (response, starter) => ({
  type: types.SAMPLEAPI_POST_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const sampleapi_post_login_createFailed = (error, starter) => ({
  type: types.SAMPLEAPI_POST_LOGIN_CREATE_FAILED,
  error,
  starter
})
