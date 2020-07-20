import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.css';

export default props => {
  const skills = props.skills.join(', ');
  return (
    <div>
      <h1>Javascript разработчик MERN</h1>

      <h2>
        <NavLink to='/skills'>
          <img className={style.logo} src='img/skills.svg' alt='skills' />{' '}
          Навыки
        </NavLink>
      </h2>
      <p>{skills}</p>

      <h2>
        <NavLink to='/projects'>
          <img className={style.logo} src='img/projects.svg' alt='projects' />{' '}
          Проекты
        </NavLink>
      </h2>
      <p>
        В моей копилке несколько проектов разной степени сложности. Какие-то из
        них разрабытвались в команде, используя систему контроля версий git, а
        какие-то самостоятельно, как например, текущий сайт-резюме.
        <br />С проектами можно ознакомиться на отдельной{' '}
        <NavLink to='/projects'>странице</NavLink> или в непосредственно в <a
          href='https://github.com/samolevich'
          target='_blank'
          rel='noopener noreferrer'
        >
        профиле Github
        </a>
        .
      </p>

      <h2>
        <NavLink to='/certificates'>
          <img
            className={style.logo}
            src='img/certificate.svg'
            alt='certificates'
          />{' '}
          Сертификаты
        </NavLink>
      </h2>
      <p>
        Elbrus Coding Bootcamp JavaScript Course - более 500 часов разработки.
        <br />
        Free Code Camp JavaScript Algorithms and Data Structures - более 300
        часов разработки.
        <br />
        Free Code Camp Responsive Web Design - более 300 часов разработки.
        <br />
        Stepik JavaScript Course for beginners - около 100 часов разработки.
      </p>

      <h2>
        <NavLink to='/expirience'>
          <img
            className={style.logo}
            src='img/expirience.svg'
            alt='expirience'
          />{' '}
          Опыт работы
        </NavLink>
      </h2>
      <p>
        Релевантный опыт - 8 месяцев, начиная с декабря 2019 года.
        <br />
        Нерелевантный опыт - 17 лет в торговле (корпусная мебель, банковские
        продукты и услуги, телекоммуникационные продукты и услуги).
      </p>

      <h2>
        <NavLink to='/'>
          <img className={style.logo} src='img/future.svg' alt='future' /> Планы
        </NavLink>
      </h2>
      <p>
        В ближайших планах изучить TypeScript, затем Vue. После Angular.
        <br />
        В среднесрочных планах изучить Python, затем Django.
        <br />В планах на долгую перспективу изучить Go, C/C++.
      </p>

      <h2>
        <NavLink to='/'>
          <img className={style.logo} src='img/education.svg' alt='education' />{' '}
          Образование
        </NavLink>
      </h2>
      <p>
        Основное образование - среднее.
        <br />
        При этом, чтобы быть более понятным для рынка в портфолио у меня
        присутствуют <NavLink to='/certificates'>сертификаты</NavLink> и ряд{' '}
        <NavLink to='/projects'>проектов</NavLink> для более ясного
        представления обо мне как о разработчике.
      </p>
    </div>
  );
};
