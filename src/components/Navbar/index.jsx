import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.module.css';

export default () => {
  return (
    <nav>
      <li>
        <NavLink to='/about'>Обо мне</NavLink>
      </li>
      <li>
        <NavLink to='/projects'>Проекты</NavLink>
      </li>
      <li>
        <NavLink to='/skills'>Навыки</NavLink>
      </li>
      <li>
        <NavLink to='/certificates'>Сертификаты</NavLink>
      </li>
      <li>
        <NavLink to='/expirience'>Опыт</NavLink>
      </li>
      <li>
        <NavLink to='/education'>Образование</NavLink>
      </li>
    </nav>
  );
};
