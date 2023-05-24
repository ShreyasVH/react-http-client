import Server from './Server';
import { Component } from "react";

export default class Play extends Component {
    constructor(props) {
        super(props);

        this.endpoint = 'https://cors.playframework.com';
    }

    render () {
        return (
          <>
              <Server endpoint={this.endpoint} />
          </>
        );
    }
}
