import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Animated, Image } from 'react-native'

import styles from './stylesComponents/styleFurniture'

export default function Furniture() {
    const [address, setAddress ] = useState('Rua: monte Carmelo Nº 92 Conceição Osasco - SP Cep: 1234-567')
    const [removeTime, setRemoveTime ] = useState('17:00 às 18:00 de segunda a sexta')
    const [decFurniture, setdecFurniture ] = useState('Is simply dummy text of the printing and typesetting'
         + 'industry. Lorem Ipsum printing and typesetting industry typesetting simply')

    return (
        <View style={styles.containerFurnitures} >
            <View style={styles.photoCarousel} >
                <Image style={styles.image} source={require('../../assets/imgArmario.jpg')} />
            </View>

            <View style={styles.containerDescFurniture}>
                <Text style={styles.nameFurniture}>Nome do Movél</Text>
                <Text style={styles.decFurniture} >{decFurniture}</Text>
                <Text style={styles.addressFurniture} >Endereço:
                    <Text style={{ fontWeight: 'normal' }} > {address}</Text>
                </Text>
                <Text style={styles.removeTime}>Retirada:
                    <Text style={{ fontWeight: 'normal' }} > {removeTime}</Text>
                </Text>
            </View>
        </View>
    )
}

