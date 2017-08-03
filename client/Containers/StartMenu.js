import React from 'react'
import {
	Text,
	Button,
} from 'react-native'

import {PageView} from '../Components'

import connect from '../Streams/connect'

const StartMenu = ({createLobby}) => (
	<PageView>
		<Text>
			GixIt!
		</Text>
		<Button
			title={'Host a Game'}
			onPress={() => createLobby()} />
	</PageView>
)

export default connect(0, 'createLobby') (StartMenu)