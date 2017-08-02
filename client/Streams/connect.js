import React from 'react'
import R from 'ramda'

const parse = arg => arg === 0 ? [] : arg.split(' ')

const connect = (inputs, outputs = 0) => Component => (
	class Connector extends React.Component {

		constructor(props) {
			super(props)
			this.state = {}
		}

		componentDidMount() {

			this.subscriptions = parse(inputs).map(
				name => window.subscribeToProperty(
					name,
					value => this.setState({[name]: value})
				)
			)

			this.outs = R.pipe(
				parse,
				R.map(name => [name, window.makeActionCreator(name)]),
				R.fromPairs
			) (outputs)

			this.forceUpdate()
		}

		componentWillUnmount() {
			this.subscriptions.forEach(
				sub => sub.unsubscribe()
			)
		}

		render = () => {
			console.log(this.state)
			return <Component {...this.state} {...this.outs} />
		}
	}
)

export default connect