import React, { Component, PropTypes } from 'react';
 
// Project link component - represents a single project link
export default class ProjectLink extends Component {
  
  //this controls the display of projects when thumbnails are clicked.
  displayProject() {
    console.log("Current project: " + currentDisplayedProject);
    
    var activeProj = this.props.projectLink.projId;
    var projDiv = document.getElementById(activeProj);

    //if we already have a project displaying, fade it out. 
    if (currentDisplayedProject != null) {
      console.log('fading out: ' + currentDisplayedProject);
      document.getElementById(currentDisplayedProject).style.opacity = 0;
      document.getElementById(currentDisplayedProject).style.zIndex = -1;
      //if we are returning to home screen
      if (currentDisplayedProject == activeProj) {
        console.log('returning to homescreen from: ' + currentDisplayedProject);
        currentDisplayedProject = "homeDisplay";   
        document.getElementById("homeDisplay").style.opacity = 1;
        return;
      }
    }
    console.log('fading in: ' + activeProj);
    projDiv.style.opacity = 1;
    projDiv.style.zIndex = 5;
    projDiv.getElementsByClassName("activeProjImage")[0].style.opacity = .25;
    currentDisplayedProject = activeProj;   
  }

  render() {
    return (
      <li>
        <div className="thumbnailContainer" onClick={() => this.displayProject(this.props.projectLink.idx) }>
          <img className="thumbnail" src={ this.props.projectLink.img } />
          <img className="thumbnailActive" src={ this.props.projectLink.activeImg } />
        </div>
        <p>{ this.props.projectLink.text }</p>    
      </li>
    );
  }
}
 
ProjectLink.propTypes = {
  // This component gets the project link to display through a React prop.
  // We can use propTypes to indicate it is required
  projectLink: PropTypes.object.isRequired,
};