import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap';

class SubHeader extends Component {
  render() {
    return (
      <div style={{ background: '#e0e0e0' }}>
        <Container>
          <Row>
            <Col md="12">
              <div className="subHeader">
                <ul>
                  <li>
                    <Link className="subHeaderLink" to="/new-arrival">NEW ARRIVAL</Link>
                  </li>
                  <li>
                    <Link className="subHeaderLink" to="/new-arrival">PRODUK</Link>
                  </li>
                  <li>
                    <Link className="subHeaderLink" to="/new-arrival">CARA ORDER</Link>
                  </li>
                  <li>
                    <Link className="subHeaderLink" to="/new-arrival">RESI PENGIRIMAN</Link>
                  </li>
                  <li>
                    <Link className="subHeaderLink" to="/new-arrival">KONTAK</Link>
                  </li>
                  <li>
                    <Link className="subHeaderLink" to="/new-arrival">KONFIRMASI PEMBAYARAN</Link>
                  </li>
                  <li></li>
                  <div className="clear"></div>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SubHeader;