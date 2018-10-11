import React, { Component } from 'react';
import Headers from '../component/Headers';
import { Container, Row, Col} from 'reactstrap';

class CaraOrder extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <Container>
          <Row>
            <Col>
              <h1>Cara Order</h1>
              <div style={{ width: '100%', height: '700px', background: '#fedde3' }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CaraOrder;