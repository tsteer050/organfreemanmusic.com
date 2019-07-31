import React from 'react';
import MenuBar from './MenuBar';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuBar/>
        <h1>Splash</h1>
      </div>
    );
  }
}

export default Splash;