import React, { Component } from 'react'
import {AppRegistry} from 'react-native'
import ViewRenderer from './Containers/ViewRenderer'

import initializeStreams from './Streams/initializeStreams'
import streamDefinitions from './Streams/streamDefinitions'
initializeStreams(streamDefinitions)

export default class GixIt extends Component {
	render = () => <ViewRenderer />
}

AppRegistry.registerComponent('GixIt', () => GixIt)