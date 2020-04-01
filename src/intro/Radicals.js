import * as React from 'react';
import { View, Text } from 'react-native';

import styles from '../Styles';

function Radicals() {
    return (
        <View>
            <Text style = {styles.header}>What are Kanji Radicals?</Text>
            <Text style = {styles.text}>
                Radicals are the components of a kanji character. Every kanji will have at 
                least one radical, and these radicals lend to the meaning of the character.
                Recall from the previous example the kanji for electricity. 
            </Text>

            <Text style = {styles.highlight}>電</Text>

            <Text style = {styles.text}>
                This single kanji is made up of three other radicals: {"\n"}
                雨 (rain), 田 (rice paddy), 乚 (umbrella). 
            </Text>

            <Text style = {styles.header}>The 7 Radical Positions</Text>
            <Text style = {styles.text}>
                All radical are categorized based on their position within a kanji. There
                are seven positions in total and the radical will always be in said position. 
                {"\n"}
                {'\n'}
                The positions are as follows: 
            </Text>

            <Text style = {styles.text}>
                へん 　　- Left Side {"\n"}
                つくり 　- Right Side {"\n"}
                かんむり - On the Top {"\n"}
                あし 　　- On the Bottom{"\n"}
                かまえ 　- Enclosing {"\n"}
                たれ 　　- Hanging{"\n"}
                にょう 　- Wrap Around {"\n"}
            </Text>

            <Text style = {styles.header}>How many Radicals do I need to know?</Text>
            <Text style = {styles.text}>
                There are 214 radicals but not all of them are in use in modern Japanese.
                However, it is important to know the meaning of the radicals and to be 
                able to recognize them within a kanji.
            </Text>

        </View>
    );
}

export default Radicals;