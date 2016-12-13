import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.jsx';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
  
  //this allows the nice scrollbar functionality that we have on the left hand side of the page
  $(window).scroll(function(){
    $('#projectList').css({
        'left': $(this).scrollLeft()
    });
  });

});



