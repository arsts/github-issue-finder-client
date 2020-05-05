import React from "react";
import Home from "./Home";
import { connect } from "react-redux";
import { searchUserGit, setUserSearchTerm } from "../../redux/reducers";
import { Redirect } from "react-router-dom";
import {
  selectIssue,
  getIssues,
  setRepoSearchTerm,
  setCurrentPage,
} from "../../redux/issues-reducer";

const HomeContainer = ({
  userSearchTerm,
  setUserSearchTerm,
  searchUserGit,
  setRepoSearchTerm,
  getIssues,
  repoSearchTerm,
  issues,
  isAuth,
  selectIssue,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  if (isAuth === false) return <Redirect to="/login" />;

  return (
    <Home
      userSearchTerm={userSearchTerm}
      setUserSearchTerm={setUserSearchTerm}
      searchUserGit={searchUserGit}
      setRepoSearchTerm={setRepoSearchTerm}
      getIssues={getIssues}
      repoSearchTerm={repoSearchTerm}
      issues={issues}
      selectIssue={selectIssue}
      currentPage={currentPage}
      totalPages={totalPages}
      setCurrentPage={setCurrentPage}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.searchUserReducer.isAuth,
    userSearchTerm: state.searchUserReducer.userSearchTerm,
    repoSearchTerm: state.issuesReducer.repoSearchTerm,
    issues: state.issuesReducer.issues,
    currentPage: state.issuesReducer.currentPage,
    totalPages: state.issuesReducer.totalPages,
  };
};

export default connect(mapStateToProps, {
  searchUserGit,
  setUserSearchTerm,
  getIssues,
  setRepoSearchTerm,
  selectIssue,
  setCurrentPage,
})(HomeContainer);
