import Server from './Server';
import { Component } from "react";

export default class Springboot extends Component {
    constructor(props) {
        super(props);

        this.endpoint = 'https://cors.springboot.com';
    }

    render () {
        return (
          <>
              <Server endpoint={this.endpoint} />
          </>
        );
    }
}
