import React, { Component } from 'react'
import { connect } from 'react-redux'
import Data from './Data'

class App extends Component {
  render() {
    return (
      <div >
        <button 
          onClick={() => this.props.dispatch({type: 'WOW'})}
        >
        Add wow
        </button>
        <button 
          onClick={() => this.props.dispatch({type: 'OK'})}
        >
        Add ok
        </button>
        <button 
          onClick={() => this.props.dispatch({type: 'CLEAR'})}
        >
        Clear all of the Data!
        </button>
        <br/><br/>
        <Data data={this.props.data} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({data: state.data})

const mapDispatchToProps = (dispatch) => ({dispatch: dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(App)
