import * as React from 'react';
import { View, Text } from 'react-native';

import styles from '../Styles';

function Kanji() {
    return (
        <View style = {{ flex: 1}}>
            <Text style = {styles.header} allowFontScaling = {false}>What are Kanji?</Text>
            <Text style = {styles.text} allowFontScaling = {false}>
                Arguably the hardest part of learning Japanese, Kanji are Chinese 
                characters that have been adapted into the Japanese language. 
                This means that every character uses the phonetic sounds found
                in Hiragana and Katakana.
                {'\n'}
                {'\n'}
                Kanji are ideograms, characters that have their own meaning. {'\n'}
                They can also be combined together to create a new word. 
                {'\n'}
                {'\n'}
                For example, 雨 (rain), 田 (rice paddy), 乚 (umbrella) create 電, 
                which means electricity. These components of kanji are called 'Radicals' and will
                be discussed in the next section.
            </Text>

            <Text style = {styles.header} allowFontScaling = {false}>How many Kanji are there?</Text>
            <Text style = {styles.text} allowFontScaling = {false}>
                Most estimate that there are between 50,000 and 85,000 kanji.
                This is because there is no definitive count of all kanji in existence. 
                Thankfully, you will not need to know every single kanji character to be
                fluent in Japanese. 
                {'\n'}
                {'\n'}
                Only around 2,136 of these kanji are used in daily conversations and are referred to as 
                'Jōyō Kanji'. 
                {'\n'}
                {'\n'}
                These characters are categorized into elementary school grades 
                ranging from 1 to 6, while also having a secondary school category.
            </Text>

            <Text style = {styles.header} allowFontScaling = {false}>Onyomi and Kunyomi</Text>
            <Text style = {styles.text} allowFontScaling = {false}>
                Due to how kanji was adapted into Japanese, most kanji have two 
                readings referred to as Onyomi and Kunyomi.
                {'\n'}
                {'\n'}
                Onyomi is the Chinese pronunciation of the character. {'\n'}
                Kunyomi is the Japanese pronunciation of the character.
            </Text>
        </View>
    );
}

export default Kanji;