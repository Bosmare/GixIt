import React from 'react'
import {StyleSheet, View} from 'react-native'

import connect from '../Streams/connect'

import StartMenu from './StartMenu'
import Lobby from './Lobby'

const Containers = {
	menu: StartMenu,
	lobby: Lobby
}

const ViewRenderer = ({view}) => {
	const Container = Containers[view]

	if (!view || !Containers[view]) return null

	return(
		<View style={styles.view}>
			<Container />
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 10,
		paddingRight: 10
	}
})

export default connect('view')(ViewRenderer)