import React from 'react';
import style from './index.module.css';

export default () => {
  return (
    <div>
      <h2>
        <img className={style.logo} src='img/projects.svg' alt='projects' />{' '}
        Проекты
      </h2>
      <h2>Fridgy</h2>
      <p>
        Приложение, в котором реализован виртуальный холодильник. В Fridgy легко
        добавить продукт в список, указать его срок годности, редактировать
        продукт, удалить. В то же время приложение отслеживает дату годности,
        выдаёт рецепты с продуктами, которые близки к дате истечения срока, а
        также реализован полнофункциональный шоппинг лист.
        <br />
        Проект разрабатывался в команде из 4 человек.
        <br />В проекте использовались технологии: React, React-Bootstrap,
        Redux, NodeJS, Express, MongoDB, Mongoose, HTML, CSS, Javascript.
      </p>
      <a
        href='https://fridgy-2020.herokuapp.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Heroku Deploy
      </a>
      <br />
      <a
        href='https://github.com/negomi-e/fridgy/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Основной репозиторий проекта
      </a>{' '}(код)
      <br />
      <a
        href='https://github.com/samolevich/fridgy'
        target='_blank'
        rel='noopener noreferrer'
      >
        Резервный форк основного репозитория проекта
      </a>{' '}(код)
      <h2>EventPlanner</h2>
      <p>
        В команде из трёх человек разрабатывал приложение, которое позволяет
        запланировать мероприятие и дать возможность проголосовать за удобное
        время участникам мероприятия, а также свести статистику по голосам.
        <br />В проекте использовались технологии: HTML, CSS, Javascript,
        NodeJS, Express, Handlebars, MongoDB, Mongoose, BCrypt(lib).
      </p>
      <a
        href='https://github.com/ArtShilov/eventPlaner'
        target='_blank'
        rel='noopener noreferrer'
      >
        Основной репозиторий проекта
      </a>{' '}(код)
      <br />
      <a
        href='https://github.com/samolevich/eventPlaner'
        target='_blank'
        rel='noopener noreferrer'
      >
        Резервный форк основного репозитория проекта
      </a>{' '}(код)
      <h2>RentApp</h2>
      <p>
        Разрабытывал приложение в команде из четырёх человек, в котором
        реализованы добавление объекта недвижимости, редактирование и удаление.
        Модератор имеет дополнительные возможности по редактированию заявок.
        <br />
        Технологии в проекте: HTML, CSS, Javascript, NodeJS, Express,
        Handlebars, MongoDB, Mongoose, Materialize.
      </p>
      <a
        href='https://github.com/SlavaPush/core-rent-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Основной репозиторий проекта
      </a>{' '}(код)
      <br />
      <a
        href='https://github.com/samolevich/core-rent-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Резервный форк основного репозитория проекта
      </a>{' '}(код)
      <h2>API Github</h2>
      <p>
        Проект работает с API Github и выдаёт последнюю активность в искомой
        организации (commit, pullrequest...).
        <br />
        Технологии: JavaScript, HTML, CSS, Materialize.
      </p>
      <a
        href='https://github.com/samolevich/solo-project-api-github'
        target='_blank'
        rel='noopener noreferrer'
      >
        Основной репозиторий проекта
      </a>{' '}(код)
      <br />
      <a
        href='https://samolevich.github.io/solo-project-api-github/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Деплой на Github Pages
      </a>
      <h2>API HeadHunter</h2>
      <p>
        Проект работает с API HeadHunter и выдаёт последние опубликованные
        вакансии по региону Москва.
        <br />
        JavaScript, HTML, CSS, Materialize.
      </p>
      <a
        href='https://github.com/samolevich/solo-headhunder-api'
        target='_blank'
        rel='noopener noreferrer'
      >
        Основной репозиторий проекта
      </a>{' '}(код)
      <br />
      <a
        href='https://samolevich.github.io/solo-headhunder-api/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Деплой на Github Pages
      </a>
      <h2>CV</h2>
      <p>Приложение-резюме.</p>
      <a
        href='https://github.com/samolevich/cv'
        target='_blank'
        rel='noopener noreferrer'
      >
        Основной репозиторий проекта
      </a>{' '}(код)
      <br />
      <a
        href='https://samolevich.github.io/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Деплой на Github Pages
      </a>
    </div>
  );
};
