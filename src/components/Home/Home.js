import React from "react";

// import { getAuthUserData } from "../../redux/issues-reducer";
import { Card } from "react-bootstrap";
import SearchPanel from "./SearchPanel";
import IssuesTable from "./IssuesTable";

const Home = ({
  setUserSearchTerm,
  userSearchTerm,
  searchUserGit,
  setRepoSearchTerm,
  getIssues,
  repoSearchTerm,
  issues,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div>
      <Card className="mb-3 mt-5">
        <Card.Body className="text-center">
          <p className="font-weight-bold">
            <span role="img" aria-label="hand">
              👋
            </span>{" "}
            Want to find issues on github?
          </p>
          <p>
            Fill in user field to get user information and repository field to
            get all issues.
          </p>
          <p>{userSearchTerm}</p>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <SearchPanel
            setUserSearchTerm={setUserSearchTerm}
            userSearchTerm={userSearchTerm}
            searchUserGit={searchUserGit}
            setRepoSearchTerm={setRepoSearchTerm}
            getIssues={getIssues}
            repoSearchTerm={repoSearchTerm}
            currentPage={currentPage}
          />
        </Card.Body>
      </Card>
      <div className="mb-3 ">
        <IssuesTable
          issues={issues}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          userSearchTerm={userSearchTerm}
          repoSearchTerm={repoSearchTerm}
          getIssues={getIssues}
        />
      </div>
    </div>
  );
};

export default Home;
