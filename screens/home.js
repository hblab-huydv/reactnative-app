import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate('ReviewDetail');
  }

  const [reviews, setReviews] = useState([
    {title: 'Zelda', rating: 5, body: 'lorem ipsum 1', key: '1'},
    {title: 'Gotta', rating: 4, body: 'lorem ipsum 2', key: '2'},
    {title: 'Alpha', rating: 3, body: 'lorem ipsum 3', key: '3'},
    {title: 'Belta', rating: 4, body: 'lorem ipsum 4', key: '4'},
  ]);

  return (
    <View style={globalStyles.container}>
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail', item)}>
              <Text styles={globalStyles.titleText}>{ item.title }</Text>
            </TouchableOpacity>
          )}
        />
    </View>
  )
}

const styles = StyleSheet.create({

});
