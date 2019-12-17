import { spawn, all } from 'redux-saga/effects'
import { watchSendOrder, watchGetForm } from './app_sagas'

const rootSaga = function*() {
  yield all([spawn(watchSendOrder), spawn(watchGetForm)])
}

export default rootSaga
