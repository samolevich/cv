import React from 'react';
import style from './index.module.css';

export default ({ exp }) => {
  const ms = new Date().getTime() - new Date(2020, 6).getTime();
  const months = Math.ceil(ms/1000/60/60/24/30.4375);
  const timeSince = `В качестве разработчика более ${Math.floor(months / 12)} лет и ${months % 12} мес. `;
  return (
    <div>
      <h2>
        <img className={style.logo} src={exp.logo} alt={exp.title} /> {exp.title}
      </h2>
      <h3>{exp.relevant.title}</h3>
      <p>
        {timeSince}
        {exp.relevant.explanation.map(str => <>{str}<br /></>)}
        </p>
      <hr />
      <h3>{exp.nonRelevant.title}</h3>
      <p>{exp.nonRelevant.explanation}</p>
    </div>
  );
};
