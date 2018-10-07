import React, { Component } from 'react';

import { Container, Row, Col, } from 'reactstrap';

class PromoSection extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* <h1>Section Promo</h1> */}
          <Row>
            <Col md="3">
              <div style={{ background: 'red',}}>
                <div style={{ width: '100%', height: '200px', background: 'gray' }}></div>
                <h5>Dress</h5>
                <p>Rp 78.000 </p>
              </div>
            </Col>
            <Col md="3">
              <div style={{ background: 'red',}}>
                <div style={{ width: '100%', height: '200px', background: 'gray' }}></div>
                <h5>Dress</h5>
                <p>Rp 78.000 </p>
              </div>
            </Col>
            <Col md="3">
              <div style={{ background: 'red',}}>
                <div style={{ width: '100%', height: '200px', background: 'gray' }}></div>
                <h5>Dress</h5>
                <p>Rp 78.000 </p>
              </div>
            </Col>
            <Col md="3">
              <div style={{ background: 'red',}}>
                <div style={{ width: '100%', height: '200px', background: 'gray' }}></div>
                <h5>Dress</h5>
                <p>Rp 78.000 </p>
              </div>    
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PromoSection;