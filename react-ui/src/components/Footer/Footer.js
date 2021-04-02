import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';

const mapStateToProps = (state) => {
  return {
    // ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

class Footer extends React.Component {
  render() {
    return (
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Navbar.Brand>Footer</Navbar.Brand>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
