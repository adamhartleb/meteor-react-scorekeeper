import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Tracker } from 'meteor/tracker'
import Title from '../imports/ui/Title'
import NewPlayer from '../imports/ui/NewPlayer'

import { Players } from '../imports/api/players'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let { players } = this.props
    return (
      <div>
        <Title title='Score Keeper' />
        <NewPlayer />
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




