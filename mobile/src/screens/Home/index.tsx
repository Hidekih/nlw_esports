import React from 'react';
import { View, Image, SafeAreaView, FlatList } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/GameCard';
import { SectionHeader } from '../../components/SectionHeader';

import { styles } from './styles';
import { GAMES } from '../../utils/games';

export function Home() {
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={logoImg} 
				style={styles.logo}
			/>

			<SectionHeader
				title='Encontre seu duo!'
				description='Selecione o game que deseja jogar...'
				mt={48}
			/>

			<FlatList
				horizontal
				data={GAMES}
				style={styles.gameList}
				ListFooterComponent={() => <View style={{ width: 24 }} />}
				renderItem={({ item }) => (
					<GameCard 
						key={item.id}
						source={item.cover} 
						title={item.name}
						description={`Anúncios ${item.ads}`}
					/>
				)}
			></FlatList>
		</SafeAreaView>
	);
}