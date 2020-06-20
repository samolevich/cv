import React from 'react';
import Skills from '../Skills';
import { Route } from 'react-router-dom';
import About from '../About';
import Projects from '../Projects';
import Certif from '../Certif';
import Expirience from '../Expirience';

export default () => {
  const skills = [
    'Javascript',
    'React',
    'Redux (Thunk)',
    'NodeJS',
    'Express',
    'MongoDB',
    'Mongoose',
    'Handlebars',
    'Bootstrap',
    'Materialize',
    'MaterialUI',
    'React-Bootstrap',
    'Linux',
    'Git',
    'HTML',
    'CSS',
  ];
  return (
    <div>
      <Route exact path='/' component={() => <About skills={skills} />} />
      <Route path='/skills' component={() => <Skills skills={skills} />} />
      <Route path='/projects' component={Projects} />
      <Route path='/certificates' component={Certif} />
      <Route path='/expirience' component={Expirience} />
    </div>
  );
};
