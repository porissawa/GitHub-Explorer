import { actions } from '../actions/repoDetails';

const initialState = {
  isFetching: false,
  error: '',
  branches: [],
  commits: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_BRANCHES_REQUEST:
    case actions.FETCH_COMMITS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actions.FETCH_BRANCHES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        branches: [...action.response]
      };
    case actions.FETCH_COMMITS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        commits: [...action.response]
      };
    case actions.FETCH_BRANCHES_FAILURE:
    case actions.FETCH_COMMITS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default reducer;
