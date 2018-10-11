import React, { Component } from 'react';
import Headers from '../component/Headers';
import { Container, Row, Col} from 'reactstrap';

class Top extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <Container>
          <Row>
            <Col>
              <h1>Top</h1>
              <div style={{ width: '100%', height: '700px', background: 'orange' }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Top;