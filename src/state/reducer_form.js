import jsonForm from '../config/fields.json'
import form from '../config/fields'
import * as Constants from '../constants/constants'
import FormTextInput from '../components/FormTextInput/FormTextInput'
import FormSelectInput from '../components/FormSelectInput/FormSelectInput'

const deserialize = json => {
  // return JSON.parse(json)
  return json
}

const INITIAL_STATE = {
  formNew: deserialize(jsonForm),
  form,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}
