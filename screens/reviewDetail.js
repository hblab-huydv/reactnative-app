import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ReviewDetail() {
    return (
        <View style={styles.container}>
            <Text>ReviewDetail Screen</Text>
        </View>
    )
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
