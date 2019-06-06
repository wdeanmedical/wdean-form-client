import { put, takeLatest } from 'redux-saga/effects'
import { sendOrderSuccess } from './actions'
import { ORDER } from './action_types'

export const sendOrder = function*(action) {
  yield put(sendOrderSuccess(action.payload))
}

export const watchSendOrder = function*() {
  yield takeLatest(ORDER.REQUESTED, sendOrder)
}
