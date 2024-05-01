import { Button, Card, Spinner, Text } from '@ui-kitten/components'
import React from 'react'
import { Alert, Image, Pressable, StyleSheet, View } from 'react-native'
import useFetch from '../CustomHooks/useFetch';

export default function MovieDetails({ navigation, route }) {

    const id = route.params.movieId;

    //Custom hook for fetching data
    const [movies, pending, error] = useFetch("https://moviesapi-cm0p.onrender.com/movie/" + id);

    const handleDelete = () => {
        console.log("Alert");
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

        
        fetch("https://moviesapi-cm0p.onrender.com/movie/" + id, { method: "DELETE" })
            .then(() => {
                // alert("Movie Deleted Succesfully");
                // navigation.goBack()
                navigation.push("Home");
            })
    }

    return (
        <View style={styles.container}>
            {pending && <Spinner />}
            {!pending && <Card style={styles.card}>
                <Image style={styles.poster} source={movies.poster} resizeMode="contain" />
                <Text>Movie Name = {movies.movieName}</Text>
                <Text>Hero = {movies.hero}</Text>
                <Text>Gener = {movies.gener}</Text>
                <Text>Rating = {movies.rating}</Text>
                <Pressable style={styles.container1}>
                    <Button onPress={() => navigation.navigate('Update', { movieId: movies._id })} > Update </Button>
                    <Button onPress={handleDelete}> Delete </Button>
                </Pressable>
            </Card>}
        </View>
    )
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
        height: '90vh',
        width: '100vw'
    },
    container1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20
    },
    text: {
        margin: 2,
    },
    poster: {
        height: undefined,
        width: '100%',
        aspectRatio: 1,
        alignItems: 'stretch',
        borderRadius: 10,
        marginBottom: 5
    },
});