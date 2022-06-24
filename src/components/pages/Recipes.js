import React from 'react';
import {
    Div,
    Row,
    Col,
    Text
} from 'atomize'

import {
    Link,
    useParams
} from 'react-router-dom'

function Recipes() {
    let { id } = useParams();
    return (
        <>
        <Row>
            <Col size="12" style={{ 'paddingBottom' : '16px' }}>
                <Link to='/'>Kembali</Link>
                <Div p="1rem" bg="success600">
                    {id}
                </Div>
            </Col>
        </Row>
      </>
    );
}

export default Recipes;
