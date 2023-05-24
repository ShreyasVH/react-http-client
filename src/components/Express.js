import Server from './Server';
import { Component } from "react";

export default class Express extends Component {
  constructor(props) {
    super(props);

    this.endpoint = 'https://cors.express.com';
  }

  render () {
    return (
      <>
        <Server endpoint={this.endpoint} />
      </>
    );
  }
}
