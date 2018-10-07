import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

class ContentMenuMobile extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div className="menu-mobile-wrap">
          <div style={{ display: 'table', margin: '-30px auto', fontSize: '50px' }} className="logo-mobile">BORCA</div>
          <ul>
            <hr/>
            <li>New Arrival</li>
            <li>Top</li>
            <li>Bottom</li>
            <hr/>
            <li>Cara Order</li>
            <li>Resi Pengiriman</li>
            <li>Konfirmasi Pembayaran</li>
            <li>Kontak</li>
            <hr/>
          </ul>
        </div>
        
      </div>
    );
  }
}

export default ContentMenuMobile;