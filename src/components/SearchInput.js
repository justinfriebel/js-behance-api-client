import React from "react";
import AsyncSelect from "react-select/lib/Async";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { Box, Flex, Image } from "rebass";

const SearchInput = ({ onInputChange, loadOptions, onChange, value }) => {
  return (
    <Flex mx={-2}>
      <Box width={1} px={2} py={5}>
        <BehanceLogo src={logo} alt="BeSearch logo" />
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
};

const BehanceLogo = styled(Image)`
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
  control: provided => ({
    ...provided,
    boxShadow: "none",
    borderColor: "#353535"
  }),
  dropdownIndicator: provided => ({
    ...provided,
    display: "none"
  }),
  indicatorSeparator: provided => ({
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

export default SearchInput;
