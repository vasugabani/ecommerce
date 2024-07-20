
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavouritePage from '../container/FavouritePage/FavoritesPage';
import Maainpage from '../container/Mainpage/Maainpage';
import My_Bag from '../container/My_Bag/My_Bag';



const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (<Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Maainpage}
            options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="FavouritePage" component={FavouritePage} />

    </Stack.Navigator>)
}

export const FavouriteStack = () => {
    return (<Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Maainpage}
            options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="FavouritePage" component={My_Bag} />

    </Stack.Navigator>)
}
