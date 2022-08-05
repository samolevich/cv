import React, { useState } from "react";
import aboutMe from "../../aboutMe";
import style from "./index.module.css";
import Bar from "../Bar";
import Info from "../Info";

export default () => {
  const [lang, setLang] = useState("_en");

  return (
    <div className={style.main}>
      <div></div>
      <div className={style.content}>
        <div className={style.bar}>
          <Bar bar={aboutMe} lang={lang} />
        </div>
        <div className={style.info}>
          <Info info={aboutMe} lang={lang} />
        </div>
      </div>
    </div>
  );
};
