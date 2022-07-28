import React from "react";
import aboutMe from "../../aboutMe";
import style from "./index.module.css";
import Bar from "../Bar";
import Info from "../Info";

export default () => {
  return (
    <div className={style.main}>
      <div></div>
      <div className={style.content}>
        <div className={style.bar}>
          <Bar bar={aboutMe} />
        </div>
        <div className={style.info}>
          <Info info={aboutMe} />
        </div>
      </div>
    </div>
  );
};
