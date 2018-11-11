import React, { Component } from "react";
import AsyncSelect from "react-select/lib/Async";
import { Api } from "../Api";

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      users: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async getUsers(value) {
    if (!value) {
      return Promise.resolve({ options: [] });
    }

    const response = await Api.get("", `q=${value}`);
    const usersAsValueLabel = response.users.map(obj => {
      let rObj = {};
      rObj["label"] = obj.display_name;
      rObj["value"] = obj.id;
      return rObj;
    });
    console.log(usersAsValueLabel);
    return usersAsValueLabel;
  }

  handleChange(event) {
    console.log(event);
    this.setState({ value: event.label });
  }

  render() {
    return (
      <div>
        <p>value: {this.state.value}</p>
        <AsyncSelect
          loadOptions={e => this.getUsers(e)}
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}
