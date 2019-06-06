import { put, takeLatest } from 'redux-saga/effects'
import { sendOrderSuccess, sendResponseSuccess } from './actions'
import { ORDER, RESPONSE } from './action_types'

export const sendOrder = function*(action) {
  yield put(sendOrderSuccess(action.payload))
}

export const sendResponse = function*(action) {
  yield put(sendResponseSuccess(action.payload))
}

export const watchSendOrder = function*() {
  yield takeLatest(ORDER.REQUESTED, sendOrder)
}

export const watchSendResponse = function*() {
  yield takeLatest(RESPONSE.REQUESTED, sendResponse)
}
