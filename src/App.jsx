import React from 'react';
import style from './App.module.css';
import Bar from './components/Bar';
import Info from './components/Info';

const App = () => {
  return (
    <div className={style.main}>
      <div></div>
      <div className={style.content}>
        <div className={style.bar}>
          <Bar />
        </div>
        <div className={style.info}>
          <Info />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default App;
