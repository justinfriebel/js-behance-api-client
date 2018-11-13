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
        <Box width={1 / 2} px={2}>
          <BehanceLogo src={behanceLogo} alt="Behance logo" />
          <StyledAsyncSelect
            onInputChange={onInputChange}
            loadOptions={loadOptions}
            onChange={onChange}
            value={value}
            autoFocus
          />
        </Box>
      </Flex>
    );
  }
}

const BehanceLogo = styled("img")`
  // display: block;
  // margin: 0 auto;
`;

const StyledAsyncSelect = styled(AsyncSelect)`
  width: 375px;
  // display: block;
  // margin: 0 auto;
`;
