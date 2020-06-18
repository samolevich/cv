import React from 'react';
import Photo from './components/Photo';
import style from './App.module.css';

const App = () => {
  return (
    <div className={style.main}>
      <div></div>
      <div className={style.content}>
        <div className={style.bar}>
          <Photo />
        </div>
        <div className={style.info}>info</div>
      </div>
      <div></div>
    </div>
  );
}

export default App;

// location
// skills
// projects
// history
// contact
// education
// about
// sertificate
// https://api.github.com/users/samolevich
// <img src="img/about.svg" alt="icon" />
// <img src="img/certificate.svg" alt="icon" />
// <img src="img/contacts.svg" alt="icon" />
// <img src="img/education.svg" alt="icon" />
// <img src="img/expirience.svg" alt="icon" />
// <img src="img/location.svg" alt="icon" />
// <img src="img/projects.svg" alt="icon" />
// <img src="img/skills.svg" alt="icon" />
// <img src="img/wink.svg" alt="icon" />