const createAsyncActionType = action => ({
  SUCCESS: `${action}-success`,
  ERROR: `${action}-error`,
  REQUESTED: `${action}-requested`,
})

export const ORDER = createAsyncActionType('order')
export const RESPONSE = createAsyncActionType('response')
