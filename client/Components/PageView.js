import React from 'react'
import {StyleSheet, View} from 'react-native'

const PageView = ({children}) => <View style={styles.view} children={children} />

const styles = StyleSheet.create({
	view: {
		flex: 1,
		flexDirection: 'column',
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 10,
		paddingRight: 10
	}
})

export default PageView