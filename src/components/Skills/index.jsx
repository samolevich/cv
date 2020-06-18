import React from 'react';
import style from './index.module.css';

export default () => {
  return (
    <div>
      <h2>
        <img className={style.logo} src='img/skills.svg' alt='skills' /> Навыки
      </h2>
      <ul>
        <li>Javascript</li>
        <li>React</li>
        <li>Redux</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Handlebars</li>
        <li>Bootstrap</li>
        <li>Materialize</li>
        <li>MaterialUI</li>
        <li>React-Bootstrap</li>
        <li>Linux</li>
        <li>Git</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  );
};
