import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.css';

export default ({ nav }) => {
  return (
    <nav>
      {
        Object.values(nav)
          .filter(el => el.isNav)
          .map(el => (
            <li className={style.list} key={el.title}>
              <NavLink exact activeClassName={style.current} to={el.path}>
                <img className={style.logo} src={el.logo} alt={el.title} />
                <span className={style.hiddenformobile}> {el.title.toUpperCase()}</span>
              </NavLink>
            </li>
          ))
      }
    </nav>
  );
};
