import K from 'kefir'
import R from 'ramda'

const initializeStreams = ({actions, properties, connections}) => {

	let 
		streams = {},
		emitters = {},
		props = {}


	const plug = R.pipe(
		R.toPairs,
		R.forEach(([name, stream]) => {
			if (!streams[name]) {
				streams[name] = K.pool()
			}
			streams[name].plug(stream)
		}),
	)

	actions.forEach(name => {
		let emitter
		const stream = K.stream(_emitter => {
			emitter = _emitter
		}).spy(name)

		stream.observe(() => {})

		Object.assign(streams, {[name]: stream})
		Object.assign(emitters, {[name]: emitter})
	})

	connections.forEach(connection => {
		plug(connection(streams))
	})

	//create properties, add spies
	R.pipe(
		R.toPairs,
		R.forEach(([name, stream]) => {
			if (R.keys(properties).includes(name)) {
				props[name] = stream.toProperty(() => properties[name]).spy(name)
				props[name].observe(() => {})
			}
			else {
				stream.spy(name)
			}
		})
	) (streams)

	window.makeActionCreator = name => {
		if (!emitters[name]) {
			throw 'action -' + name + '- does not exist'
		}

		return emitters[name].value
	}

	window.subscribeToProperty = (name, callback) => {
		if (!props[name]) {
			throw 'property -' + name + '- does not exist'
		}
		else {
			return props[name].observe(callback)
		}
	}
}

export default initializeStreams