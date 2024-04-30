import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

export default function About() {
  const [counter, setCounter] = React.useState(0);

  return (
    <View>
      <Layout
        style={styles.container}
        level='1'
      >

        <Button onPress={() => setCounter(counter + 1)}>
          BUTTON
        </Button>

        <Text style={styles.text}>
          {`Pressed ${counter} times`}
        </Text>

      </Layout>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 8,
  },
});