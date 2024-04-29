import React    from "react";
import template from "./Publication.jsx";

class Publication extends React.Component {
  constructor(props) {
    super(props);

    const publication = props.value;

    this.copyRef = React.createRef();

    this.state = {
      title: publication.title,
      authors: publication.authors,
      conference: publication.conference,
      year: publication.year,
      bibtex: publication.bibtex,
      pdf: publication.pdf,
      github: publication.github,
    }
  }

  copy = () => {
    navigator.clipboard.writeText(this.state.bibtex);
    this.setState({copy: true})
    window.setTimeout(() => {
      this.setState({copy: false})
    }, 1000);
  }

  render = () => {
    return template(
      this.state.title,
      this.state.authors,
      this.state.conference,
      this.state.year,
      this.state.bibtex,
      this.state.pdf,
      this.state.github,
      this.copy,
      this.state.copy,
      this.copyRef,
    );
  }
}

export default Publication;
