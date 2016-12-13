import React, { Component, PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';
import Projects from './Projects.js';

// Project description component - represents a single project description
export default class HomeDisplay extends Component {
  
  //we are wrapping the homeDisplay in the projDescription container div because it occupies the same space
  render() {
    return (
      <div className="projDescription" id="homeDisplay">
        <div id="homeDisplayText">
          <h1>I'm Daniel, a programmer and designer</h1>
          <h2>Please take a look at some of my work</h2>
          <a href="mailto:daniel.seehausen@gmail.com">Daniel.Seehausen@gmail.com</a>
          <h3>(484) 883-7551</h3>
        </div>
      </div>
    );
  }
}