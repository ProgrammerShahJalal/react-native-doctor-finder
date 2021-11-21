import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { Link } from 'react-router-native';
import Doctor from './Doctor';

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://polar-falls-67924.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    const back = StyleSheet.create({
        GoToHome: {
            fontSize: 20,
            textAlign: 'center'
        }
    })

    return (
        <View>
            <Link to="/"><Text style={back.GoToHome}>Go To Home</Text></Link>
            <Text> This is doctor: {doctors.length} </Text>
            <ScrollView>
                {
                    doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                }
            </ScrollView>
        </View>
    )
}
