import React, { PropTypes, Component } from 'react'
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
        players: Players.find({}, {sort: {score: -1}}).fetch()
      })
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
        {players.map((player, i) => {
          return <Player key={i} {...player} />
        })}
      </div>
    )
  }

}

