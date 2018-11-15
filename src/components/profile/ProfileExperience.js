import React, { Component } from "react";
import { Api } from "../../Api";

class ProfileExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: null
    };
  }

  async componentDidMount() {
    const response = await Api.get(`/${this.props.user.id}/work_experience`);
    this.setState({ experience: response.work_experience });
  }

  async componentDidUpdate(prevProps) {
    const response = await Api.get(`/${this.props.user.id}/work_experience`);
    if (this.props.user.id !== prevProps.user.id) {
      this.setState({ experience: response.work_experience });
    }
  }

  render() {
    const { experience } = this.state;

    return (
      <div>
        <h3>Experience</h3>
        {!!experience &&
          experience.map(key => (
            <p key={key.position + key.organization}>
              {`${key.position} at ${key.organization}`}
            </p>
          ))}
      </div>
    );
  }
}

export default ProfileExperience;
