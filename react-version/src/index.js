import React from 'react';
import ReactDom from 'react-dom';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';

// CSS
import './index.css';

// Jumbotron container
function Jumbotron() {
  return (
    <>
      <Heading />
      <SubHeading />
    </>
  );
}
ReactDom.render(<Jumbotron />, document.querySelector('.jumbotron'));

// We can of coure make it more component based than demonstrated here
// ~ Darshan K S
