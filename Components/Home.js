import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Home({navigation }) {
    const [data, setData] = useState("Hello");
    return (
        <View>
            <Text style={{ color: 'white' }}>From home </Text>
            <TextInput style={styles.inputTag} value={data} onChange={(e) => { setData(e.target.value) }} />

            <Button title="Go to about"  onPress={() => navigation.navigate('About')} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputTag: {
        backgroundColor: 'grey',
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        paddingLeft: 4
    },
});
