import React from "react";
import template from "./Experience.jsx";

class Experience extends React.Component {
  constructor(props) {
    super(props);

    const { title, year, extra, name, supervisor } = props;
    this.state = {
      title,
      year,
      extra,
      name,
      supervisor,
    }
  }

  render() {
    const { title, year, extra, name, supervisor } = this.state;
    return template(
      title,
      year,
      extra,
      name,
      supervisor,
    );
  }
}

export default Experience;
