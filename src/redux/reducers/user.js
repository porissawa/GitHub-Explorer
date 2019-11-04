import { actions } from '../actions/user';

const initialState = {
  isFetching: false,
  error: '',
  users: []
};

function reducer(state = initialState, action) {
  const { username } = action;

  switch (action.type) {
    case actions.FETCH_USER_REQUEST:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case actions.FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        users: [{ [username]: action.response }, ...state.users]
      };
    case actions.FETCH_USER_FAILURE:
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
