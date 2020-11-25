import React, { Component } from "react";
import { Media } from "reactstrap";
import PEOPLE from "./shared/data";

class Pannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          Name: "Balamanikanta Chekuri",
          Age: 20,
          Gender: "male",
          MObile: 7406333896
        }
      ]
    };
  }
  render() {
    const list = this.state.people.map(per => {
      return (
        <div key={per.Name} className="col-12 mt-5">
          <Media tag="li">
            <Media body className="ml-5">
              <Media heading>{per.Name}</Media>
              <p>{per.Age}</p>
              <p> {per.Gender} </p>
              <p> {per.MoblieNuber} </p>
            </Media>
          </Media>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Media list>{list}</Media>
        </div>
      </div>
    );
  }
}

export default Pannel;
