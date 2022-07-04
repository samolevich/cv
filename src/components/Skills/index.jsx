import React from 'react';
import aboutMe from "../../aboutMe";
import style from './index.module.css';

export default props => {
  return (
    <div>
      <h2>
        <img  className={style.logo} src={aboutMe.skills.logo} alt={aboutMe.skills.title} /> {aboutMe.skills.title}
      </h2>
      <ul>
        {aboutMe.skills.list.map(skill => (
          <li className={style.skill} key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
