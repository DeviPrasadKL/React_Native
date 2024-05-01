import { Button, Input, Text } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

export default function AddMovie({navigation}) {

    let [movieName, setMovieName] = useState("");
    let [hero, setHero] = useState("");
    let [gener, setGener] = useState("");
    let [rating, setRating] = useState("");
    let [poster, setPoster] = useState("");

    let handleAddMovie = (e) => {
        e.preventDefault();
        let newMovie = { movieName, hero, gener, rating, poster }
    
        fetch("https://moviesapi-cm0p.onrender.com/add-movie", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMovie)
        })
          .then(() => {
            // alert("new movie succesfully added");
            navigation.push("Home");
          })
      }

    return (
        <View style={styles.container}>
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
                onPress={handleAddMovie}
            >
                Add Movie
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: "1rem",
        padding: '2rem'
    },
});