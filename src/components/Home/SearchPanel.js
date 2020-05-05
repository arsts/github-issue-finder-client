import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const SearchPanel = ({
  setUserSearchTerm,
  userSearchTerm,
  searchUserGit,
  getIssues,
  setRepoSearchTerm,
  repoSearchTerm,
  currentPage,
}) => {
  console.log(currentPage);

  const handleUserChange = (e) => {
    setUserSearchTerm(e.target.value);
  };
  const handleUserSubmit = (e) => {
    if (e.key === "Enter") {
      // dispatch thunk
      searchUserGit(userSearchTerm);
    }
  };
  const handleRepoChange = (e) => {
    setRepoSearchTerm(e.target.value);
  };
  const handleRepoSubmit = (e) => {
    if (e.key === "Enter") {
      // dispatch thunk
      getIssues(userSearchTerm, repoSearchTerm, currentPage);
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
          <Form.Control
            type="text"
            placeholder="Find a repository..."
            value={repoSearchTerm}
            onChange={handleRepoChange}
            onKeyDown={handleRepoSubmit}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default SearchPanel;
