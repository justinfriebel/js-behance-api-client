import React, { Component } from "react";
import AsyncSelect from "react-select/lib/Async";
import styled from "react-emotion/macro";

export default class SearchInput extends Component {
  render() {
    const { onInputChange, loadOptions, onChange, value } = this.props;
    return (
      <Container>
        <StyledAsyncSelect
          onInputChange={onInputChange}
          loadOptions={loadOptions}
          onChange={onChange}
          value={value}
          autoFocus
        />
      </Container>
    );
  }
}

const Container = styled("div")`
  display: flex;
  margin-bottom: 100px;
`;

const StyledAsyncSelect = styled(AsyncSelect)`
  width: 500px;
  margin: auto;
`;
