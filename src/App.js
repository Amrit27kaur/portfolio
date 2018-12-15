import React, { Component } from 'react';

import Navigation from './components/navigation.js'

class App extends Component {
  render() {
    return (
        <div>

          <div className="row">
            <div className="col-lg-12">

              <Navigation/>
            </div>

          </div>



        </div>
    );
  }
}

export default App;
