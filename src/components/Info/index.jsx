import React from 'react'
import Education from '../Education';
import Skills from '../Skills';
import { Route } from 'react-router-dom';
import About from '../About';

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
    'CSS'
  ];
  return (
    <div>
      <Route exact path='/' component={() => <About skills={skills} />} />
      <Route path='/education' component={Education} />
      <Route path='/skills' component={() => <Skills skills={skills} />} />
    </div>
  )
}
