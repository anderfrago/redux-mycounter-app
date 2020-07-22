import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as counterActions from "../../redux/actions/counterActions";

import PropTypes from "prop-types";


class CounterPage extends React.Component {
  state = {
    counter: {
      value: 0
    }
  };

  handleIncrement = event => {
    const counter = { ...this.state.counter, counter: event.target.value };
    this.setState({ counter });
    this.props.actions.incrementCounter(this.state.counter );
  };
  handleDecrement = event => {
    const counter = { ...this.state.counter, counter: event.target.value };
    this.setState({ counter });
    this.props.actions.decrementCounter(this.state.counter);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-10 mx-auto jumbotron">
            <h2 className="display-2">My Redux - Counter</h2>
            <h3 className="teal">Basic example</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-4 mx-auto">
            <h3>
              Pulsado {this.props.value} veces</h3>
          </div>
          <div className="col-4 mr-auto">
            <button
              className="btn btn-block btn-primary"
              onClick={this.handleIncrement}
              value={this.state.counter}
            >+</button>
            <button
              className="btn btn-block btn-secondary"
              onClick={this.handleDecrement}
              value={this.state.counter}
            >-</button>

          </div>
        </div>
      </div>

    );
  }
}

CounterPage.propTypes = {
  value: PropTypes.any.isRequired,
};

function mapStateToProps(state) {
  return {
    value: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(counterActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
