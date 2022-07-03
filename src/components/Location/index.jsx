import React from 'react';
import style from './index.module.css';

export default props => {
  return (
    <h2 className={style.hiddenformobile}>
      <img src={props.location.logo} alt={props.location.title} className={style.logo} /> {props.location.title}
    </h2>
  );
};
