import React, { Component } from 'react';
import Headers from '../component/Headers';
import { Container, Row, Col} from 'reactstrap';

class Kontak extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <Container>
          <Row>
            <Col>
              <h1>Kontak</h1>
              <div style={{ width: '100%', height: '700px', background: '#fce2fc' }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Kontak;