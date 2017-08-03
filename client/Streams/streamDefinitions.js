import {
	openMockWS,
	connectToWS
} from './api'
import {
	pickKeys,
	keyToType
} from './utils'

//names of streams originating from the application
export const actions = [
	'createLobby',
	'toggleReady',
	'createCards',
	'toWS'
]

//names of property streams and their initial values
export const properties = {
	view: 'menu',
	lobby_code: null,
	players: null,
	player_id: null,
	pictures: null,
}

//functions for defining reactive streams
//take a list of event streams
export const connections = [
	() => ({fromWS: openMockWS()}),
	({createLobby}) => {connectToWS(keyToType({createLobby}))},
	({fromWS}) => pickKeys(
		[
			'lobby_code',
			'players',
			'player_id',
			'pictures',
			'view'		
		],
		fromWS
	)
]

export default {actions, properties, connections}