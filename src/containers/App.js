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

    this.getUsers = this.getUsers.bind(this);
    this.getUser = this.getUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.minCharacterCheck = this.minCharacterCheck.bind(this);
  }

  async getUsers(value) {
    if (!value || this.state.minCharactersReached === false) {
      return [];
    }

    const response = await Api.get("", `q=${value}`);
    const usersAsValueLabel = response.users.map(obj => {
      let rObj = {};
      rObj["label"] = obj.display_name;
      rObj["value"] = obj.id;
      return rObj;
    });
    return usersAsValueLabel;
  }

  async getUser(userId) {
    const response = await Api.get(`/${userId}`);
    this.setState({ user: response.user });
  }

  handleChange(e) {
    this.getUser(e.value);
  }

  minCharacterCheck(value) {
    if (!!value && value.length >= this.state.minCharacters) {
      this.setState({ minCharactersReached: true });
    }
  }

  render() {
    const { value, user } = this.state;
    return (
      <StyledProvider theme={theme}>
        <MainContainer>
          <div>
            <SearchInput
              onInputChange={this.minCharacterCheck}
              loadOptions={this.getUsers}
              onChange={this.handleChange}
              value={value}
            />
          </div>
          <Body>
            <Flex flexWrap="wrap">
              <Box width={1} px={2}>
                {!!user && <Profile user={user} />}
              </Box>
            </Flex>
          </Body>
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
    color: #034667;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #root {
    margin: 0;
    padding: 0;
    min-height: 100%;
    height: 100%;
    position: relative;
  }
`;

const StyledProvider = ({ className, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const MainContainer = styled.div`
  min-height: 110%;
  position: relative;
  background: #c9dfea;
`;

const Body = styled.div`
  padding: 10px;
  padding-bottom: 48px;
  position: relative;
`;

// const Footer = styled.div`
//   position: fixed;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   padding: 1rem;
//   background: #035379;
//   color: white;
//   z-index: 999;
// `;
