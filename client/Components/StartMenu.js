import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	Button
} from 'react-native'

const StartMenu = () => (
	<View>
		<Text>
			GixIt!
		</Text>
		<Button title='Host a Game' />
		<Button title='Join a Game' />
	</View>
)

const styles = StyleSheet.create({
	
})

export default StartMenu