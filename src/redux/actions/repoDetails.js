import http from '../../util/http';

const FETCH_BRANCHES_REQUEST = 'details/FETCH_BRANCHES_REQUEST';
const FETCH_BRANCHES_SUCCESS = 'details/FETCH_BRANCHES_SUCCESS';
const FETCH_BRANCHES_FAILURE = 'details/FETCH_BRANCHES_FAILURE';
const FETCH_COMMITS_REQUEST = 'details/FETCH_COMMITS_REQUEST';
const FETCH_COMMITS_SUCCESS = 'details/FETCH_COMMITS_SUCCESS';
const FETCH_COMMITS_FAILURE = 'details/FETCH_COMMITS_FAILURE';

export const actions = {
  FETCH_BRANCHES_REQUEST,
  FETCH_BRANCHES_SUCCESS,
  FETCH_BRANCHES_FAILURE,
  FETCH_COMMITS_REQUEST,
  FETCH_COMMITS_SUCCESS,
  FETCH_COMMITS_FAILURE
};

function fetchBranchesRequest() {
  return { type: FETCH_BRANCHES_REQUEST };
}
function fetchBranchesSuccess(response) {
  return {
    type: FETCH_BRANCHES_SUCCESS,
    response
  };
}
function fetchBranchesFailure(error) {
  return {
    type: FETCH_BRANCHES_FAILURE,
    error
  };
}

function fetchCommitsRequest() {
  return { type: FETCH_COMMITS_REQUEST };
}
function fetchCommitsSuccess(response) {
  return {
    type: FETCH_COMMITS_SUCCESS,
    response
  };
}
function fetchCommitsFailure(error) {
  return {
    type: FETCH_COMMITS_FAILURE,
    error
  };
}

export function getCommits(username, repoName) {
  return async dispatch => {
    dispatch(fetchCommitsRequest());

    try {
      const response = await http({
        method: 'get',
        url: `repos/${username}/${repoName}/commits`
      });
      dispatch(fetchCommitsSuccess(response.data));
    } catch (error) {
      dispatch(fetchCommitsFailure(error));
      throw error;
    }
  };
}

export function getBranches(username, repoName) {
  return async dispatch => {
    dispatch(fetchBranchesRequest());

    try {
      const response = await http({
        method: 'get',
        url: `repos/${username}/${repoName}/branches`
      });
      dispatch(fetchBranchesSuccess(response.data));
    } catch (error) {
      dispatch(fetchBranchesFailure(error));
      throw error;
    }
  };
}
