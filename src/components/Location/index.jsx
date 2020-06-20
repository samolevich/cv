import React from 'react';
import style from './index.module.css';

export default () => {
  return (
    <h2 className={style.hiddenformobile}>
      <img src='img/location.svg' alt='location' className={style.logo} />{' '}
      Москва
    </h2>
  );
};
