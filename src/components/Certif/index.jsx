import React, { useState } from 'react';
import style from './index.module.css';

export default ({ certificates: { title, logo, list } }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2>
        <img
          className={style.logo}
          src={logo}
          alt={title}
        /> {title}
      </h2>
      {
        list.map(school => (
          <p key={school.description}>
            {school.description}
            <br />
            {
              school.certs.map(course => (
                <span key={course.name}>
                  <a href={course.url} target='_blank' rel='noopener noreferrer'>
                    {course.name}
                  </a> - {course.effort}
                  <br />
                </span>
                )
              )
            }
          </p>
        ))
      }

      <button className={style.button} onClick={() => setShow(!show)}>
        {show ? 'Развидеть' : 'Посмотреть'} сертификаты
      </button>

      {show && (

        <p>
          {
            list.map(school => {
              return school.certs.map(image => (
                <img src={image.pathLocal} alt={image.name} className={style.certificate} />
              ))
            })
          }
        </p>
      )}
    </div>
  );
};
