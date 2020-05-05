import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";

const Issue = ({ issueId, issues, match }) => {
  const index = match.params.index;
  const issue = issues[index];
  console.log(issue);

  return (
    <div>
      <h1>{issue.title}</h1>
      <Card className="mt-4">
        <Card.Body>
          <ReactMarkdown source={issue.body} />
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    issueId: state.issuesReducer.issueId,
    issues: state.issuesReducer.issues,
  };
};

export default connect(mapStateToProps, {})(Issue);
