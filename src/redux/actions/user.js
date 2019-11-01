import http from '../../util/http';

const FETCH_USER_REQUEST = 'user/FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'user/FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'user/FETCH_USER_FAILURE';

export const actions = {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
};

function fetchUserRequest() {
  return { type: FETCH_USER_REQUEST };
}
function fetchUserSuccess(response, username) {
  return {
    type: FETCH_USER_SUCCESS,
    response,
    username
  };
}
function fetchUserFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    error
  };
}

export function getUser(username) {
  return async dispatch => {
    dispatch(fetchUserRequest());

    try {
      const response = await http({
        method: 'get',
        url: `users/${username}/repos`
      });
      dispatch(fetchUserSuccess(response.data, username));
    } catch (error) {
      dispatch(fetchUserFailure(error));
      throw error;
    }
  };
}
