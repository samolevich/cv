import React from 'react';
import Photo from '../Photo';
import Contacts from '../Contacts';
import Navbar from '../Navbar';
import Location from '../Location';

export default props => {
  return (
    <>
      {props.title}
      <Photo />
      <Navbar nav={props.bar}/>
      <Location location={props.bar.location} />
      <Contacts contacts={props.bar.contact} />
    </>
  );
};
