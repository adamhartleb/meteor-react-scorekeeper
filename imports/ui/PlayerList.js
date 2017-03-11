import React, { Component } from 'react'
import FlipMove from 'react-flip-move'
import { Player } from './Player'
import { Tracker } from 'meteor/tracker'
import { Players } from '../api/players'

export default class PlayerList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      players: []
    }
  }

  componentDidMount () {
    Tracker.autorun(() => {
      this.setState({
        players: Players.find().fetch()
      })
    })
  }

  renderPlayers () {
    return this.state.players.sort((a, b) => b.score - a.score).map((player, idx) => {
      return <Player key={player._id} {...player} />
    })
  }

  render () {
    let { players } = this.state
    if (players.length === 0) {
      return (
        <div className='container player'>
          <p className='player__noplayer'>No Players Found</p>
        </div>
      )
    }
    return (
      <div className='container'>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    )
  }

}

