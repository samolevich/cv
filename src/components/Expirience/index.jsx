import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.css';

export default () => {
  return (
    <div>
      <h2>
        <img className={style.logo} src='img/expirience.svg' alt='expirience' /> Опыт
      </h2>
      <h3>Релевантный опыт</h3>
      <p>
        Декабрь 2019 - Июнь 2020
        <br />
        Мой опыт в качестве разработчика более 6 месяцев. На данном этапе есть
        несколько <NavLink to='/projects'>проектов</NavLink>, которые были
        реализованы в группе или самостоятельно. Все проекты размещены в
        репозитории{' '}
        <a
          href='https://github.com/samolevich'
          target='_blank'
          rel='noopener noreferrer'
        >
          Github
        </a>
        . Также имеется несколько{' '}
        <NavLink to='/certificates'>сертификатов</NavLink>, чтобы быть более
        читаемым, понятным для рынка.
        <br />
        <br />
        С чем я имел возможность работать:
        <br />
        Основная операционная система - Linux.
        <br />
        Среда разработки - VS Code.
        <br />
        Система контроля версий - Git (Github). В основном из консоли.
        <br />
        CSR App на React (Classes, Hooks), Redux (Thunk), JavaScript (ES6), CSS
        (flex, grid), HTML.
        <br />
        SSR App на NodeJS, Express, Handlebars, MongoDB (Mongoose).
        <br />
        Некоторый опыт React-Bootstrap, Bootstrap, MaterialUI, Materialize.
        <br />
        <br />
        <a
          href='https://hh.ru/resume/6d6fcb45ff07ff00080039ed1f3056434d3175'
          target='_blank'
          rel='noopener noreferrer'
        >
          Резюме
        </a>{' '}
        на HeadHunter.ru.
      </p>
      <hr />
      <h3>Нерелевантный опыт</h3>
      <p>
        17 лет опыта работы связан с торговлей. Начиная с 18 лет, работал в
        торговле B2B (телекоммуникационные услуги, банковские продукты и услуги,
        оптовая торговля алкоголем). Последние 4.5 года занимался продажей
        корпусной мебели физическим лицам.
      </p>
    </div>
  );
};
