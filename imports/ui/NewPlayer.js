import React, { Component } from 'react'
import { Players } from '../api/players'

export default class NewPlayer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      score: 0
    }
    this.addPlayer = this.addPlayer.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput (e) {
    this.setState({
      name: e.target.value
    })
  }
  addPlayer (e) {
    e.preventDefault()
    if (this.state.name) {
      Players.insert({
        name: this.state.name,
        score: this.state.score
      })
      this.setState({
        name: ''
      })
    }
  }

  render () {
    return (
      <div className='container player'>
        <form className='form' onSubmit={this.addPlayer}>
          <input className='form__input' onInput={this.handleInput} value={this.state.name} type='text' placeholder='Player Name' />
          <button className='button button__add'>Add Player</button>
        </form>
      </div>
    )
  }
}
