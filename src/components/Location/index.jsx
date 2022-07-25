import React from "react";
import style from "./index.module.css";

export default ({ title, logo }) => {
  return (
    <h2 className={style.hiddenformobile}>
      <img src={logo} alt={title} className={style.logo} />
      {title}
    </h2>
  );
};
