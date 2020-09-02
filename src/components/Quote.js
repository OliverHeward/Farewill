import React from "react";
import styled from "styled-components";

import { SPACING, FONT, BORDER, CHARACTER, COLOR } from "../constants";

const StyledQuoteWrapper = styled.div`
  font-family: ${FONT.FAMILY.BODY};
  box-shadow: ${BORDER.SHADOW.M};
  border: 1px solid ${COLOR.GREY.LIGHT};
  border-radius: ${BORDER.RADIUS.S};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  padding: ${SPACING.M};
  margin: ${SPACING.S} auto;
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: 43%;
    flex-flow: row nowrap;
    justify-content: space-between;
    margin: 13px auto;
    max-width: unset;
    &:nth-of-type(1n) {
      margin-left: 0;
    }
    &:nth-of-type(2n) {
      margin-left: auto;
      margin-right: 0;
    }
    p {
      margin: 0;
      font-size: 20px;
    }
    justify-content: space-evenly;
    &.Right {
      img {
        order: 2;
        margin-left: ${SPACING.M}; /* clearance */
      }
      p {
        order: 1;
      }
    }
    &.Left {
      img {
        order: 1;
        margin-right: ${SPACING.M}; /* clearance */
      }
      p {
        order: 2;
      }
    }
  }
`;
const StyledCharacter = styled.img`
  max-height: ${CHARACTER.HEIGHT.S};
  max-width: ${CHARACTER.SIZE.S};
`;

const StyledQuote = styled.p`
  font-size: ${FONT.SIZE.M};
  line-height: 30px;
  text-align: center;
  margin-bottom: 0;
  @media screen and (min-width: 1024px) {
    text-align: left;
    line-height: 34px;
  }
`;

const Quote = ({ quote, characterDirection, image }) => (
  // Destructure from props ^
  <StyledQuoteWrapper className={`quote-wrapper ${characterDirection}`}>
    <StyledCharacter src={image} className="character"/>
    <StyledQuote>{quote}</StyledQuote>
  </StyledQuoteWrapper>
);

export default Quote;
