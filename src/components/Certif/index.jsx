import React, { useState } from 'react';
import style from './index.module.css';

export default () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2>
        <img
          className={style.logo}
          src='img/certificate.svg'
          alt='certificate'
        />{' '}
        Сертификаты
      </h2>
      <p>
        Офлайн-интенсив Elbrus Coding Bootcamp:
        <br />
        <a
          href='https://drive.google.com/file/d/1KHZQQMJqLV-86Xi47VUlu4Tm-ak8AheM/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
        >
          Сертификат FullStack JavaScript разработчик
        </a>
      </p>
      <p>
        Онлайн курс по JavaScript от Free Code Camp
        <br />
        <a
          href='https://www.freecodecamp.org/certification/fcca8ff6e25-52f4-4953-9dd1-5338e016a242/javascript-algorithms-and-data-structures'
          target='_blank'
          rel='noopener noreferrer'
        >
          Сертификат JavaScript Algorithms and Data Structures
        </a>
        <br />
        <a
          href='https://www.freecodecamp.org/certification/fcca8ff6e25-52f4-4953-9dd1-5338e016a242/responsive-web-design'
          target='_blank'
          rel='noopener noreferrer'
        >
          Сертификат Responsive Web Design
        </a>
        <a
          href='https://www.freecodecamp.org/certification/samolevich/front-end-development-libraries'
          target='_blank'
          rel='noopener noreferrer'
        >
          Front End Development Libraries
        </a>
      </p>
      <p>
        Онлайн курс по JavaScript от Stepik
        <br />
        <a
          href='https://stepik.org/cert/283188'
          target='_blank'
          rel='noopener noreferrer'
        >
          Сертификат JavaScript Course for beginners
        </a>
      </p>
      <p>
        <a
          href='https://www.codewars.com/users/samolevich'
          target='_blank'
          rel='noopener noreferrer'
        >
          Профиль на CodeWars
        </a>
      </p>
      <button className={style.button} onClick={() => setShow(!show)}>
        {show ? 'Развидеть' : 'Посмотреть'} сертификаты
      </button>
      {show && (
        <>
          <p>
            <img
              className={style.certificate}
              src='img/cert/EBC-certificate-Samolevich.png'
              alt='Elbrus certificate'
            />
          </p>
          <p>
            <img
              className={style.certificate}
              src='img/cert/Free Code Camp JavaScript Algorithms and Data Structures.png'
              alt='Algorithms certificate'
            />
          </p>
          <p>
            <img
              className={style.certificate}
              src='img/cert/Free Code Camp Responsive Web Design.png'
              alt='esponsive Web Design certificate'
            />
          </p>
          <p>
            <img
              className={style.certificate}
              src='img/cert/Stepik JavaScript for beginners.png'
              alt='Stepik certificate'
            />
          </p>
        </>
      )}
    </div>
  );
};
