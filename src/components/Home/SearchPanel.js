import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { setUserSearchTerm, searchUserGit } from "../../redux/reducers";

const SearchPanel = ({ setUserSearchTerm, userSearchTerm, searchUserGit }) => {
  const handleUserChange = (e) => {
    setUserSearchTerm(e.target.value);
  };
  const handleUserSubmit = (e) => {
    if (e.key === "Enter") {
      // dispatch thunk

      searchUserGit(userSearchTerm);
    }
  };
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Find a user..."
            value={userSearchTerm}
            onChange={handleUserChange}
            onKeyDown={handleUserSubmit}
          />
        </Col>
        <Col>
          <Form.Control type="text" placeholder="Find a repository..." />
        </Col>
      </Row>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    userSearchTerm: state.issuesReducer.userSearchTerm,
  };
};

export default connect(mapStateToProps, {
  setUserSearchTerm,
  searchUserGit,
})(SearchPanel);
