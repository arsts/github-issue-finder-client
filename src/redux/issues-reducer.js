const issuesInitialState = {
  isPending: false,
  error: "",
  repoGit: null,
  repoSearchTerm: "react",
  issues: null,
  totalPages: 20,
  currentPage: 1,
};

const linkParser = (linkHeader) => {
  let re = /<([^\?]+\?[a-z]+=([\d]+))>;[\s]*rel="([a-z]+)"/g;
  let arrRes = [];
  let obj = {};
  while ((arrRes = re.exec(linkHeader)) !== null) {
    obj[arrRes[3]] = {
      url: arrRes[1],
      page: arrRes[2],
    };
  }
  return obj;
};

const REQUEST_ISSUES_PENDING =
  "github-issue-finder/issues/REQUEST_ISSUES_PENDING";
const REQUEST_ISSUES_SUCCESS =
  "github-issue-finder/issues/REQUEST_ISSUES_SUCCESS";
const REQUEST_ISSUES_FAILED =
  "github-issue-finder/issues/REQUEST_ISSUES_FAILED";
const SET_REPO_SEARCH_TERM = "github-issue-finder/issues/SET_REPO_SEARCH_TERM";
const SELECT_ISSUE = "github-issue-finder/issues/SELECT_ISSUE";
const SET_CURRENT_PAGE = "github-issue-finder/issues/SET_CURRENT_PAGE";
const SET_TOTAL_PAGES = "github-issue-finder/issues/SET_TOTAL_PAGES";
const REQUEST_NEW_PAGE_PENDING =
  "github-issue-finder/issues/REQUEST_NEW_PAGE_PENDING";
const REQUEST_NEW_PAGE_SUCCESS =
  "github-issue-finder/issues/REQUEST_NEW_PAGE_SUCCESS";
const REQUEST_NEW_PAGE_FAILED =
  "github-issue-finder/issues/REQUEST_NEW_PAGE_FAILED";

export const issuesReducer = (state = issuesInitialState, action = {}) => {
  switch (action.type) {
    case REQUEST_ISSUES_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ISSUES_SUCCESS:
      return Object.assign({}, state, {
        issues: action.payload,
        isPending: false,
      });
    case REQUEST_ISSUES_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    case SET_REPO_SEARCH_TERM:
      return Object.assign({}, state, {
        repoSearchTerm: action.payload,
      });
    case SET_TOTAL_PAGES:
      return Object.assign({}, state, {
        totalPages: action.payload,
      });
    case SET_CURRENT_PAGE:
      console.log("from  reducer CURRENT_PAGE " + action.payload);
      return Object.assign({}, state, {
        currentPage: action.payload,
      });

    default:
      return state;
  }
};

export const setRepoSearchTerm = (data) => {
  return { type: SET_REPO_SEARCH_TERM, payload: data };
};

export const setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, payload: page };
};
export const setTotalPages = (totalPages) => {
  return { type: SET_TOTAL_PAGES, payload: totalPages };
};

export const selectIssue = (index) => {
  return { type: SELECT_ISSUE, payload: index };
};

export const getIssues = (user, repo, page) => (dispatch) => {
  dispatch({ type: REQUEST_ISSUES_PENDING });
  fetch(`https://api.github.com/repos/${user}/${repo}/issues?page=${page}`)
    .then((response) => {
      // const linkHeader = response.headers.get("Link");
      // const headerParsed = linkParser(linkHeader);
      // dispatch(setTotalPages(+headerParsed.last.page));

      return response.json();
    })
    .then((data) => {
      dispatch({ type: REQUEST_ISSUES_SUCCESS, payload: data });
    })

    .catch((error) =>
      dispatch({ type: REQUEST_ISSUES_FAILED, payload: error })
    );
};

export const getNewPage = (user, repo, page) => (dispatch) => {
  dispatch({ type: REQUEST_NEW_PAGE_PENDING });
  fetch(`https://api.github.com/repos/${user}/${repo}/issues?page=${page}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch({ type: REQUEST_NEW_PAGE_SUCCESS, payload: data });
    })

    .catch((error) =>
      dispatch({ type: REQUEST_NEW_PAGE_FAILED, payload: error })
    );
};
