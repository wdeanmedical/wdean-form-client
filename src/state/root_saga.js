import { spawn, all } from 'redux-saga/effects'
import { watchSendOrder, watchSendResponse } from './app_sagas'

const rootSaga = function*() {
  yield all([spawn(watchSendOrder), spawn(watchSendResponse)])
}

export default rootSaga
