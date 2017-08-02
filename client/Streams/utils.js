import R from 'ramda'
import K from 'kefir'


export const createStreams = keys => {
	let emitters = {}, outputs = {}

	keys.forEach(key => {
		emitters[key] = () => {}
		outputs[key] = K.stream(_emitter => {
			emitters[key] = _emitter.value
			return () => {
				emitters[key] = () => {}
			}
		})	
	})

	return {emitters, outputs}
}

export const conditionalSplit = R.curry(
	(predicates, stream) => {

		let {outputs, emitters} = createStreams(
			R.keys(predicates)
		)

		stream.observe(signal => (
			R.pipe(
				R.toPairs,
				R.forEach(([key, predicate]) => {
					if (predicate(signal)) {
						emitters[key](signal)
					}
				})
			) (predicates)
		))

		return outputs
	}
)

export const pickKeys = R.curry(
	(keys, stream) => {

		let {outputs, emitters} = createStreams(keys)

		stream.observe(
			R.pipe(
				R.pick(keys),
				R.toPairs,
				R.forEach(([key, value]) => {emitters[key](value)})
			)
		)

		return outputs
	}
)