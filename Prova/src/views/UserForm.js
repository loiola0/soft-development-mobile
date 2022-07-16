import {Text } from 'native-base'
import React, { useContext, useState } from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'
import UsersContext from '../context/UserContext';

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const {state, dispatch} = useContext(UsersContext)
    return (
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Input name"
                value={user.name}
            />

            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Input email"
                value={user.email}
            />

            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Input image avatar"
                value={user.avatarUrl}
            />
            
            <Button
                title="Save"
                onPress={() => {
                    dispatch({
                        type:user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )

}

const style = StyleSheet.create({
    form: {
        padding: 12
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,

    }
})