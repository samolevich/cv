import React from 'react';
import Skills from '../Skills';
import { Route } from 'react-router-dom';
import About from '../About';
import Projects from '../Projects';
import Certif from '../Certif';
import Expirience from '../Expirience';

export default ({ info }) => {
  const { skills, skills: { list }, projects, expirience, certificates } = info;
  return (
    <div>
      <Route exact path='/' component={() => <About info={info} />} />
      <Route path='/skills' component={() => <Skills skills={skills} />} />
      <Route path='/projects' component={() => <Projects projects={projects} />} />
      <Route path='/certificates' component={() => <Certif certificates={certificates} />} />
      <Route path='/expirience' component={() => <Expirience exp={expirience} />} />
    </div>
  );
};
