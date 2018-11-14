import React, { Component } from "react";
import AsyncSelect from "react-select/lib/Async";
import styled from "styled-components";
import behanceLogo from "../PbyBehance-vertical-85px.png";
import { Box, Flex } from "rebass";

export default class SearchInput extends Component {
  render() {
    const { onInputChange, loadOptions, onChange, value } = this.props;
    return (
      <Flex mx={-2}>
        <Box width={1} px={2} py={4}>
          <BehanceLogo src={behanceLogo} alt="Behance logo" />
          <StyledAsyncSelect
            onInputChange={onInputChange}
            loadOptions={loadOptions}
            onChange={onChange}
            placeholder="Search"
            value={value}
            autoFocus
            styles={customStyles}
          />
        </Box>
      </Flex>
    );
  }
}

const BehanceLogo = styled("img")`
  display: block;
  margin: 0px auto;
  margin-bottom: 8px;
`;

const StyledAsyncSelect = styled(AsyncSelect)`
  min-width: 359px;
  max-width: 500px;
  margin: 0px auto;
`;

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    borderColor: "#353535"
    // You can also use state.isFocused to conditionally style based on the focus state
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    display: "none"
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none"
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted #353535",
    color: state.isSelected ? "#0057ff" : "#353535",
    padding: 20
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  }
};
