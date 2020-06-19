import React from 'react';
import style from './index.module.css';

export default props => {
  return (
    <div>
      <h2>
        <img className={style.logo} src='img/skills.svg' alt='skills' /> Навыки
      </h2>
      <ul>
        {props.skills.map(skill => <li className={style.skill}>{skill}</li>)}
      </ul>
    </div>
  );
};
