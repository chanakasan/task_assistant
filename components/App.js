import React from 'react';
import styled from 'styled-components';
import Hello from './Hello';
import Grid from './Grid';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${Grid} {
    margin: 10rem auto;
    width: 50%;
  }
`

const App = () => (
  <Wrapper>
    <Hello />

    <div><hr /></div>
    <Grid />
  </Wrapper>
)

export default App
