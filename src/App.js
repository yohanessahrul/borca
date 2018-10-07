import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Top from './pages/Top';
import Bottom from './pages/Bottom';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Bonta.com sample website</h1> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/top" component={Top}/>
            <Route path="/bottom" component={Bottom}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
