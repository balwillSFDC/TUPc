import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Welcome from '../Welcome/Welcome';
import ContactInfo from '../ContactInfo/ContactInfo';
import EmailSubscriptions from '../EmailSubscriptions/EmailSubscriptions';
import SMSSubscriptions from '../SMSSubscriptions/SMSSubscriptions';

const mapStateToProps = (state) => {
  return {
    value_1: state.value_1,
    value_2: state.value_2,
    value_3: state.value_3
    // ...
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="component-container">
          <Welcome />
          <EmailSubscriptions />
          <SMSSubscriptions />
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
