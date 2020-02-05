import React, { useEffect, useState } from "react";
import userService from "./userService";

function Users() {
  const [users, set] = useState([]);
  useEffect(() => {
    userService.get().then(response => {
      set(response);
    });
  }, []);

  if (!users) return <p>Wait...</p>;

  return (
    <ul>
      {users.map((user, index) => {
        return (
          <li key={index}>
            {user.name} :: {user.email}
          </li>
        );
      })}
    </ul>
  );
}

export default Users;
