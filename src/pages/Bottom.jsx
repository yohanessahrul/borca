import React, { Component } from 'react';
import Navigation from '../component/Navigation';

import { Container } from 'reactstrap';
import PromoSection from '../component/PromoSection';

class Bottom extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Container style={{ marginTop: '40px' }}>
          <h1>Bottom Category</h1>
        </Container>
        <PromoSection/>
        <PromoSection/>
        <PromoSection/>
        <PromoSection/>
      </div>
    );
  }
}

export default Bottom;