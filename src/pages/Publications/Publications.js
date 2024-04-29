import React from "react";
import template from "./Publications.jsx";

import getPublications from '../../services/PublicationsService';

class Publications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      publications: [],
      error: false,
    };
    this.filter = React.createRef();
  }

  componentDidMount = () => {
    getPublications()
      .then((response) => {
        this.setState({ publications: response, original: response })
      })
      .catch(() => {
        this.setState({ error: true })
      });
  }

  filterPublications = () => {
    const text = this.filter.current.value
    if(!text) {
      this.setState({ publications: this.state.original });
    } else {
      const publications = this.state.original.filter(
        (publication) => publication.title.toLowerCase().includes(text)
      );
      this.setState({ publications });
    };
  }

  render = () => {
    return template(
      this.state.publications, 
      'Year',
      this.filterPublications,
      this.filter
    );
  }
}

export default Publications;
