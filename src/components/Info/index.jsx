import React from 'react';
import Skills from '../Skills';
import { Route } from 'react-router-dom';
import About from '../About';
import Projects from '../Projects';
import Certif from '../Certif';
import Expirience from '../Expirience';

export default props => {
  const { info: { skills: { list }, projects, expirience, certificates }} = props;
  return (
    <div>
      <Route exact path='/' component={() => <About skills={list} />} />
      <Route path='/skills' component={() => <Skills skills={list} />} />
      <Route path='/projects' component={() => <Projects projects={projects} />} />
      <Route path='/certificates' component={() => <Certif certificates={certificates} />} />
      <Route path='/expirience' component={() => <Expirience exp={expirience} />} />
    </div>
  );
};
