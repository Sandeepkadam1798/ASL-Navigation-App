import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  // Extract data passed from the Home screen
  const { data } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Data from Home Screen: {data}</Text>
    </View>
  );
};

export default DetailsScreen;
