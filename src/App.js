import Play from './components/Play';
import Springboot from './components/Springboot';
import { Component } from 'react';

export default class App extends Component {
    render () {
        return (
            <div className="App">
                <Play />
                <Springboot />
            </div>
        );
    }
}
