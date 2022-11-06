import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Details = ({ navigation, route }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Details Page</Text>
            <Text style={{ fontSize: 30 }}>Props Value - {route.params.email}</Text>
            
        </View>
    )
}

export default Details