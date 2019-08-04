import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MenuBar from './MenuBar';
import Music from './Music';
import Tour from './Tour';
import Band from './Band';
import Subscribe from './Subscribe';
import Contact from './Contact';
import Splash from './Splash';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuBar/>
        <Switch>
          <Route exact path="/music" component={Music} />
          <Route exact path="/tour" component={Tour} />
          <Route exact path="/band" component={Band} />
          <Route exact path="/subscribe" component={Subscribe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Splash}/>
        </Switch>

      </div>
    );
  }
}

export default Main;