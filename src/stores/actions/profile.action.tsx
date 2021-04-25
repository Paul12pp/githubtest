import GithubServices from '../../api/Github.services'

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  }
}


export const fetchUserSuccess = (user: any) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: user
  }
}
export const fetchUserFail = () => {
  return {
    type: 'FETCH_USER_FAILED'
  }
}
export const fetchReposRequest = () => {
  return {
    type: 'FETCH_REPOS_REQUEST'
  }
}
export const fetchReposSuccess = (repos: any) => {
  return {
    type: 'FETCH_REPOS_SUCCESS',
    payload: repos
  }
}
export const fetchReposFail = () => {
  return {
    type: 'FETCH_REPOS_FAILED'
  }
}
export const fetchImageRequest = () => {
  return {
    type: 'FETCH_IMAGE_REQUEST'
  }
}

export const fetchImageSuccess = () => {
  return {
    type: 'FETCH_IMAGE_SUCCESS',
  }
}
export const showModal = () => {
  return {
    type: 'SHOW_MODAL'
  }
}

export const hideModal = () => {
  return {
    type: 'HIDE_MODAL',
  }
}
export const changeSelected = (repos: any) => {
  return {
    type: 'CHANGE_SELECT',
    payload: repos
  }
}
export const fetchFollowRequest = () => {
  return {
    type: 'FETCH_FOLLOW_REQUEST'
  }
}


export const fetchFollowSuccess = (follow: any) => {
  return {
    type: 'FETCH_FOLLOW_SUCCESS',
    payload: follow
  }
}
export const fetchFollowFail = () => {
  return {
    type: 'FETCH_FOLLOW_FAILED'
  }
}

export const fetchDataUser = (username: string) => (dispatch: any) => {
  dispatch(fetchUserRequest())
  console.log('onfetch')
  GithubServices.getUser(username)
    .then(result => {
      console.log(result.data);
      dispatch(fetchUserSuccess(result.data))
    })
    .catch(error => {
      console.log(error)
      dispatch(fetchUserFail())
    });
}
export const fetchDataRepos = (username: string) => (dispatch: any) => {
  dispatch(fetchReposRequest())
  GithubServices.getRepos(username)
    .then(result => {
      console.log(result.data);
      dispatch(fetchReposSuccess(result.data))
    })
    .catch(error => {
      console.log(error)
      dispatch(fetchReposFail())
    });
}
export const fetchFollowUser = (username: string) => (dispatch: any) => {
  dispatch(fetchFollowRequest())
  GithubServices.getFollowers(username)
    .then(result => {
      console.log(result.data);
      dispatch(fetchFollowSuccess(result.data))
    })
    .catch(error => {
      console.log(error)
      dispatch(fetchFollowFail())
    });
}