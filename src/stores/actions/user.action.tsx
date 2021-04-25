import  GithubServices from '../../api/Github.services'

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  }
}

export const fetchUserRequestPlus = () => {
  return {
    type: 'FETCH_USER_REQUEST_PLUS'
  }
}

export const fetchUserSuccess = (users:any) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: users
  }
}
export const fetchUserSuccessPlus = (users:any) => {
  return {
    type: 'FETCH_USER_SUCCESS_PLUS',
    payload: users
  }
}

export const fetchUserFail = () => {
  return {
    type: 'FETCH_USER_FAILED'
  }
}
export const changeMomentun = () => {
  return {
    type: 'CHANGE_MOMENTUN'
  }
}
export const changeSort = (value:string) => {
  console.log(value)
  return {
    type: 'CHANGE_SORT',
    payload:value
  }
}
export const changePerpage = (value:any) => {
  return {
    type: 'CHANGE_PER_PAGE',
    payload:value
  }
}

export const fetchDataUser = ({since=1,per_page=25}) => (dispatch:any) => {
    dispatch(fetchUserRequest())
    GithubServices.getUsers(since,per_page)
    .then(result=>{
      console.log(result.data);
      dispatch(fetchUserSuccess(result.data))
    })
    .catch(error=>{
      dispatch(fetchUserFail())
    });
}
export const fetchDataUserPlus = ({since=1,per_page=25}) => (dispatch:any) => {
  console.log(since)
  console.log(per_page)
  dispatch(fetchUserRequestPlus())
  GithubServices.getUsers(since,per_page)
  .then(result=>{
    console.log(result.data);
    dispatch(fetchUserSuccessPlus(result.data))
  })
  .catch(error=>{
    dispatch(fetchUserFail())
  });
}
