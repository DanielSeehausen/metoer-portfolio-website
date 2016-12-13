import React, { Component, PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';
import Projects from './Projects.js';

// Project description component - represents a single project description
export default class HomeDisplay extends Component {
  
  //we are wrapping the homeDisplay in the projDescription container div because of their overlap
  //If desired, this class could be scrapped all together and the homepage could be a ProjectDescription itself.
  render() {
    return (
      <div className="projDescription" id="homeDisplay">
        <div id="homeDisplayText">
          <h1>I'm XXXXX, a programmer and designer</h1>
          <h2>Please take a look at some of my work</h2>
          <a href="mailto:google.google@gmail.com">XXXXX.XXXXXX@XXXXXX.com</a>
          <h3>(XXX) XXX-XXXX</h3>
        </div>
      </div>
    );
  }
}
