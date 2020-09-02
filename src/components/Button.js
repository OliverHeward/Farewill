import React from "react";
import styled from "styled-components";

import { COLOR, BORDER, FONT, SPACING } from "../constants";

const StyledButton = styled.button`
  padding: ${SPACING.XS} ${SPACING.M};
  cursor: pointer;
  outline: 0;
  border: 0;
  background-color: ${COLOR.ACCENT.PRIMARY};
  border-radius: ${BORDER.RADIUS.S};
  color: ${COLOR.BLACK};
  font-family: ${FONT.FAMILY.BODY};
  font-size: ${FONT.SIZE.M};
  text-decoration: none;
  min-width: 8em;

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: 1px dashed ${COLOR.ACCENT.SECONDARY};
  }

  &:active {
    outline: 1px dashed ${COLOR.ACCENT.PRIMARY};
  }

  &:disabled {
    pointer-events: none;
    user-select: none;
  }
`;

const Button = props => {
  return <StyledButton {...props} />;
};

export default Button;
