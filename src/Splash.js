import React from 'react';
import MenuBar from './MenuBar';
import Music from './Music';
import Tour from './Tour';

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
      </div>
    );
  }
}

export default Splash;