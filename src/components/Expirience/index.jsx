import React from 'react';
import style from './index.module.css';

export default ({ exp }) => {
  return (
    <div>
      <h2>
        <img className={style.logo} src={exp.logo} alt={exp.title} /> {exp.title}
      </h2>
      <h3>{exp.relevant.title}</h3>
      <p>
        {exp.timeSince()}
        {exp.relevant.explanation.map(str => <span key={str}>{str}<br /></span>)}
        </p>
      <hr />
      <h3>{exp.nonRelevant.title}</h3>
      <p>{exp.nonRelevant.explanation}</p>
    </div>
  );
};
