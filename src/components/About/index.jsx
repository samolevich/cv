import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './index.module.css';

export default ({ info }) => {
  const { skills, projects, certificates, expirience, futureVision, education } = info;
  // TODO NEED REFACTORING FOR RENDER DATA BY CYCLES
  return (
    <div>
      <h1>{info.title}</h1>

      <h2>
        <NavLink to={skills.path}>
          <img
            className={style.logo}
            src={skills.logo}
            alt={skills.title}
          /> {skills.title}
        </NavLink>
      </h2>
      <p>{skills.list.join(', ')}.</p>

      <h2>
        <NavLink to={projects.path}>
          <img
            className={style.logo}
            src={projects.logo}
            alt={projects.title}
          /> {projects.title}
        </NavLink>
      </h2>
      <p>
        {projects.explanation}<br />
        Подробнее на странице <NavLink to={projects.path}>{projects.title}</NavLink>.
      </p>

      <h2>
        <NavLink to={certificates.path}>
          <img
            className={style.logo}
            src={certificates.logo}
            alt={certificates.title}
          /> {certificates.title}
        </NavLink>
      </h2>
      <p>
        {
          certificates.list.map(school => {
            return school.certs.map(course => (
              <span key={course.name}>{course.name} - {course.effort}.<br /></span>
            ))
          })
        }
        Подробнее на странице <NavLink to={certificates.path}>{certificates.title}</NavLink>.
      </p>

      <h2>
        <NavLink to={expirience.path}>
          <img
            className={style.logo}
            src={expirience.logo}
            alt={expirience.title}
          /> {expirience.title}
        </NavLink>
      </h2>
      <p>
        {expirience.relevant.title}<br />{expirience.timeSince()}
        <br />
        <br />
        {expirience.nonRelevant.title}<br />{expirience.nonRelevant.explanation}
      </p>

      <h2>
        <NavLink to={futureVision.path}>
          <img
            className={style.logo}
            src={futureVision.logo}
            alt={futureVision.title}
          /> {futureVision.title}
        </NavLink>
      </h2>
      <p>
        {
          futureVision.description.map(plan => (
            <span key={plan}>
              {plan}
              <br />
            </span>
          ))
        }
      </p>

      <h2>
        <NavLink to={education.path}>
          <img
            className={style.logo}
            src={education.logo}
            alt={education.title}
          /> {education.title}
        </NavLink>
      </h2>
      <p>{education.description}</p>
    </div>
  );
};
