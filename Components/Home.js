import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import useFetch from "../CustomHooks/useFetch";
import { Divider, List, Spinner } from '@ui-kitten/components';
import { Card, Text } from '@ui-kitten/components';

export default function Home({ navigation }) {
    // const [data, setData] = useState("Hello");
    //Custom hook for fetching data
    const [movies, pending, error] = useFetch("https://moviesapi-cm0p.onrender.com/movies");

    const renderItem = () => {
        return (
            <Card>
                <Text>
                    The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                    located in the Arabian Sea of the Indian Ocean.
                    It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                </Text>
            </Card>
        )
    }

    const data = [1,2,3,4,5,6,7,8,9,10];

    return (
        <View style={styles.container}>
            {pending && <Spinner />}
            {/* <Button title="Go to about" onPress={() => navigation.navigate('About')} /> */}
            {!pending && <List
                style={styles.container1}
                data={data}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        overflowY: scroll
    },
    container1:{
        maxHeight: '100%',
    }
});
