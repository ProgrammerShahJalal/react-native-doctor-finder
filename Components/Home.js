import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'

export default function Home() {

    return (
        <View>
            <Text> This is home </Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="You can type in me"
            />
            <Button
                onPress={() => {
                    alert("What's Up!");
                }}
                title="Press Me"
            />
        </View>
    )
}
