import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Jumbotron container
function Jumbotron(){
  return (
    <>
      <Heading/>
      <SubHeading/>
    </>
  );
}
// Heading component
function Heading(){
  return(
    <h1>Hello World</h1>
  );
}
// Subheading component
function SubHeading(){
  return(
    <p class="lead">Created with React, CSS & Love by <a href="http://ionicabizau.net/">Ionică Bizău</a>.
    </p>
  );
}

ReactDom.render(<Jumbotron/>, document.querySelector('.jumbotron'));

// We can of coure make it more component based than demonstrated here
// ~ Darshan K S
