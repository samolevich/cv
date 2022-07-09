import React from 'react';
import Skills from '../Skills';
import { Route } from 'react-router-dom';
import About from '../About';
import Projects from '../Projects';
import Certif from '../Certif';
import Expirience from '../Expirience';

export default ({ info }) => {
  const { skills, projects, expirience, certificates } = info;
  return (
    <div>
      <Route exact path={info.about.path} component={() => <About info={info} />} />
      <Route path={skills.path} component={() => <Skills skills={skills} />} />
      <Route path={projects.path} component={() => <Projects projects={projects} />} />
      <Route path={certificates.path} component={() => <Certif certificates={certificates} />} />
      <Route path={expirience.path} component={() => <Expirience exp={expirience} />} />
    </div>
  );
};
