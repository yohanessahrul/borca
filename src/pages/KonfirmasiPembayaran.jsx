import React, { Component } from 'react';
import Headers from '../component/Headers';
import { Container, Row, Col} from 'reactstrap';

class KonfirmasiPembayaran extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <Container>
          <Row>
            <Col>
              <h1>Konfirmasi Pembayaran</h1>
              <div style={{ width: '100%', height: '700px', background: '#dedefc' }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default KonfirmasiPembayaran;