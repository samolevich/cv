import React from 'react';
import style from './index.module.css';

export default props => {
  const { contacts, contacts: { title, logo } } = props;
  // TODO REFACTOR NEED to SEPARATE CONTACT AND PROFILE
  return (
    <>
      <div className={style.hiddenformobile}>
        <h2>
          <img className={style.logo} src={logo} alt={title} /> {title}
        </h2>
        <p>
          {
          Object.entries(contacts)
            .filter(prop => prop[1].title)
            .map(contact => (
              <>
                <a
                  className={style.contacts}
                  href={contact[1].url}
                  key={contact[1].title}>
                    {contact[1].title}
                </a>
                <br />
              </>
            ))
            }
        </p>

        <p>
          {
            contacts.code
              .map(contact => (
                <>
                  <a
                    className={style.contacts}
                    href={contact.url}
                    key={contact.title}>
                      {contact.title}
                  </a>
                  <br />
                </>
              ))
            }
        </p>
        <p>
          {
            contacts.cv
              .map(contact => (
                <>
                  <a
                    className={style.contacts}
                    href={contact.url}
                    key={contact.title}>
                      {contact.title}
                  </a>
                  <br />
                </>
              ))
            }
        </p>
      </div>
    </>
  );
};
