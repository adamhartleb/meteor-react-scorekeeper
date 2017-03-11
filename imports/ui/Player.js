import React, { PropTypes, Component } from 'react'
import { Players } from '../api/players'

export class Player extends Component {

  incScore (id) {
    Players.update(id, {$inc: {score: 1}})
  }
  decScore (id) {
    Players.update(id, {$inc: {score: -1}})
  }
  delPlayer (id) {
    Players.remove(id)
  }

  render () {
    const { _id, name, score } = this.props
    return (
      <div className='player'>
        <div className='player__profile'>
          <div className='player__stats'>
            <h3 className='player__name'>{name}</h3>
            <p className='player__score'>{score} {(score === 1 || score === -1) ? 'point' : 'points'}.</p>
          </div>
          <div className='player__actions'>
            <button className='button button--round' onClick={() => this.incScore(_id)}>+1</button>
            <button className='button button--round' onClick={() => this.decScore(_id)}>-1</button>
            <button className='button button--round' onClick={() => this.delPlayer(_id)}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

Player.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}
