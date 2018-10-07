import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

import { Icon } from 'react-icons-kit';
import {ic_menu, ic_close} from 'react-icons-kit/md';

import ContentMenuMobile from '../component/ContentMenuMobile';

class HeaderMobile extends Component {
  constructor (props) {
    super (props)
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
  }
  showMenu () {
    console.log('show menu')
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  render() {
    const menuShowHide = () => {
      if (this.state.showMenu) {
        return (
          <div className="menu">
            <div className="bg-menu-mobile">
              <Container>
                <Row>
                  <Col xs="12">
                    <Icon onClick={this.showMenu} style={{ color: 'white', float: 'right', padding: '10px', background: '#1e1e1e' }} icon={ic_close} size={35}/>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">                  
                    <ContentMenuMobile/> 
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        )
      } else {
        return ''
      }
    }
    return (
      <div style={{ width: '100%', background: 'black' }}>
        <Container>
          <Row>
            <Col xs="8">
              <div style={{ width: '100%' }}>
                <div style={{ float: 'left' }}>
                  <Icon onClick={this.showMenu} style={{ padding: '10px', display: 'table', color: 'white' }} icon={ic_menu} size={35}/>
                </div>
                <div>
                  <h1 className="logo-mobile">BORCA</h1>
                </div>
              </div>
            </Col>
            <Col xs="4">
              {/* <div style={{ width: '100%', height: '50px', background: 'yellow' }}></div> */}
            </Col>
          </Row>
        </Container>
        {menuShowHide()}
      </div>
    );
  }
}

export default HeaderMobile;