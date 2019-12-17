import { put, call, takeLatest } from 'redux-saga/effects'
import API from './api'
import { sendOrderSuccess, getFormSuccess, getFormFail } from './actions'
import { ORDER, GET_FORM } from './action_types'

export const sendOrder = function*(action) {
  yield put(sendOrderSuccess(action.payload))
}

export const watchSendOrder = function*() {
  yield takeLatest(ORDER.REQUESTED, sendOrder)
}

export const getForm = function*() {
  try {
    const result = yield call(API.getForm)
    yield put(getFormSuccess(result))
  } catch (error) {
    yield put(getFormFail(error))
  }
}

export const watchGetForm = function*() {
  yield takeLatest(GET_FORM.REQUESTED, getForm)
}
