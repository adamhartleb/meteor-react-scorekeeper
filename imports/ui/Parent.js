import React, { Component } from 'react'

import Title from './Title'
import NewPlayer from './NewPlayer'
import PlayerList from './PlayerList'


export default class App extends Component {
  render () {
    return (
      <div>
        <Title title='Score Keeper' />
        <PlayerList />
        <NewPlayer />
      </div>
    )
  }
}
