import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div >
        <button onClick={() => this.props.dispatch({type: 'WOW'})}>Make it WOW</button>
        <button onClick={() => this.props.dispatch({type: 'OK'})}>Make it OK</button>
        <br/><br/>
        {this.props.foo}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({foo: state.foo})

const mapDispatchToProps = (dispatch) => ({dispatch: dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(App)
