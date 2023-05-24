import Server from './Server';
import { Component } from "react";

export default class Phalcon extends Component {
  constructor(props) {
    super(props);

    this.endpoint = 'https://cors.phalcon.com';
  }

  render () {
    return (
      <>
        <Server endpoint={this.endpoint} />
      </>
    );
  }
}
