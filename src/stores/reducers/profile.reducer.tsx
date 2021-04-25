const initialState = {
  user: {},
  isLoading: true,
  //
  repos: [],
  loadingRepos: true,
  //
  imgLoading: true,
  //
  followers: [],
  loadindFollow: true,
  //
  modal: false,
  selected: {}
}

export const profileReducer = (state = initialState, action: any) => {
  const { payload } = action
  switch (action.type) {
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        isLoading: true
      }

    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        user: payload,
        isLoading: false
      }
    case 'FETCH_USER_FAILED':
      return {
        ...state,
        isLoading: false,
      }
    case 'FETCH_REPOS_REQUEST':
      return {
        ...state,
        loadingRepos: true
      }

    case 'FETCH_REPOS_SUCCESS':
      return {
        ...state,
        repos: payload,
        loadingRepos: false
      }
    case 'FETCH_REPOS_FAILED':
      return {
        ...state,
        loadingRepos: false,
      }
    case 'FETCH_IMAGE_REQUEST':
      return {
        ...state,
        imgLoading: true
      }

    case 'FETCH_IMAGE_SUCCESS':
      return {
        ...state,
        imgLoading: false
      }
    case 'SHOW_MODAL':
      return {
        ...state,
        modal: true
      }

    case 'HIDE_MODAL':
      return {
        ...state,
        modal: false
      }
    case 'CHANGE_SELECT':
      return {
        ...state,
        selected: payload
      }
    case 'FETCH_FOLLOW_REQUEST':
      return {
        ...state,
        loadindFollow: true
      }

    case 'FETCH_FOLLOW_SUCCESS':
      return {
        ...state,
        followers: payload,
        loadindFollow: false
      }
    case 'FETCH_FOLLOW_FAILED':
      return {
        ...state,
        loadindFollow: false,
      }
    default:
      return state
  }
}

export default profileReducer
