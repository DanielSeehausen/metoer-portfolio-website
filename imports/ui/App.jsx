import React, { Component } from 'react';
 

import HomeDisplay from './HomeDisplay.jsx';
import ProjectLink from './ProjectLink.jsx';
import ProjectDescription from './ProjectDescription.jsx';
import Projects from './Projects.js';
import ReactTooltip from 'react-tooltip'

 
/* App component - represents the whole app
 * 
 * Structurally, the website consists of two important classes: 
 *     1.) 'ProjectDescription'
 *             - instances of project descriptions hold all of the information 
 *               needed to display a project on the main canvas area and are
 *               rendered via their class 'render' method when called by App.
 *               Due to the scope of this framework, it did not make sense to
 *               use mongo or any other external database for each Projects
 *               information. The 'Projects.js' file holds the information in a 
 *               dictionary and is easily managed directly. The 'HomeDisplay'
 *               class, which should display by default on load, is not an
 *               instance of 'ProjectDescription' because I could not think of a
 *               default display format that I wanted displaying within the 
 *               visual confines of a ProjectDescription. Regardless, serves 
 *               the same placeholder as a ProjectDescription, and its 
 *               differences are largely cosmetic.
 * 
 *     2.) 'ProjectLink'
 *             - instances of project links hold the information required for the
 *               navbar located on the left of the website. The information for 
 *               them is also housed in a dictionary in Projects.js, and they
 *               are rendered by their own class method.  
 * 
 * 
 * While not initially visible like all the projectlinks are, the projectdescriptions are 
 * rendered transparent. 'Calling' them is only changing their opacity.
 *
 */ 

export default class App extends Component {
  
  constructor() {
    super()
    currentDisplayedProject = null;
  }

  renderHomeDisplay () {
    homeDisplay = (< HomeDisplay key={0} />);
    currentDisplayedProject = "homeDisplay";
    return homeDisplay;
  }

  renderProjectLinks() {
    return Projects.getProjectLinks().map((link) => (
      <ProjectLink key={link._id} projectLink={link} img={link.img} />
    ));
  }

  renderProjectDescriptions() {
    return Projects.getProjectDescriptions().map((descr) => (
      <ProjectDescription key={descr._id} projectDescription={descr} img={descr.img} />
    ));    
  }    

  getbottomNavBar() {
    return [
      { _id: 1, img: "images/GitHub_Logo.png", link: "https://github.com/DanielSeehausen" },
      { _id: 2, img: "images/HackerRank_logo.png", link: "https://www.hackerrank.com/Dseehausen" },
      { _id: 3, img: "images/LinkedIn_logo_initials.png", link: "https://www.linkedin.com/in/danielseehausen" },
    ];
  }

  renderbottomNavBar() {
    return this.getbottomNavBar().map((item) => (
      <item key={item._id}>
        <li className="bottomNavBarIcon">
          <a href={ item.link }>
            <img src={ item.img }/>
          </a>
        </li>
      </item>
    ));
  }
  
  render() {
    return (
      <div className="projectShowCase">
        { this.renderHomeDisplay() }
        { this.renderProjectDescriptions() }
        
        <div id="navBar">
          <div id="navBarTop">
            <h1>Sample Projects</h1>
            <img src="images/menu_header.png"/>
          </div>

          <div id="projectListBorder"></div>
          
          <ul id="projectList">
            {this.renderProjectLinks()}
          </ul>
        </div>

        <div id="bottomNavBar">
          <ul>
            {this.renderbottomNavBar()}
          </ul>
        </div>

      </div>
    );
  }
}

