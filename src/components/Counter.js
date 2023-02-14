import React, { useState, useMemo } from "react";
import Header from "./Header";
/* import User from "./User"; */

/* const userData = { id: 1, name: "Amine" }; */

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Arif");
  console.log("counter component re-render");
  /*   const userData = useMemo(() => {
    return {
      id: 1,
      name,
    };
  }, [name]); */

  return (
    <div>
      {/*  <User data={userData}></User>  */}
      <Header count={count < 5 ? count : 5} />
      <hr></hr>
      <button onClick={() => setName(name === "Arif" ? "Amine" : "Sare")}>
        Set Name
      </button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
}

export default Counter;
