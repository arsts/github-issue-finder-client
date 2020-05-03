import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import Content from "./components/Layout/Content";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import HomeContainer from "./components/Home/HomeContainer";
import Login from "./components/Login/Login";
import Issue from "./components/Issue/Issue";
import { connect } from "react-redux";
import { compose } from "redux";
import { getAuthUserData } from "./redux/reducers";

class App extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    const { user, isPending, isAuth, getAuthUserData } = this.props;
    return (
      <div className="App">
        <Navbar bg="dark">
          <Navbar.Brand style={{ color: "white" }}>Issue Finder</Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/issue" className="nav-link">
              Issues
            </NavLink>
          </Nav>
          {/* {isAuth ? (
            <Image
              src={user.avatar_url}
              style={{ height: "30px", width: "30px" }}
              roundedCircle
            />
          ) : (
            "no User"
          )} */}
        </Navbar>
        <Content>
          <Switch>
            <Route exact path="/" render={() => <HomeContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/issue" render={() => <Issue />} />
          </Switch>
        </Content>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.issuesReducer.user,
    isAuth: state.issuesReducer.isAuth,
    isPending: state.issuesReducer.isPending,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { getAuthUserData })
)(App);
