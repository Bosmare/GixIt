import React from 'react'
import {
	Text,
	View,
	Button,
} from 'react-native'

import connect from '../Streams/connect'

const StartMenu = ({createLobby}) => {
	return(
		<View>
			<Text>
				GixIt!
			</Text>
			<Button
				title={'Host a Game'}
				onPress={() => createLobby()} />
		</View>
	)
}

export default connect(0, 'createLobby') (StartMenu)