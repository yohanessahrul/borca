import React, { Component } from 'react';
import TopMenu from '../component/TopMenu';
import BottomMenu from '../component/BottomMenu';

class ProductMenus extends Component {
  render() {
    return (
    <div style={styles.productMenuWrapper}>
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

const styles = {
  productMenuWrapper: {
    position: 'absolute',
    width: '100%',
    display: 'block',
    background: 'white',
    zIndex: '10',
    left: 0,
    top: 129,
    padding: '10px',
    border: 'thin solid #efefef',
    background: 'rgb(255,255,255)',
    background: '-moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(249,244,255,1) 100%)',
    background: '-webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(249,244,255,1) 100%)',
    background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(249,244,255,1) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#ffffff", endColorstr="#f9f4ff",GradientType=0 )'
  }
}

export default ProductMenus;