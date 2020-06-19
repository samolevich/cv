import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.css';

export default () => {
  return (
    <nav>
      <li className={style.list}>
        <NavLink to='/'>
          <img className={style.logo} src='img/about.svg' alt='about' /> Обо мне
        </NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/projects'>
          <img className={style.logo} src='img/projects.svg' alt='projects' /> Проекты
        </NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/certificates'>
          <img className={style.logo} src='img/certificate.svg' alt='certificate' /> Сертификаты
        </NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/skills'>
          <img className={style.logo} src='img/skills.svg' alt='skills' /> Навыки
        </NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/expirience'>
          <img className={style.logo} src='img/expirience.svg' alt='expirience' /> Опыт
        </NavLink>
      </li>
    </nav>
  );
};
