import Play from './components/Play';
import Springboot from './components/Springboot';
import Phalcon from './components/Phalcon';
import Express from './components/Express';
import DotnetCore from './components/DotnetCore';
import { Component } from 'react';

export default class App extends Component {
    render () {
        return (
            <div className="App">
              <Play />
              <br />
              <hr />
              <br />
              <Springboot />
              <br />
              <hr />
              <br />
              <Phalcon />
              <br />
              <hr />
              <br />
              <Express />
              <br />
              <hr />
              <br />
              <DotnetCore />
            </div>
        );
    }
}
