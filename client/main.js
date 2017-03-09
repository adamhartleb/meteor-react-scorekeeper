import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Tracker } from 'meteor/tracker'

import { Players } from '../imports/api/players'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      score: 0
    }
  }

  addPlayer (e) {
    e.preventDefault()
    if (!this.state.name) throw Error('You dun goofed')
    Players.insert({
      name: this.state.name,
      score: parseInt(this.state.score)
    })
  }

  removePlayer (id) {
    Players.remove(id)
  }

  render () {
    let { players } = this.props
    return (
      <div>
        {players.map((player, i) => {
          return (
            <div key={i}>
              <button onClick={() => { this.removePlayer(player._id) }}>X</button>
              <button onClick={() => { Players.update({_id: player._id}, {$inc: {score: 1}}) }}>+</button>
              <button onClick={() => { Players.update({_id: player._id}, {$inc: {score: -1}}) }}>-</button>
              {player.name}: {player.score}
            </div>
          )
        })}
        <form onSubmit={(e) => this.addPlayer(e)}>
          <input type='text' onInput={(e) => { this.setState({name: e.target.value}) }} />
          <input type='number' onInput={(e) => { this.setState({score: e.target.value}) }} />
          <button>Add Player</button>
        </form>
      </div>
    )
  }
}



Meteor.startup(() => {
  Tracker.autorun(() => {
    let playerz = Players.find().fetch()

    render(<App players={playerz} />, document.getElementById('root'))
  })
})




