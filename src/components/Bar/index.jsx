import React from 'react';
import Photo from '../Photo';
import Contacts from '../Contacts';
import Navbar from '../Navbar';
import Location from '../Location';

export default props => {
  const { bar, bar: { location, contact, profile }} = props;
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
