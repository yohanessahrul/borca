import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap';
import { Icon } from 'react-icons-kit';
import {ic_search, ic_account_circle} from 'react-icons-kit/md';

class Header extends Component {
  constructor (props) {
    super (props)
  }
  render() {
    return (
      <div style={{ background: '#212340' }}>
        <Container>
          <Row>
            <Col md="4" style={{ position: 'relative' }}>
              
            </Col>
            <Col md="4">
              <h1 className="logo">
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                  BORCA
                </Link>
              </h1>
            </Col>
            <Col md="4" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', right: 0 }} className="headerRight">
                <ul>
                  <li>
                    <div className="liStyleHeaderRight">
                      <Icon icon={ic_search} size={32}/>
                    </div>
                  </li>
                  <li>
                    <div className="liStyleHeaderRight">
                      <Icon icon={ic_account_circle} size={32}/>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Header;