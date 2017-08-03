import React from 'react'

import connect from '../Streams/connect'

import StartMenu from './StartMenu'
import Lobby from './Lobby'

const Containers = {
	menu: StartMenu,
	lobby: Lobby
}

const ViewRenderer = ({view}) => {
	const Container = Containers[view]

	if (!view || !Containers[view]) {
		throw 'view: ' + view + ' is not defined'
	}

	return <Container />
}

export default connect('view')(ViewRenderer)