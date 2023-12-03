import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [inputText, setInputText] = useState('');

  const handleNavigate = () => {
    // Pass data to the Details screen
    navigation.navigate('Details', { data: inputText });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        placeholder="Enter data"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Go to Details" onPress={handleNavigate} />
    </View>
  );
};

export default HomeScreen;
