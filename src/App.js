import React from 'react';
import {
 Container
} from 'atomize'

import Header from './components/Header'
import Body from './components/Body'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Body />
      </Container>
    </React.Fragment>
  );
}

export default App;
