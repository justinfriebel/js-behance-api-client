import React, { Component } from "react";
import AsyncSelect from "react-select/lib/Async";
import { Api } from "../Api";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      users: null,
      minCharacters: 4,
      minCharactersReached: false
    };

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

  handleChange(event) {
    this.setState({ value: event.label });
  }

  minCharacterCheck(value) {
    if (!!value && value.length >= this.state.minCharacters) {
      this.setState({ minCharactersReached: true });
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <p>value: {value}</p>
        <AsyncSelect
          onInputChange={this.minCharacterCheck}
          loadOptions={e => this.getUsers(e)}
          onChange={this.handleChange}
          value={value}
          autoFocus
        />
      </div>
    );
  }
}
