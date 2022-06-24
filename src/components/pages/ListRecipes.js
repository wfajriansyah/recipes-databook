import React from 'react';
import {
    Div,
    Row,
    Col,
    Text
} from 'atomize'

import {
  Link
} from 'react-router-dom'

function ListRecipes() {
    return (
        <>
        <Row>
            <Col size="4" style={{ 'paddingBottom' : '16px' }}>
              <Div p="1rem" bg="success600">
                <Div
                  bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  bgSize="cover"
                  bgPos="center"
                  h="20rem"
                  m={{ y: '1rem' }}
                />
                <Text tag="h4" textSize="display4" m={{ b: "1rem" }}>
                  Resep masakan padang
                </Text>
                Bacalah resep masakan padang disini... <Link to="/recipes/1">Selengkapnya</Link>
              </Div>
            </Col>
            <Col size="4" style={{ 'paddingBottom' : '16px' }}>
              <Div p="1rem" bg="success600">
                <Div
                  bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  bgSize="cover"
                  bgPos="center"
                  h="20rem"
                  m={{ y: '1rem' }}
                />
                <Text tag="h4" textSize="display4" m={{ b: "1rem" }}>
                  Resep masakan padang
                </Text>
                Bacalah resep masakan padang disini... <a href={ 'https://facebok.com' }>Selengkapnya</a>
              </Div>
            </Col>
            <Col size="4" style={{ 'paddingBottom' : '16px' }}>
              <Div p="1rem" bg="success600">
                <Div
                  bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  bgSize="cover"
                  bgPos="center"
                  h="20rem"
                  m={{ y: '1rem' }}
                />
                <Text tag="h4" textSize="display4" m={{ b: "1rem" }}>
                  Resep masakan padang
                </Text>
                Bacalah resep masakan padang disini... <a href={ 'https://facebok.com' }>Selengkapnya</a>
              </Div>
            </Col>
            <Col size="4" style={{ 'paddingBottom' : '16px' }}>
              <Div p="1rem" bg="success600">
                <Div
                  bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  bgSize="cover"
                  bgPos="center"
                  h="20rem"
                  m={{ y: '1rem' }}
                />
                <Text tag="h4" textSize="display4" m={{ b: "1rem" }}>
                  Resep masakan padang
                </Text>
                Bacalah resep masakan padang disini... <a href={ 'https://facebok.com' }>Selengkapnya</a>
              </Div>
            </Col>
            <Col size="4" style={{ 'paddingBottom' : '16px' }}>
              <Div p="1rem" bg="success600">
                <Div
                  bgImg="https://images.unsplash.com/photo-1559963629-38ed0fbd4c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  bgSize="cover"
                  bgPos="center"
                  h="20rem"
                  m={{ y: '1rem' }}
                />
                <Text tag="h4" textSize="display4" m={{ b: "1rem" }}>
                  Resep masakan padang
                </Text>
                Bacalah resep masakan padang disini... <a href={ 'https://facebok.com' }>Selengkapnya</a>
              </Div>
            </Col>
          </Row>
      </>
    );
  }

  export default ListRecipes;
