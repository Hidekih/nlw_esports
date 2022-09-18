import React from 'react';
import { Text, ImageBackground, ImageBackgroundProps, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';

interface GameGardProps extends ImageBackgroundProps {
    title: string,
    description: string;
}

export function GameCard({ title, description, ...rest }: GameGardProps) {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.6}>
			<ImageBackground style={styles.cover} {...rest}>
				<LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.9)']} style={styles.info}>
					<Text style={styles.title}>{ title }</Text>
					<Text style={styles.description}>{ description }</Text>
				</LinearGradient>
			</ImageBackground>
			
		</TouchableOpacity>
	);
}