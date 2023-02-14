import React from "react";

function User({ data }) {
  console.log("user component re-render");
  return (
    <div>
      <h2>USER</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default React.memo(User) ;
