import React from "react";
import style from "./user.module.css";

const User = (props) => {
  const { id, name, email, phone } = props;

  const handleRemoveUser = (id) => {
    props.onRemoveUser(id);
  };
  return (
    <article className={style.user}>
      <div>
        <h3>{id}</h3>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <a href={"tel:" + phone}>{phone}</a>
      </div>
      <button
        className={style.btn}
        onClick={() => {
          handleRemoveUser(id);
        }}
      >
        Remove User
      </button>
    </article>
  );
};

export default User;
