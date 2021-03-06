# metoer-portfolio-website
This repository serves as the skeleton for anyone interested in making a Meteor application to showcase a portfolio or other similar UI experience. Meteor is required. 

The repository itself is not a complete Meteor project. Within, you will find files that fit within the standard Meteor initial build scheme ('meteor create' in a new repository). These files do not address any back-end code. 

The structure of the code and the application is as follows:
  
  client/main.css  -- style sheet
  
  client/main.html -- Very short, just holds a reference for Meteor
  
  client/main.jsx  -- this gets everything going and calls the initial render function for the application. From here, imports/ui/App.jsx takes everything over. The site only has one explicitly defined jquery function which is also defined here.
  
  imports/ui/App.jsx -- This is the workhorse of the application and is bundled as a js class for use by Meteor. If you are new to Meteor/React, you should start in the render() function and work your way through it. All other UI classes are imported into App.jsx. The map() function is used throughout to render multiple instances of classes by calling the respective class render function (located in the class file).   
  
  imports/ui/HomeDisplay.jsx -- Short and sweet. Easy to customize.
  
  imports/ui/Projects.jsx -- This is a crude replacement for a database. Understanding the scope of the project, I could not justify working mongo.db into it. Here we house information on various projects and icons, including language icons, the project links, and the project descriptions. Ideally, once the structure is in place and your css is how you would like it, this should be the only file that requires attention when updating the website. 
  
  imports/ui/ProjectDescription.jsx -- Project descriptions consume the largest part of the canvas (visually), and can be arranged in any manner you see fit. There are three important divs that are created within each project description (links, description, and icons). Each receives data from its respective 'project' within the Projects.js file.
  
  imports/ui/ProjectLink.jsx -- These links can most easily be displayed in a scrolling navbar.
  
  All assets/images should exist in the main meteor application's 'public' directory! (the public directory is not included here, but exists in all fresh creations of a Meteor project.)
  
Important note:

  All image assets from the original chouxbe.us are not included in this project with the exception of several programming language icons. These icons were all originally made by Ben Hawker: https://github.com/hwkr/BitIcon/. 
  

