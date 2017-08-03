import serverIP from '../constants'
import {createStream} from './utils'

let WS

export const openWS = () => {

	let {emitter, stream} = createStream()

	WS = new WebSocket(serverIP)

	WS.onopen = () => {
		emitter.value('websocked opened')
	}
	WS.onmessage = emitter.value
	WS.onerror = emitter.error
	WS.onclose = emitter.end

	return stream
}

export const connectToWS = stream => {
	stream.observe({
		value: WS.message,
		error: WS.error,
		end: WS.close
	})
}

export const openMockWS = () => {

	const mockMap = {
		createLobby: {
			lobby_code: 'XSA3XD',
			players: [
				{name: 'matti', isReady: false, score: 5},
				{name:'teppo', isReady: true, score: 7}
			],
			pictures: [
				'https://facebook.github.io/react/img/logo_og.png',
				'https://facebook.github.io/react/img/logo_og.png',
				'https://facebook.github.io/react/img/logo_og.png',
				'https://facebook.github.io/react/img/logo_og.png',
				'https://facebook.github.io/react/img/logo_og.png',
				'https://facebook.github.io/react/img/logo_og.png',
				'https://facebook.github.io/react/img/logo_og.png',
				'https://facebook.github.io/react/img/logo_og.png'
			],
			view: 'lobby'
		}
	}

	let {emitter, stream} = createStream()

	WS = {
		message: ({type}) => {
			const message = mockMap[type]
			console.log('pushing to WS: ', message)
			emitter.value(message)
		},
		error: console.log,
		end: console.log
	}

	return stream
}