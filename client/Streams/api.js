import K from 'kefir'

const createLobbyRequest = () => K.fromPromise(
	new Promise((onFulfill) => onFulfill({
		lobby_code: 'XSA3XD',
		players: [{name: 'tester'}],
		player_id: 1,
		pictures: [],
		view: 'lobby'
	}))
)

export {
	createLobbyRequest
}