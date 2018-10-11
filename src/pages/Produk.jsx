import React, { Component } from 'react';
import Headers from '../component/Headers';
import { Container, Row, Col} from 'reactstrap';

class Produk extends Component {
  render() {
    return (
      <div>
      <Headers/>
        <Container>
          <Row>
            <Col>
              <h1>Produk</h1>
              <div style={{ width: '100%', height: '700px', background: 'red' }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Produk;