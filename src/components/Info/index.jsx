import React from 'react'
import Education from '../Education';
import Skills from '../Skills';
import { Route } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Route path='/education' component={Education} />
      <Route path='/skills' component={Skills} />
      {/* <Education />
      <Skills /> */}
    </div>
  )
}
