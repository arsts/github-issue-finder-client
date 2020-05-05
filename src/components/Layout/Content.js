import React from "react";

const Content = ({ children }) => {
  return (
    <main className="container" style={{ maxWidth: "1220px", width: "100%" }}>
      {children}
    </main>
  );
};

export default Content;
