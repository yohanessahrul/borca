import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap';

import ProductMenus from '../component/ProductMenus';

class SubHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showProductMenu: false
    }
    this.showProductMenuClick = this.showProductMenuClick.bind(this);
    this.hoverCloseOthersMenu = this.hoverCloseOthersMenu.bind(this);
  }
  showProductMenuClick () {
    this.setState({
      showProductMenu: !this.state.showProductMenu
    })
  }
  hoverCloseOthersMenu () {
    this.setState({
    showProductMenu: false
    })
  }
  render() {
    const showProductMenu = () => {
      if (this.state.showProductMenu) {
        return (
          <ProductMenus/>
        )
      }
    }
    return (
      <div style={{ background: '#17182f' }}>
        <Container>
          <Row>
            <Col md="12">
              <div className="subHeader" style={{ position: 'relative' }} >
                <ul>
                  <li>
                    <Link className="subHeaderLink" to="/new-arrival" onMouseOver={this.hoverCloseOthersMenu}>NEW ARRIVAL</Link>
                  </li>
                  <li>
                    <Link className="subHeaderLink" to="#"onClick={this.showProductMenuClick}>PRODUK</Link>
                    {showProductMenu()}
                  </li>
                  <li>
                    <Link className="subHeaderLink" to="/cara-order" onMouseOver={this.hoverCloseOthersMenu}>CARA ORDER</Link>
                  </li>
                  <li>
                    <Link className="subHeaderLink" to="/resi-pengiriman" onMouseOver={this.hoverCloseOthersMenu}>RESI PENGIRIMAN</Link>
                  </li>
                  <li>
                    <Link className="subHeaderLink" to="/kontak" onMouseOver={this.hoverCloseOthersMenu}>KONTAK</Link>
                  </li>
                  <li>
                    <Link className="subHeaderLink" to="/konfirmasi-pembayaran">KONFIRMASI PEMBAYARAN</Link>
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