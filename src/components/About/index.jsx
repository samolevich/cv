import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";

export default ({ info }) => {
  const {
    about,
    skills,
    projects,
    certificates,
    expirience,
    futureVision,
    education,
  } = info;

  const dataRepresentation = [
    {
      title: about.title,
      path: about.path,
      logo: about.logo,
      explanation: () => `${about.explanation} ${about.years()}`,
    },
    {
      title: skills.title,
      path: skills.path,
      logo: skills.logo,
      explanation: () => skills.list.join(", "),
    },
    {
      title: projects.title,
      path: projects.path,
      logo: projects.logo,
      explanation: () => (
        <>
          {projects.explanation}
          <br />
          <NavLink to={projects.path}>{projects.title.toUpperCase()}</NavLink>.
        </>
      ),
    },
    {
      title: certificates.title,
      path: certificates.path,
      logo: certificates.logo,
      explanation: () => (
        <>
          {certificates.list.map(school => {
            return school.certs.map(course => (
              <span key={course.name}>
                {course.name} - {course.effort}.<br />
              </span>
            ));
          })}
          <NavLink to={certificates.path}>
            {certificates.title.toUpperCase()}
          </NavLink>
          .
        </>
      ),
    },
    {
      title: expirience.title,
      path: expirience.path,
      logo: expirience.logo,
      explanation: () => (
        <>
          {expirience.relevant.title}
          <br />
          {expirience.timeSince()}
          <br />
          <br />
          {expirience.nonRelevant.title}
          <br />
          {expirience.nonRelevant.explanation}
        </>
      ),
    },
    {
      title: futureVision.title,
      path: futureVision.path,
      logo: futureVision.logo,
      explanation: () => (
        <>
          {futureVision.description.map(plan => (
            <span key={plan}>
              {plan}
              <br />
            </span>
          ))}
        </>
      ),
    },
    {
      title: education.title,
      path: education.path,
      logo: education.logo,
      explanation: () => education.description,
    },
  ];

  const description = dataRepresentation.map(article => (
    <>
      <h2>
        <NavLink to={article.path}>
          <img className={style.logo} src={article.logo} alt={article.title} />
          {article.title}
        </NavLink>
      </h2>
      <p>{article.explanation()}</p>
    </>
  ));

  return (
    <div>
      <h1>{info.title}</h1>

      {description}
    </div>
  );
};
