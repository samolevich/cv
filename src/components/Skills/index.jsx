import React from "react";
import style from "./index.module.css";

export default ({ skills: { title, logo, list } }) => {
  return (
    <div>
      <h2>
        <img className={style.logo} src={logo} alt={title} />
        {title}
      </h2>
      <ul>
        {list.map(skill => (
          <li className={style.skill} key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};
