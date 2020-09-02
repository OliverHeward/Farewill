import React from "react";
import styled from "styled-components";
import { COLOR, SPACING, CONTENT_WIDTH } from "../constants";

import Logo from "../logo.svg";

const StyledHeader = styled.header`
  background-color: ${COLOR.ACCENT.PRIMARY};
  padding: ${SPACING.XS} ${SPACING.M};
`;

const StyledHeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
`;

const StyledHeaderContent = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Header = () => (
  <StyledHeader>
    <StyledHeaderWrapper>
      <StyledHeaderContent>
        <img src={Logo} alt="Farewill" />
        <p>Simpsons Quotes</p>
      </StyledHeaderContent>
    </StyledHeaderWrapper>
  </StyledHeader>
);

export default Header;
