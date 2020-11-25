import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* sampleapi_post_api_login_createWorker(action) {
  try {
    const result = yield call(
      apiService.sampleapi_post_api_login_create,
      action
    )
    yield put(actions.sampleapi_post_api_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.sampleapi_post_api_login_createFailed(err, action))
  }
}
function* sampleapi_post_api_login_createWatcher() {
  yield takeEvery(
    types.SAMPLEAPI_POST_API_LOGIN_CREATE,
    sampleapi_post_api_login_createWorker
  )
}
export default function* rootSaga() {
  const sagas = [sampleapi_post_api_login_createWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
