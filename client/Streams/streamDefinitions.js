import {createLobbyRequest} from './api'
import {pickKeys} from './utils'

const actions = [
	'createLobby',
	'changeName',
	'toggleReady',
	'addPicture',
	'navigateBack'
]

const properties = {
	view: 'menu',
	lobby_code: null,
	players: null,
	player_id: null,
	pictures: null,
}

const connections = [
	//on createLobby, make request and push results
	({createLobby}) => ({responses: createLobby.flatMap(createLobbyRequest)}),
	({responses}) => pickKeys(
		[
			'lobby_code',
			'players',
			'player_id',
			'pictures',
			'view'		
		],
		responses
	)
]

export default {actions, properties, connections}