import React from 'react';
import MenuBar from './MenuBar';
import Music from './Music';
import Tour from './Tour';
import Band from './Band';
import Subscribe from './Subscribe';
import Contact from './Contact';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuBar/>
        <h1>Splash</h1>
        <Music/>
        <Tour/>
        <Band/>
        <Subscribe/>
        <Contact/>
      </div>
    );
  }
}

export default Splash;