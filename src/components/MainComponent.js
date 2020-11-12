import React, { Component } from "react";
import Pannel from './PannelComponent';


class Main extends Component {

  render() {
    return (
      <div>
        <Pannel />
        <Pannel />
        <Pannel />
      </div>
    );
  }
}

export default Main;