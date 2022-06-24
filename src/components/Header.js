import React from 'react';
import {
    Div,
    Text
} from 'atomize'

function Header() {
    return (
      <>
      <Div w="100%" bg="success700" textAlign="center">
        <Text tag="h1" textColor="white" textSize="display1" m={{ b: '4rem' }}>
          Recipes Books
        </Text>
      </Div>
      </>
    );
  }

  export default Header;
