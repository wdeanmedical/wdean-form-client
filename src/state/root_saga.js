import { spawn, all } from 'redux-saga/effects'
import { watchSendOrder } from './app_sagas'

const rootSaga = function*() {
  yield all([spawn(watchSendOrder)])
}

export default rootSaga
