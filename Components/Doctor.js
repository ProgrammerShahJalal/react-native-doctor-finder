import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

export default function Doctor({ doctor }) {
    const { name, email, image } = doctor;

    const styles = StyleSheet.create({
        doctorName: {
            fontSize: 25,
            textAlign: 'center'
        },
        doctorEmail: {
            textAlign: 'center'
        }
    })

    return (
        <View>
            <Image
                source={{
                    uri: `data:image/jpeg;base64,${image}`,
                }}
                style={{ width: 200, height: 200 }}
            />

            <Text style={styles.doctorName}> {name} </Text>
            <Text style={styles.doctorEmail}> {email} </Text>
        </View>
    )
}
