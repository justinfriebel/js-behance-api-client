import React, { Component } from "react";
import styled from "react-emotion/macro";
import { ThemeProvider } from "emotion-theming";
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
      <ThemeProvider theme={theme}>
        <Container>
          <SearchInput
            onInputChange={this.minCharacterCheck}
            loadOptions={this.getUsers}
            onChange={this.handleChange}
            value={value}
          />
          {!!user && <Profile user={user} />}
        </Container>
      </ThemeProvider>
    );
  }
}

const theme = {
  borderRadius: "50%",
  borderColor: "#BF67AD",
  padding: 20
};

const Container = styled.div({
  margin: 60
});
