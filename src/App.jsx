import React from 'react';
import aboutMe from "./aboutMe";
import style from './App.module.css';
import Bar from './components/Bar';
import Info from './components/Info';

export default () => {
  return (
    <div className={style.main}>
      <div></div>
      <div className={style.content}>
        <div className={style.bar}>
          <Bar bar={aboutMe}/>
        </div>
        <div className={style.info}>
          <Info info={aboutMe}/>
        </div>
      </div>
    </div>
  );
};
