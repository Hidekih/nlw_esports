import { StatusBar, Text } from 'react-native';
import { 
	useFonts,
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_900Black
} from '@expo-google-fonts/inter';

import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';

export default function App() {
	const [ fontsIsLoaded ] = useFonts({
		Inter_400Regular,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_900Black
	})

	return (
		<Background>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
			
			{ fontsIsLoaded ? <Home/> : <Loading/> }
		</Background>
	);
}

