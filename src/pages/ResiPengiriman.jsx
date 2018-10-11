import React, { Component } from 'react';
import Headers from '../component/Headers';
import { Container, Row, Col} from 'reactstrap';

class ResiPengiriman extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <Container>
          <Row>
            <Col>
              <h1>Resi Pengiriman</h1>
              <div style={{ width: '100%', height: '700px', background: '#ffe8be' }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ResiPengiriman;