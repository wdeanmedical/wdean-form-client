import { ORDER, RESPONSE } from './action_types'

export const sendOrder = order => {
  return {
    type: ORDER.REQUESTED,
    payload: {
      order,
    },
  }
}

export const sendResponse = response => {
  return {
    type: RESPONSE.REQUESTED,
    payload: {
      response,
    },
  }
}

export const sendOrderSuccess = payload => ({
  type: ORDER.SUCCESS,
  payload,
})

export const sendResponseSuccess = payload => ({
  type: RESPONSE.SUCCESS,
  payload,
})
