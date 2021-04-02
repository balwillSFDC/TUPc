import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

class SMSSubscriptions extends React.Component {
  render() {
    return (
      <Card>
        <Card.Body>This is where the SMS subscriptions go</Card.Body>
      </Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SMSSubscriptions);
