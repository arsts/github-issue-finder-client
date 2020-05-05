//Initialise state

const authInitialState = {
  user: {},
  isAuth: false,
  isPending: false,
  error: "",
};

const searchUserInitialState = {
  isPending: false,
  error: "",
  userSearchTerm: "facebook",
  userGit: {},
};

const REQUEST_USER_PENDING = "github-issue-finder/auth/REQUEST_USER_PENDING";
const REQUEST_USER_SUCCESS = "github-issue-finder/auth/REQUEST_USER_SUCCESS";
const REQUEST_USER_FAILED = "github-issue-finder/auth/REQUEST_USER_FAILED";

const SEARCH_USER_GIT_PENDING =
  "github-issue-finder/issues/SEARCH_USER_GIT_PENDING";
const SEARCH_USER_GIT_SUCCESS =
  "github-issue-finder/issues/SEARCH_USER_GIT_SUCCESS";
const SEARCH_USER_GIT_FAILED =
  "github-issue-finder/issues/SEARCH_USER_GIT_FAILED";
const SET_USER_SEARCH_TERM = "github-issue-finder/issues/SET_USER_SEARCH_TERM";

export const authReducer = (state = authInitialState, action = {}) => {
  switch (action.type) {
    case REQUEST_USER_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_USER_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload._json,
        isPending: false,
        isAuth: true,
      });
    case REQUEST_USER_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};

export const searchUserReducer = (
  state = searchUserInitialState,
  action = {}
) => {
  switch (action.type) {
    case SEARCH_USER_GIT_PENDING:
      return Object.assign({}, state, { isPending: true });
    case SEARCH_USER_GIT_SUCCESS:
      return Object.assign({}, state, {
        userGit: action.payload,
        isPending: false,
      });
    case SEARCH_USER_GIT_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    case SET_USER_SEARCH_TERM:
      return Object.assign({}, state, {
        userSearchTerm: action.payload,
      });
    default:
      return state;
  }
};

export const getAuthUserData = () => (dispatch) => {
  dispatch({ type: REQUEST_USER_PENDING });
  fetch("http://localhost:5000/user")
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_USER_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_USER_FAILED, payload: error }));
};

export const setUserSearchTerm = (data) => {
  return { type: SET_USER_SEARCH_TERM, payload: data };
};

export const searchUserGit = (searchTerm) => (dispatch) => {
  dispatch({ type: SEARCH_USER_GIT_PENDING });
  fetch(`https://api.github.com/users/${searchTerm}`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: SEARCH_USER_GIT_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: SEARCH_USER_GIT_FAILED, payload: error })
    );
};
