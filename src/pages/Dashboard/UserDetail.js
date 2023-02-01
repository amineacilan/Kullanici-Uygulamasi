import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function UserDetail() {
  let { id } = useParams();
  // console.log(id);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <div>
      <h2>UserDetail of {user.name}</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link to={`/users/${Number(id) - 1}`}>Önceki Kullanıcı</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
    </div>
  );
}

export default UserDetail;
