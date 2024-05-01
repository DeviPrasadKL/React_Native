import { Button, Input, Spinner, Text } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

export default function Update({ navigation, route }) {
    const id = route.params.movieId;

    let [movieName, setMovieName] = useState("");
    let [hero, setHero] = useState("");
    let [gener, setGener] = useState("");
    let [rating, setRating] = useState("");
    let [poster, setPoster] = useState("");
    let [pending, setPending] = useState(true);

    useEffect(() => {
        fetch("https://moviesapi-cm0p.onrender.com/movie/" + id)
            .then((res) => {
                if (res.ok === false) {
                    throw Error("Searching data not found in this API")
                }
                return res.json()
            })
            .then((data) => {
                setMovieName(data.movieName);
                setHero(data.hero);
                setGener(data.gener);
                setRating(data.rating);
                setPoster(data.poster);
                setPending(false);
            })
    }, [id]);

    //Update Movie
    let handleUpdateMovie = (e) => {
        e.preventDefault();
        let updateMovie = { movieName, hero, gener, rating, poster };

        fetch("https://moviesapi-cm0p.onrender.com/movie/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateMovie),
        }).then(() => {
            navigation.push("Home");
        });
    };

    return (
        <>
            {pending && <View style={styles.mainContainer}>
                <Spinner />
            </View>}
            {!pending && <View style={styles.container}>
                <Text category='s2' >Movie Name</Text>
                <Input
                    placeholder='Place your Text'
                    value={movieName}
                    name="Movie Name"
                    onChangeText={nextValue => setMovieName(nextValue)}
                />
                <Text category='s2' >Hero</Text>
                <Input
                    placeholder='Place your Text'
                    value={hero}
                    name="Movie hero"
                    onChangeText={nextValue => setHero(nextValue)}
                />
                <Text category='s2' >Gener</Text>
                <Input
                    placeholder='Place your Text'
                    value={gener}
                    name="Movie gener"
                    onChangeText={nextValue => setGener(nextValue)}
                />
                <Text category='s2' >Poster</Text>
                <Input
                    placeholder='Place your Text'
                    value={poster}
                    name="Movie Poster"
                    onChangeText={nextValue => setPoster(nextValue)}
                />
                <Text category='s2' >Rating</Text>
                <Input
                    placeholder='Place your Text'
                    value={rating}
                    name="Movie rating"
                    onChangeText={nextValue => setRating(nextValue)}
                />
                <Button
                    appearance='outline'
                    status='success'
                    onPress={handleUpdateMovie}
                >
                    Update
                </Button>
            </View>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: "1rem",
        padding: '2rem'
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        width: '100%',
    }
});