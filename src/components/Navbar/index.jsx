import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.css';

export default () => {
  return (
    <nav>
      <li className={style.list}>
        <NavLink to='/about'>Обо мне</NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/projects'>Проекты</NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/skills'>Навыки</NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/certificates'>Сертификаты</NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/expirience'>Опыт</NavLink>
      </li>
      <li className={style.list}>
        <NavLink to='/education'>Образование</NavLink>
      </li>
    </nav>
  );
};
