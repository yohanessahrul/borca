import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

class TopMenu extends Component {
  render() {
    return (
      <div style={{ padding: '20px 20px 50px 20px' }}>
        <h1>Top</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita veniam deleniti quibusdam aut iure.</p>
        <Row>
          <Col md="4">
            <div style={{ width: '100%', height: '100px', background: 'orange' }}>
              <p style={{ color: 'black', display: 'table', margin: '0 auto', paddingTop: '25px', textAlign: 'center' }}>Category <br/> Dress 1</p>
            </div>
          </Col>
          <Col md="4">
            <div style={{ width: '100%', height: '100px', background: 'orange' }}>
              <p style={{ color: 'black', display: 'table', margin: '0 auto', paddingTop: '25px', textAlign: 'center' }}>Category <br/> Dress 2</p>
            </div>
          </Col>
          <Col md="4">
            <div style={{ width: '100%', height: '100px', background: 'orange' }}>
              <p style={{ color: 'black', display: 'table', margin: '0 auto', paddingTop: '25px', textAlign: 'center' }}>Category <br/> Dress 3</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TopMenu;