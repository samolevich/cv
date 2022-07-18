import React from "react";
import style from "./index.module.css";

export default ({ contacts }) => {
  const { title, logo } = contacts;
  // TODO REFACTORing NEED to SEPARATE CONTACT and PROFILE
  // TODO NEED REFACTOR FOR MOBILE VERSION
  return (
    <>
      <div className={style.hiddenformobile}>
        <h2>
          <img className={style.logo} src={logo} alt={title} /> {title}
        </h2>
        <p>
          {Object.entries(contacts)
            .filter(prop => prop[1].title)
            .map(contact => (
              <span key={contact[1].title}>
                <a className={style.contacts} href={contact[1].url}>
                  {contact[1].title}
                </a>
                <br />
              </span>
            ))}
        </p>
        <p>
          {contacts.code.map(contact => (
            <span key={contact.title}>
              <a className={style.contacts} href={contact.url}>
                {contact.title}
              </a>
              <br />
            </span>
          ))}
        </p>
        <p>
          {contacts.cv.map(contact => (
            <span key={contact.title}>
              <a className={style.contacts} href={contact.url}>
                {contact.title}
              </a>
              <br />
            </span>
          ))}
        </p>
      </div>
      <div className={style.showformobile}>
        <hr />
        <a href={contacts.tel.url}>
          <img
            src="/cv/img/logo/call.svg"
            alt={contacts.tel.title}
            className={style.logo}
          />
        </a>
        <br />
        <a href={contacts.email.url}>
          <img
            src="/cv/img/logo/contacts.svg"
            alt={contacts.email.title}
            className={style.logo}
          />
        </a>
        <br />
        <a href={contacts.telegram.url}>
          <img
            src="/cv/img/logo/telegram.svg"
            alt={contacts.telegram.title}
            className={style.logo}
          />
        </a>
        <br />
        <a href={contacts.code[0].url}>
          <img
            src="/cv/img/logo/octocat.svg"
            alt={contacts.code[0].title}
            className={style.logo}
          />
        </a>
        <br />
      </div>
    </>
  );
};
