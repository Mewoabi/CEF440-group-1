import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import HomeStack from './routes/homeStack';
// import * as Font from 'expo-font'  
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import About from './screens/About';
import { createDrawerNavigator } from '@react-navigation/drawer'; 
import AboutStack from './routes/aboutStack';

const Drawer = createDrawerNavigator();


const Stack = createNativeStackNavigator()

// const getFonts = () => Font.loadAsync({
//   'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
//   'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
// })



// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false)
//   if (fontsLoaded) {
//     return (
//       <Home />
//     );
//   } else {
//     return (
//       <AppLoading
//         startAsync={getFonts}
//         onFinish={() => setFontsLoaded(true)}
//         onError={(error)=>console.log("there was and error", error)}
//       />
//     )
//   }
// }

export default function App() {
  const [loaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerShown: false
      }}>
        <Drawer.Screen name="Home" component={HomeStack}/>
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
