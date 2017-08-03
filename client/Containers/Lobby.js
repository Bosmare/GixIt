import React from 'react'
import {
	Text,
	Button,
	View,
	ScrollView,
	Image,
	StyleSheet
} from 'react-native'

import {
	PageView,
	PlayerChip
} from '../Components'

import connect from '../Streams/connect'

const Lobby = ({lobby_code, players, pictures, toggleReady, createCards}) => {
	if (lobby_code && players && pictures) {
		return(
			<PageView>
				<View style={styles.content}>
					<View style={styles.title}>
						<Text style={styles.titleTop}> Pre-Game Lobby </Text>
						<Text style={styles.titleBot}> {'join code: ' + lobby_code} </Text>
					</View>

					<View style={styles.section}>
						<Text style={styles.heading}> Players </Text>
						{players.map((props, index) => <PlayerChip {...props} key={index} />)}
					</View>

					<View style={styles.section}>
						<Text style={styles.heading}>
							{'Cards: ' + pictures.length + ' created - ' + players.length * 6 + ' needed'}
						</Text>
						<ScrollView>
							<View style={styles.pictures}>
								{pictures.map((uri, index) => (
									<Image key={index} style={styles.picture} source={{uri}} />
								))}	
							</View>
						</ScrollView>
					</View>
				</View>
				<View style={styles.footer}>
					<Button
						onPress={() => toggleReady()}
						title="Create Cards"
						color="green"
						accessibilityLabel="Click to indicate you are ready to start"					
					/>
					<Button
						onPress={() => toggleReady()}
						title="Ready"
						color="green"
						accessibilityLabel="Click to indicate you are ready to start"					
					/>				
				</View>
			</PageView>
		)
	}

	else return null

}

const styles = StyleSheet.create({
	content: {flexGrow: 1},
	titleTop: {fontSize: 20, fontWeight: 'bold'},
	titleBot: {fontSize: 15},
	heading: {fontSize: 15, fontWeight: 'bold'},
	picture: {height: 100, width: 100},
	pictures: {flexDirection: 'row', flexWrap: 'wrap'},
	footer: {flexDirection: 'row', justifyContent: 'space-around'},
	section: {marginTop: 10}
})

export default connect(
	'lobby_code players player_id pictures',
	'toggleReady createCards'
)(Lobby)

