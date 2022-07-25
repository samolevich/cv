import React from "react";
import Photo from "../Photo";
import Contacts from "../Contacts";
import Navbar from "../Navbar";
import Location from "../Location";

export default ({ bar }) => {
  const { location, contact, profile } = bar;
  return (
    <>
      <Photo />
      <Navbar nav={bar} />
      <Location {...location} />
      <Contacts {...contact} {...profile} />
    </>
  );
};
