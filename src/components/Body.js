import React from 'react';
import {
    Div,
    Row,
    Col,
    Text
} from 'atomize'

import {
  Routes, Route
} from 'react-router-dom'

import Recipes from './pages/Recipes'
import ListRecipes from './pages/ListRecipes'

function Body() {
    return (
        <>
        <Div>
          <Routes>
            <Route path='/' element={<ListRecipes />} />
            <Route path='/recipes/:id' element={<Recipes/>} />
          </Routes>
        </Div>s
      </>
    );
  }

  export default Body;
