import { ORDER, GET_FORM } from './action_types'

export const sendOrder = order => {
  return {
    type: ORDER.REQUESTED,
    payload: {
      order,
    },
  }
}

export const sendOrderSuccess = payload => ({
  type: ORDER.SUCCESS,
  payload,
})

export const getForm = () => {
  return {
    type: GET_FORM.REQUESTED,
    payload: {},
  }
}

export const getFormSuccess = payload => ({
  type: GET_FORM.SUCCESS,
  payload,
})

export const getFormFail = error => ({
  type: GET_FORM.ERROR,
  error,
})
