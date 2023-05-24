import Server from './Server';
import { Component } from "react";

export default class DotnetCore extends Component {
  constructor(props) {
    super(props);

    this.endpoint = 'https://cors.dotnet.com';
  }

  render () {
    return (
      <>
        <Server endpoint={this.endpoint} />
      </>
    );
  }
}
