import React, { Component } from "react";
import { Api } from "../../Api";

class ProfileProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: null
    };
  }

  async componentDidMount() {
    const response = await Api.get(`/${this.props.user.id}/projects`);
    this.setState({ projects: response.projects });
  }

  render() {
    const { projects } = this.state;
    return (
      <div>
        <h3>Projects</h3>
        {!!projects && projects.map(key => <h4 key={key.id}>{key.name}</h4>)}
      </div>
    );
  }
}

export default ProfileProjects;
