import React from "react";

// import { getAuthUserData } from "../../redux/issues-reducer";
import { Card } from "react-bootstrap";
import SearchPanel from "./SearchPanel";
import IssuesTable from "./IssuesTable";

const Home = ({
  setUserSearchTerm,
  userSearchTerm,
  searchUserGit,
  getAuthUserData,
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
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <SearchPanel
          // setUserSearchTerm={setUserSearchTerm}
          // userSearchTerm={userSearchTerm}
          // searchUserGit={searchUserGit}
          // getAuthUserData={getAuthUserData}
          />
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <IssuesTable />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
