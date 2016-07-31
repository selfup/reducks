import React, { Component } from 'react'

class Data extends Component {
  dataLoader() {
    return this.props.data.map((str, index) => {
      return (
        <div className="container Ideas-container" key={index}>
          <h3>Data: <em>{str}</em></h3>
        </div>
      )
    })
  }

  render() {
    return (
      <div >
        {this.dataLoader()}
      </div>
    )
  }
}

export default Data
