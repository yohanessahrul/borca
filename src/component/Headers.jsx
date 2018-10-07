import React, { Component } from 'react';
import HeaderLaptop from '../component/HeaderLaptop';
import SubHeaderLaptop from '../component/SubHeaderLaptop';
import HeaderMobile from '../component/HeaderMobile';

class Headers extends Component {
  render() {
    return (
      <div>
        <div className="headerDeviceLarge">
          <SubHeaderLaptop/>
          <HeaderLaptop/>
        </div>
        <div className="headerDeviceSmall">
          <HeaderMobile/>
        </div>
      </div>
    );
  }
}

export default Headers;