import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'

import styles from './stylesComponents/styleFurniture'

export default function Furniture() {
    const [address, setAddress] = useState('Rua: monte Carmelo Nº 92 Conceição Osasco - SP Cep: 1234-567')
    const [removeTime, setRemoveTime] = useState('17:00 às 18:00 de segunda a sexta')
    const [decFurniture, setdecFurniture] = useState('Is simply dummy text of the printing and typesetting'
        + 'industry. Lorem Ipsum printing and typesetting industry typesetting simply')

    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

        // "../../assets/photosFurniture/imgArmario.jpg",
        // "../../assets/photosFurniture/imgSofa.jpg",
        // "../../assets/photosFurniture/imgGuardaRoupa.jpg",
        // "../../assets/photosFurniture/imgLavaRoupa.jpg",
        // "../../assets/photosFurniture/imgGeladeira.jpg"
    ])

    return (
        <View style={styles.containerFurnitures} >
            <View style={styles.containerScroll}>
                <ScrollView horizontal pagingEnabled >
                    {images.map(img => (
                        <Image key={img} source={{ uri: img }} style={{ width: 335, height: 310 }} />
                    ))}
                </ScrollView>

                <View style={styles.circleDiv}>
                    {images.map((img, i) => (
                        <View key={img} style={styles.whiteCircle} ></View>
                    ))}
                </View>
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

