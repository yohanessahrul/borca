import React, { Component } from 'react';
import Headers from '../component/Headers';
// import SubHeaderLaptop from '../component/SubHeaderLaptop';

import { Container } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Headers/>
        <Container></Container>
      </div>
    );
  }
}

export default Home;