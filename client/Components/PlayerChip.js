import React from 'react'
import {Image, Text, View, StyleSheet} from 'react-native'

const PlayerChip = ({name, score, isReady}) => (
	<View style={StyleSheet.flatten([
		styles.container,
		isReady ? styles.containerReady : styles.empty,
	])}>
		<Image
			style={styles.image}
			source={require('../Images/user.png')} />
		<Text style={styles.name}> {name} </Text>
		{score
			? <Text style={styles.score}> {score} </Text>
			: null}
	</View>
)

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: 'lightgray'
	},
	containerReady: {
		backgroundColor: 'green'
	},
	image: {
		width: 50,
		height: 50
	},
	empty: {}
})

export default PlayerChip