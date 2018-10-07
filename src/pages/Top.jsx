import React, { Component } from 'react';

import { Container, } from 'reactstrap';

import Navigation from '../component/Navigation';
import PromoSection from '../component/PromoSection';

class Top extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Container style={{ marginTop: '40px' }}>
          <h1>Top Category</h1>
        </Container>
        <PromoSection/>
        <PromoSection/>
        <PromoSection/>
        <PromoSection/>
      </div>
    );
  }
}

export default Top;