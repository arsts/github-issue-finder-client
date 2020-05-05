import React, { Fragment } from "react";
import { Table, Card, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const IssuesTable = ({
  issues,
  currentPage,
  totalPages,
  setCurrentPage,
  getIssues,
  userSearchTerm,
  repoSearchTerm,
}) => {
  console.log(currentPage);

  const setPage = (pageNum) => {
    console.log("from setPage " + pageNum);
    if (pageNum > totalPages || pageNum < 1) {
      return;
    }
    setCurrentPage(pageNum);
    getIssues(userSearchTerm, repoSearchTerm, pageNum);
  };

  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        onClick={() => setPage(number)}
        key={number}
        active={number === currentPage}
      >
        {number}
      </Pagination.Item>
    );
  }

  if (!issues) {
    return (
      <Card>
        <Card.Body>
          <h1 className="text-center">No issues</h1>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Fragment>
      <Table bordered hover className="bg-white">
        <thead>
          <tr>
            <th>Issues</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue, index, arr) => {
            return (
              <tr key={issue.id}>
                <td>
                  <Link
                    to={`/issue/${index}/${issue.id}`}
                    className="text-reset text-decoration-none"
                  >
                    {issue.title}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pagination className="w-50 mx-auto d-flex justify-content-center mb-5">
        <Pagination.First
          onClick={() => {
            setPage(1);
          }}
        />
        <Pagination.Prev
          onClick={() => {
            setPage(currentPage);
          }}
        />
        {items[currentPage - 3]}
        {items[currentPage - 2]}
        {items[currentPage - 1]}
        {items[currentPage]}
        {items[currentPage + 1]}
        <Pagination.Next
          onClick={() => {
            setPage(currentPage + 1);
          }}
        />
        <Pagination.Last
          onClick={() => {
            setPage(totalPages);
          }}
        />
      </Pagination>
    </Fragment>
  );
};

export default IssuesTable;
