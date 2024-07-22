
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavouritePage from '../container/FavouritePage/FavoritesPage';
import Maainpage from '../container/Mainpage/Maainpage';
import My_Bag from '../container/My_Bag/My_Bag';
import ProductCard from '../container/ProductCard/ProductCard';
import My_Profile from '../container/My_Profile/My_Profile';



const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (<Stack.Navigator>
        <Stack.Screen
            name="Maainpage"
            component={Maainpage}
            options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="FavouritePage" component={FavouritePage} />
        <Stack.Screen name="ProductCard" component={ProductCard} />

    </Stack.Navigator>)
}

export const ShopStack=()=>{
    return(<Stack.Navigator>
        <Stack.Screen name='Shop'
        component={FavouritePage}
        options={{title:'Welcome'}}/>

        <Stack.Screen name='ProductCard' component={ProductCard}/>
    </Stack.Navigator>)
}

export const ProductStack=()=>{
    return(<Stack.Navigator>
        <Stack.Screen name='Product'
        component={ProductCard}
        options={{title:'Welcome'}}/>

        <Stack.Screen name='MyBag' component={My_Bag}/>
        <Stack.Screen name='shoop' component={FavouritePage}/>
    </Stack.Navigator>)
}

export const BagStack=()=>{
    return(<Stack.Navigator>
        <Stack.Screen name='Mybag'
        component={My_Bag
            
        }
        options={{title:'Welcome'}}/>

        <Stack.Screen name='Profile' component={My_Profile}/>
    </Stack.Navigator>)
}





