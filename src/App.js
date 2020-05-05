import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import HomeContainer from "./components/Home/HomeContainer";
import Login from "./components/Login/Login";
import Issue from "./components/Issue/Issue";
import { connect } from "react-redux";
import { compose } from "redux";
import { getAuthUserData } from "./redux/reducers";

class App extends React.Component {
  componentDidMount() {
    if (!this.props.isAuth) this.props.getAuthUserData();
  }

  render() {
    return (
      <div className="App">
        <Header>
          <Navbar bg="dark">
            <Navbar.Brand style={{ color: "white" }}>Issue Finder</Navbar.Brand>
            <Nav className="mr-auto">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </Nav>
          </Navbar>
        </Header>
        <Content>
          <Switch>
            <Route exact path="/" render={() => <HomeContainer />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/issue/:index/:id" component={Issue} />
          </Switch>
        </Content>
        <Footer>
          <p className="text-center">Footer</p>
        </Footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.searchUserReducer.user,
    isAuth: state.searchUserReducer.isAuth,
    isPending: state.searchUserReducer.isPending,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { getAuthUserData })
)(App);
