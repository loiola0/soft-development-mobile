import React, { useContext } from 'react'
import { Alert, FlatList, Text, View } from 'react-native';
import { Button, ListItem, Icon, Avatar } from 'react-native-elements';
import UsersContext from '../context/UserContext';

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function getUserItem({ item: user }) {
        return (

            <ListItem.Swipeable onPress={() => props.navigation.navigate('UserForm', user)}
                leftContent={
                    <Button
                        title="Edit"
                        icon={{ name: 'info', color: 'white' }}
                        buttonStyle={{ minHeight: '100%' }}
                        onPress={() => props.navigation.navigate('UserForm', user)}
                    />
                }
                rightContent={
                    <Button
                        title="Delete"
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                        onPress={() =>
                            Alert.alert('Delete User', 'Do you want to delete the user?', [
                                {
                                    text: 'Sim',
                                    onPress() {
                                        dispatch({
                                            type: 'deleteUser',
                                            payload: user,
                                        })
                                    }
                                },
                                {
                                    text: 'Não'
                                }
                            ])
                        }
                    />
                }
            >
                <Icon name='arrow-right' />
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Icon name="arrow-left" />
            </ListItem.Swipeable>

        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}
