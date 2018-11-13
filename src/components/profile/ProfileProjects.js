import React, { Component } from "react";
// import styled from "styled-components";
import { Box, Flex, Card } from "rebass";
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
        <Flex mx={-2}>
          <Box width={1} px={2}>
            <h3>Projects</h3>
          </Box>
        </Flex>
        <Flex flexWrap="wrap" mx={-2}>
          {!!projects &&
            projects.map(project => (
              <Box key={project.id} width={[1, 1 / 2, 1 / 3]} px={2}>
                <Card>
                  <img src={project.covers["202"]} alt={project.name} />
                  <h4>{project.name}</h4>
                  <p>{project.fields}</p>
                </Card>
              </Box>
            ))}
        </Flex>
      </div>
    );
  }
}

export default ProfileProjects;
