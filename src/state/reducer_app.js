import { ORDER } from './action_types'

const INITIAL_STATE = {
  order: null,
  response: null,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ORDER.SUCCESS:
      return { ...state, order: action.payload.order }
    default:
      return state
  }
}
