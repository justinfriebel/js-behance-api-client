import React, { Component } from "react";
import styled from "styled-components";
import { Box, Flex, Card, Image } from "rebass";
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
        <Flex mx={-4}>
          <Box width={1} pr={4}>
            <StyledH3>Projects</StyledH3>
          </Box>
        </Flex>
        <Flex flexWrap="wrap" mx={-4}>
          {!!projects &&
            projects.map(project => (
              <Box
                key={project.id}
                width={[1, 1 / 2, 1 / 3, 1 / 4]}
                pr={4}
                pb={4}
              >
                <Card>
                  <Image
                    width={1}
                    src={project.covers["202"]}
                    alt={project.name}
                  />
                  <StyledH4>{project.name}</StyledH4>
                  <StyledP>{project.fields}</StyledP>
                </Card>
              </Box>
            ))}
        </Flex>
      </div>
    );
  }
}

const StyledH3 = styled("h3")`
  margin-top: 0px;
`;

const StyledH4 = styled("h4")`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const StyledP = styled("p")`
  margin-top: 8px;
`;

export default ProfileProjects;
