import React from 'react';
import style from './App.module.css';
import Bar from './components/Bar';
import Info from './components/Info';

const App = () => {
  return (
    <div className={style.main}>
      <div></div>
      <div className={style.content}>
        <div className={style.bar}>
          <Bar />
        </div>
        <div className={style.info}>
          <Info />
        </div>
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
