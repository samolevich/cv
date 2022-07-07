import React from 'react';
import Photo from '../Photo';
import Contacts from '../Contacts';
import Navbar from '../Navbar';
import Location from '../Location';

export default ({ bar }) => {
  const { location, contact, profile } = bar;
  const communications = { ...contact, ...profile};
  return (
    <>
      <Photo />
      <Navbar nav={bar}/>
      <Location location={location} />
      <Contacts contacts={communications} />
    </>
  );
};
