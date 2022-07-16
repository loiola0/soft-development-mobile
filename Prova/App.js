import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Icon } from 'react-native-elements'
import UserList from './src/views/UserList'
import UserForm from './src/views/UserForm'
import { UsersProvider } from './src/context/UserContext'



const Stack = createNativeStackNavigator()

export default props => {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='UserList'
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: "List User",
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate("UserForm")}
                                        type='clear'
                                        icon={<Icon name="add" size={25} />}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{
                            title: "Form Users"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}
const screenOptions = {
    headerStyle: {
        backgroundColor: 'gray'
    },
    headerTinColor: '#fff',

}