import React from 'react'
import {
	Text,
	View,
	StyleSheet
} from 'react-native'

import connect from '../Streams/connect'

const Lobby = ({lobby_code, players, player_id, pictures, changeName, toggleReady, addPicture, navigateBack}) => {

	console.log(lobby_code, players, player_id, pictures)

	if (lobby_code && players && player_id && pictures) {
		return(
			<View>
				<Text style={styles.heading}> {'Lobby - ' + lobby_code} </Text>
				<Text style={styles.heading}> Players </Text>
				{players.map(({name}) => <Text> {name} </Text>)}
				<Text style={styles.heading}> Phrases +</Text>
				{pictures.map(phrase => <Text> {phrase} </Text>)}
			</View>
		)
	}

	else return null

}

const styles = StyleSheet.create({
	heading: {}
})

export default connect(
	'lobby_code players player_id pictures',
	'changeName toggleReady addPicture navigateBack'
)(Lobby)