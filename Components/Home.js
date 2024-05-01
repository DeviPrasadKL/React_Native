import { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import useFetch from "../CustomHooks/useFetch";
import { Divider, Layout, List, Spinner } from '@ui-kitten/components';
import { Card, Text } from '@ui-kitten/components';


export default function Home({ navigation }) {

    //Custom hook for fetching data
    const [movies, pending, error] = useFetch("https://moviesapi-cm0p.onrender.com/movies");

    const renderItem = ({ item }) => {
        return (
            <Card key={item._id} style={styles.card} onPress={() => navigation.navigate('Details', { movieId: item._id })}>
                <Image style={styles.poster} source={item.poster} resizeMode="contain" />
                <Text
                    style={styles.text}
                    category='h5'
                >
                    {item.movieName}
                </Text>
                <Text
                    style={styles.text}
                    category='s1'
                >
                    {item.hero}
                </Text>
            </Card>
        )
    }

    return (
        <View style={styles.container}>
            {pending && <Spinner />}
            {!pending &&
                <>
                    <Layout style={styles.button1}>
                        <Button title="Add Movie" onPress={() => navigation.navigate('Add')} />
                    </Layout>
                    <List
                        style={styles.container1}
                        data={movies}
                        ItemSeparatorComponent={Divider}
                        renderItem={renderItem}
                    />
                </>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        width: '100%',
    },
    card: {
        marginBottom: 3,
        borderRadius: 4,
        width: '100vw'
    },
    container1: {
        maxHeight: '100%',
    },
    text: {
        margin: 2,
    },
    poster: {
        height: undefined,
        width: '100%',
        aspectRatio: 1,
        alignItems: 'stretch',
        borderRadius: 10
    },
    button1: {
        margin: '1rem'
    }
});
