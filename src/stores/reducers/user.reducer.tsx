const initialState = {
  users: [],
  isLoading: true,
  plus: false,
  momentun: true,
  per_page: 25,
  sort: 'sort-up'
}

export const userReducer = (state = initialState, action: any) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_USER_REQUEST_PLUS':
      return {
        ...state,
        plus: true
      }

    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        users: payload,
        isLoading: false
      }
    case 'FETCH_USER_SUCCESS_PLUS':
      return {
        ...state,
        users: [...state.users, ...action.payload],
        plus: false,
        momentun: true
      }
    case 'FETCH_USER_FAILED':
      return {
        ...state,
        isLoading: false,
        plus: false,
        momentun: true,
      }
    case 'CHANGE_MOMENTUN':
      return {
        ...state,
        momentun: false
      }
    case 'CHANGE_PER_PAGE':
      return {
        ...state,
        per_page: payload
      }
    case 'CHANGE_SORT':
      return {
        ...state,
        sort: payload
      }

    default:
      return state
  }
}

export default userReducer
