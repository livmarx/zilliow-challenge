import { GOT_REPOS, GOT_USER } from './actions';

//initial state:
const initialState = {
  repos: [],
  user: {},
};

// reducer:
function reducer(state = initialState, action) {
  switch (action.type) {
    case GOT_REPOS:
      return { repos: action.repos };
    case GOT_USER:
      return { user: action.user };
    default:
      return state;
  }
}
export default reducer;
