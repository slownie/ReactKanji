import * as React from 'react';
import { View, Text } from 'react-native';

import styles from '../Styles';


function Joyo1() {
    return (
        <View style = {{ flex: 1}}>
            { /*Oh my god this is gross */}
            <Text style = {styles.header}> 一</Text>
            
            <Text style = {styles.text}> <Text style = {styles.bold}>Onyomi:</Text> Ichi, Itsu</Text>
            <Text style = {styles.text}> <Text style = {styles.bold}>Kunyomi:</Text> Hito, Hitotsu</Text>
            <Text style = {styles.text}> <Text style = {styles.bold}>Strokes:</Text> 1</Text>
            <Text style = {styles.text}> <Text style = {styles.bold}>Meaning:</Text> One</Text>

            <Text style = {styles.header}> ニ</Text>
            
            <Text style = {styles.text}> <Text style = {styles.bold}>Onyomi:</Text> Ni</Text>
            <Text style = {styles.text}> <Text style = {styles.bold}>Kunyomi:</Text> Futa, Futatsu</Text>
            <Text style = {styles.text}> <Text style = {styles.bold}>Strokes:</Text> 2</Text>
            <Text style = {styles.text}> <Text style = {styles.bold}>Meaning:</Text> Two</Text>

            <Text style = {styles.header}> 三</Text>
            
            <Text style = {styles.text}> <Text style = {styles.bold}>Onyomi:</Text> San</Text>
            <Text style = {styles.text}> <Text style = {styles.bold}>Kunyomi:</Text> Mi, Mitsu</Text>
            <Text style = {styles.text}> <Text style = {styles.bold}>Strokes:</Text> 3</Text>
            <Text style = {styles.text}> <Text style = {styles.bold}>Meaning:</Text> Three</Text>

        </View>
    );
}

export default Joyo1;