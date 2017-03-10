import React, { Component, PropTypes } from 'react'

export default class Title extends Component {
  render () {
    return (
      <div className='title'>
        <div className='container'>
          <h1>{this.props.title}</h1>
        </div>
      </div>
    )
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

Title.defaultProps = {
  title: 'Score Keeper'
}
