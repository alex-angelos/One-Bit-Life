import React from 'react';
import { ScrollView , View, Text , Image } from 'react-native-gesture-handler';

export default function Start() {
  return (
    <View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <Image 
                source={require("../../assets/icons/logo3.png")}
            />
            <Text>Vamos transformar sua vida {"/n"} em jogo, buscando sempre
            {"/n"}</Text>
        </View>
        </ScrollView>
    </View>
  );
}