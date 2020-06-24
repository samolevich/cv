import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.css';

export default () => {
  return (
    <nav>
      <li className={style.list}>
        <NavLink to='/' exact activeClassName={style.current}>
          <img className={style.logo} src='img/about.svg' alt='about' /><span className={style.hiddenformobile} > Обо мне</span>
        </NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/projects' activeClassName={style.current}>
          <img className={style.logo} src='img/projects.svg' alt='projects' /><span className={style.hiddenformobile} > Проекты</span>
        </NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/certificates' activeClassName={style.current}>
          <img
            className={style.logo}
            src='img/certificate.svg'
            alt='certificate'
          /><span className={style.hiddenformobile}> Сертификаты</span>
        </NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/skills' activeClassName={style.current}>
          <img className={style.logo} src='img/skills.svg' alt='skills' /><span className={style.hiddenformobile}> Навыки</span>
        </NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/expirience' activeClassName={style.current}>
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
