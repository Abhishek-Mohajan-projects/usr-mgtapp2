import React from "react";

import User from "./User";
import style from "./users.module.css";

const Users = (props) => {
  return (
    <section className={style.users}>
      {props.users.map((user) => {
        return (
          <User
            {...user}
            key={user.id}
            id={user.id}
            onRemoveUser={props.onRemoveUser}
          />
        );
      })}
    </section>
  );
};

export default Users;
