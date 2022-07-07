import React from 'react';
import style from './index.module.css';

export default ({ projects: { title, logo, list } }) => {

  const counter = (step = 1) => {
    let collector = 0;
    return () => collector+= step;
  }
  const inc = counter();

  return (
    <div>
      <h2>
        <img className={style.logo} src={logo} alt={title} /> {title}
      </h2>
      {
        list.map(project => (
          <div className={style.project} key={`${project.title}${inc()}`}>
            <h2>
              <a href={project.title}
                  target='_blank'
                  rel='noopener noreferrer'
              >
                {project.title}
              </a>
            </h2>
            <p>{project.description}</p>
            {
              project.links.map(link => (
                <span key={link.url}>
                  <a href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                  <br />
                </span>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};
