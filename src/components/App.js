import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Button from "./Button";
import Header from "./Header";
import { CONTENT_WIDTH, SPACING } from "../constants";
import fetchQuotes from "../fetchQuotes";

import Loader from "react-loader-spinner";
import Quote from "./Quote";

const StyledContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${CONTENT_WIDTH};
  padding: ${SPACING.L};
`;

const StyledQuoteContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;
  margin: ${SPACING.M} auto;
`;

const App = () => {
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch Quotes
  const fetchPosts = async () => {
    setLoading(true); // set is loading true
    const posts = await fetchQuotes();
    setPosts(posts); // store quotes in state
    setLoading(false); // set is loading false
  };

  // If is not loading and there is data, iterate over data
  const quotes = !loading ? (
    posts.data &&
    posts.data.map((quote) => (
      // spread each node to component for destructuring
      <Quote {...quote} key={quote.character} />
    ))
  ) : (
    // show spinner when loading state is true
    <Loader type="Circles" color="#FFDF4E" />
  );

  return (
    <div>
      <Header />
      <StyledContentWrapper>
        <Button onClick={fetchPosts}>Load quotes</Button>
        <StyledQuoteContainer>{quotes}</StyledQuoteContainer>
      </StyledContentWrapper>
    </div>
  );
};

export default App;
