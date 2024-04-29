import React, { Component } from "react";

export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.location = this.state.loc;
  }
  render(){
    return (<section>Redirecting...</section>);
  }
}

export default Redirect;
