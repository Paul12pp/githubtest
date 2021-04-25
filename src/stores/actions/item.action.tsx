import  Services from '../../api/fakeApiUser'

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

export const fetchUserFail = () => {
  return {
    type: 'FETCH_USER_FAILED'
  }
}
