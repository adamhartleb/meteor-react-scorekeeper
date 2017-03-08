import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'
import App from '../imports/utils'

const players = [
  {
    id: 0,
    name: 'Pia',
    score: 4
  },
  {
    id: 1,
    name: 'Adam',
    score: 7
  },
  {
    id: 2,
    name: 'Jesus',
    score: -12
  }
]

Meteor.startup(() => {
  render(<div>{players.map((player, i) => <li key={i}>{player.name}</li>)}</div>, document.getElementById('root'))
})


