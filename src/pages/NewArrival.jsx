import React, { Component } from 'react';
import Headers from '../component/Headers';
import { Container, Row, Col} from 'reactstrap';

class NewArrival extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <Container>
          <Row>
            <Col>
              <h1>New Arrival</h1>
              <div style={{ width: '100%', height: '700px', background: '#d5eeee' }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewArrival;