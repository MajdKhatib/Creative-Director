import React, { Component } from "react";
import axios from "axios";

import {
  WorkSection,
  WorkTitle,
  WorkPart,
  Icon,
  ParkTitle,
  Line,
  Span,
} from "./style.js";

class Work extends Component {
  state = {
    works: [],
  };

  componentDidMount() {
    axios.get("js/data.json").then((respon) => {
      this.setState({ works: respon.data.works });
    });
  }

  render() {
    const { works } = this.state;

    const worksList = works.map((workItem) => {
      return (
        <WorkPart first={workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <ParkTitle>{workItem.title}</ParkTitle>
          <Line></Line>
          <p className="part-desc">{workItem.body}</p>
        </WorkPart>
      );
    });

    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <Span>My</Span> Work
          </WorkTitle>
          {worksList}
        </div>
      </WorkSection>
    );
  }
}

export default Work;
