import { ORDER } from './action_types'

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
