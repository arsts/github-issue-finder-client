import React from "react";
import Home from "./Home";
import { connect } from "react-redux";
import {
  setUserSearchTerm,
  searchUserGit,
  getAuthUserData,
} from "../../redux/reducers";
const HomeContainer = ({ userSearchTerm, setUserSearchTerm }) => {
  return (
    <Home
      userSearchTerm={userSearchTerm}
      setUserSearchTerm={setUserSearchTerm}
      searchUserGit={searchUserGit}
      getAuthUserData={getAuthUserData}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    userSearchTerm: state.issuesReducer.userSearchTerm,
  };
};

export default connect(mapStateToProps, {
  setUserSearchTerm,
  searchUserGit,
  getAuthUserData,
})(HomeContainer);
