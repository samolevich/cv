import React from 'react';
import style from './index.module.css';

export default () => {
  return (
    <>
      <div className={style.hiddenformobile}>
        <h2>
          <img className={style.logo} src='img/contacts.svg' alt='' /> Контакты
        </h2>
        <p>
          <a className={style.contacts} href='mailto:samolevich@gmail.com'>
            samolevich@gmail.com
          </a>
          <br />
          <a className={style.contacts} href='tel:+79263248737'>
            +7926 324 87 37
          </a>
          <br />
          <a className={style.contacts} href='https://t.me/samolevich'>
            Telegram me
          </a>
          <br />
          <br />
          <a
            className={style.contacts}
            href='https://github.com/samolevich'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github profile
          </a>
          <br />
          <a
            className={style.contacts}
            href='https://www.codewars.com/users/samolevich'
            target='_blank'
            rel='noopener noreferrer'
          >
            Codewars profile
          </a>
          <br />
          <a
            className={style.contacts}
            href='https://www.freecodecamp.org/fcca8ff6e25-52f4-4953-9dd1-5338e016a242'
            target='_blank'
            rel='noopener noreferrer'
          >
            Free Code Camp profile
          </a>
          <br />
          <a
            className={style.contacts}
            href='https://hh.ru/resume/6d6fcb45ff07ff00080039ed1f3056434d3175'
            target='_blank'
            rel='noopener noreferrer'
          >
            HeadHunter cv
          </a>
        </p>
      </div>
      <div className={style.showformobile}>
        <hr/>
        <a href='tel:+79263248737'>
          <img className={style.logo} src='img/call.svg' alt='phone' />
        </a>
        <br />
        <a href='mailto:samolevich@gmail.com'>
          <img className={style.logo} src='img/contacts.svg' alt='email' />
        </a>
        <br />
        <a href='https://t.me/samolevich'>
          <img className={style.logo} src='img/telegram.svg' alt='telegram' />
        </a>
        <hr/>
        <a href='https://github.com/samolevich' target="_blank" rel="noopener noreferrer">
          <img className={style.logo} src='img/octocat.svg' alt='github profile'/>
        </a>
      </div>
    </>
  );
};
