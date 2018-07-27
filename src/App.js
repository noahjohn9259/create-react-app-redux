import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleActions';

class App extends Component {
  constructor() {
    super();
    this.simpleAction = this.simpleAction.bind(this);
  }
  simpleAction() {
    this.props.simpleAction();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre>{JSON.stringify(this.props)}</pre>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color="secondary" onClick={this.simpleAction}>
          Test redux action
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

App.propTypes = {
  simpleAction: PropTypes.func.isRequired,
};
