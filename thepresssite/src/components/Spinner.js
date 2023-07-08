import React from "react";
const Spinner = () => {
  return (
    <div className="text-center">
      <div className="spinner-border" role="status" style={{ color: "#fff" }}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
