import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Box, Flex } from "rebass";
import theme from "../theme";
import SearchInput from "../components/SearchInput";
import Profile from "../containers/Profile";
import { Api } from "../Api";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      user: null,
      minCharacters: 4,
      minCharactersReached: false
    };
  }

  getUsers = async value => {
    if (!value || this.state.minCharactersReached === false) {
      return [];
    }

    const response = await Api.get("", `q=${value}`);
    const usersAsValueLabel = response.users.map(user => {
      let userAsValueLabel = {};
      userAsValueLabel["label"] = user.display_name;
      userAsValueLabel["value"] = user.id;
      return userAsValueLabel;
    });
    return usersAsValueLabel;
  };

  getUser = async userId => {
    const response = await Api.get(`/${userId}`);
    this.setState({ user: response.user });
  };

  handleChange = e => {
    this.getUser(e.value);
  };

  minCharacterCheck = value => {
    if (!!value && value.length >= this.state.minCharacters) {
      this.setState({ minCharactersReached: true });
    }
  };

  render() {
    const { value, user } = this.state;

    return (
      <StyledProvider theme={theme}>
        <MainContainer>
          <Flex mx={-2}>
            <Box width={1} px={[2, 3, 4]}>
              <SearchInput
                onInputChange={this.minCharacterCheck}
                loadOptions={this.getUsers}
                onChange={this.handleChange}
                value={value}
              />
            </Box>
          </Flex>
          <Flex mx={-2} justifyContent={"center"}>
            <Box width={[1, 7 / 8, 6 / 8]} px={[2, 3, 4]}>
              {!!user && <Profile user={user} />}
            </Box>
          </Flex>
          <GlobalStyle />
        </MainContainer>
      </StyledProvider>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; overflow-wrap: break-word; }
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    color: #000;
    font-family: Roboto;
    background: #eaeaea;
  }
  #root {
    margin: 0;
    padding: 0;
    min-height: 100%;
    height: 100%;
    position: relative;
  }
`;

const StyledProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const MainContainer = styled.div`
  min-height: 110%;
  position: relative;
`;
