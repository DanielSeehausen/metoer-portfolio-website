import React, { Component, PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';
 
// Project description component - represents a single project description
export default class ProjectDescription extends Component {
  
  renderIconList() {
    icons = this.props.projectDescription.icons;
    return icons.map((icon) => (
      <icon key={icon._id} className="languageIcon">
        <li >
          <img data-tip data-for={ icon._id } src={ icon.img }/>
          <ReactTooltip id={ icon._id.toString() } place="top" type="dark" effect="float">
            <span>{ icon.tooltip }</span>
          </ReactTooltip>
        </li>
      </icon>

    ));
  }

  renderLinks() {
    links = this.props.projectDescription.links;
    if (links.length < 1) { return };
    return links.map((link) => (
      <li key={ link._id } className="pDLink">
        <a href={ link.file }>
          <img data-tip data-for={ link._id } src={ link.img }/>
          <ReactTooltip id={ link._id.toString() } place="top" type="dark" effect="float">
            <span>{ link.linktooltip }</span>
          </ReactTooltip>
        </a>
      </li>
    ));
  }

  //this checks what kind of text information we want to portray (i.e. list, block of text, etc.) and returns the right container for the info that we designated in Project.js
  getProjDescription() {
    infoType = this.props.projectDescription.infoType;
    projInfo = this.props.projectDescription.projInfo;
    if (infoType == 'list') {
      //if its a list, then we are return a <ul> with the list elements mapped to it
      console.log(projInfo);
      return (<ul> 
              { projInfo.map((item, i) => (
                <li key={ i }>
                  item
                </li>))} 
              </ul>)
    } else if (infoType == 'block') {
      return (<pre>{ projInfo }</pre>)
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="projDescription" id={ this.props.projectDescription.projId }>
        
        <img className="activeProjImage" src={ this.props.projectDescription.backgroundImg } />

        <div className="projTitleContainer">
          <h>{ this.props.projectDescription.title }</h>

          <div className="languageIcons">
            <ul className="languageIconsList">
              {this.renderIconList()}
            </ul>
          </div>
        </div>
        

        <div className="projInfoContainer">
          <div className="projInfo">
            { this.getProjDescription() }
          </div>
        </div>
  
        <div className="pDLinksContainer">
          <div className="pDLinks">
            <span>{ this.props.projectDescription.linksText }</span>
            <ul>
              { this.renderLinks() }
            </ul>
          </div>
        </div>
        
      </div>
      
    );
  }
}