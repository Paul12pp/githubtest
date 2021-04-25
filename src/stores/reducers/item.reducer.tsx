const initialState = {
  isLoading: true
}

export const itemReducer = (state = initialState, action:any) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_IMAGE_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_IMAGE_SUCCESS':
      return {
        ...state,
        isLoading: false
      }
    case 'FETCH_USER_FAILED':
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default itemReducer
