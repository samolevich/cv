import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.css';

export default () => {
  return (
    <nav>
      <li className={style.list}>
        <NavLink to='cv/'>
          <img className={style.logo} src='img/about.svg' alt='about' /><span className={style.hiddenformobile}> Обо мне</span>
        </NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='cv/projects'>
          <img className={style.logo} src='img/projects.svg' alt='projects' /><span className={style.hiddenformobile}> Проекты</span>
        </NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/certificates'>
          <img
            className={style.logo}
            src='img/certificate.svg'
            alt='certificate'
          /><span className={style.hiddenformobile}> Сертификаты</span>
        </NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='cv/skills'>
          <img className={style.logo} src='img/skills.svg' alt='skills' /><span className={style.hiddenformobile}> Навыки</span>
        </NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='cv/expirience'>
          <img
            className={style.logo}
            src='img/expirience.svg'
            alt='expirience'
          /><span className={style.hiddenformobile}> Опыт</span>
        </NavLink>
      </li>
    </nav>
  );
};
