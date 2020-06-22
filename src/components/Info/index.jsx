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
    x
      <Route exact path='/cv/' component={() => <About skills={skills} />} />
      <Route path='/cv/skills' component={() => <Skills skills={skills} />} />
      <Route path='/cv/projects' component={Projects} />
      <Route path='/cv/certificates' component={Certif} />
      <Route path='/cv/expirience' component={Expirience} />
    </div>
  );
};
