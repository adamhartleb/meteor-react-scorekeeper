import React, { PropTypes } from 'react'
import { Players } from '../api/players'

export const Player = ({ _id, name, score }) => {
  function incScore (id) {
    Players.update(_id, {$inc: {score: 1}})
  }
  function decScore (id) {
    Players.update(_id, {$inc: {score: -1}})
  }
  function delPlayer (id) {
    Players.remove(_id)
  }

  return (
    <div className='player'>
      <div className='player__profile'>
        <div className='player__stats'>
          <h3 className='player__name'>{name}</h3>
          <p className='player__score'>{score} {(score === 1 || score === -1) ? 'point' : 'points'}.</p>
        </div>
        <div className='player__actions'>
          <button className='button button--round' onClick={() => incScore(_id)}>+1</button>
          <button className='button button--round' onClick={() => decScore(_id)}>-1</button>
          <button className='button button--round' onClick={() => delPlayer(_id)}>X</button>
        </div>
      </div>
    </div>
  )
}

Player.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}
