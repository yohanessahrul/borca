import React, { Component } from 'react';
import TopMenu from '../component/TopMenu';
import BottomMenu from '../component/BottomMenu';

class ProductMenus extends Component {
  render() {
    return (
    <div style={{ position: 'absolute', width: '100%', display: 'block', background: 'white', zIndex: '10', left: 0, top: 129, padding: '10px', border: 'thin solid #efefef' }}>
      <ul style={{ padding: 0, margin: 0 }}>
        <li style={{ listStyle: 'none', width: '50%', height: '300px', float: 'left'}}>
          <TopMenu/>
        </li>
        <li style={{ listStyle: 'none', width: '50%', height: '300px', float: 'left'}}>
          <BottomMenu/>
        </li>
        <div className="clear"></div>
      </ul>
    </div>
    );
  }
}

export default ProductMenus;