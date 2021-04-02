import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Sample Brand</Navbar.Brand>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
