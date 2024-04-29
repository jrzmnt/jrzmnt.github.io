import React from "react";
import template from "./Award.jsx";

class Award extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      year: props.year,
      extra: props.extra,
      misc: props.misc
    }
  }

  render() {
    return template(
      this.state.title,
      this.state.year,
      this.state.extra,
      this.state.misc
    );
  }
}

export default Award;
