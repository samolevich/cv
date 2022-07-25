import React from "react";
import style from "./index.module.css";

export default ({ title, logo, interactions, cv, code }) => {
  const contacts = [interactions, code, cv];

  const desktopVersion = contacts.map(each => (
    <p>
      {each.map(contact => (
        <span key={contact.title}>
          <a className={style.contacts} href={contact.url}>
            {contact.title}
          </a>
          <br />
        </span>
      ))}
    </p>
  ));

  const mobileVersion = contacts.map(each =>
    each
      .filter(contact => contact.iconForMobileVersion)
      .map(contact => (
        <>
          <a href={contact.url}>
            <img
              src={contact.iconForMobileVersion}
              alt={contact.title}
              className={style.logo}
            />
          </a>
          <br />
        </>
      )),
  );

  return (
    <>
      <div className={style.hiddenformobile}>
        <h2>
          <img className={style.logo} src={logo} alt={title} />
          {title}
        </h2>
        <p>{desktopVersion}</p>
      </div>

      <div className={style.showformobile}>
        <hr />
        {mobileVersion}
      </div>
    </>
  );
};
