
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';
import { createContext, useState } from 'react';
import Keyboard from './components/Keyboard';

export const contextGeneral = createContext(null)

export default function App() {

  const [firstValue, setFirst] = useState([0]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <contextGeneral.Provider value={{ firstValue, setFirst }}>
          <View style={stylesText.containerView}>
            <TextInput style={stylesText.textInput} maxLength={12} showSoftInputOnFocus={false}>
              <Text>{firstValue ?? 0}</Text>
            </TextInput>
          </View>

          <View >
            <Keyboard />
          </View>

        </contextGeneral.Provider>
        <StatusBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50,
    fontSize: 45
  },
})

const stylesText = StyleSheet.create({
  containerView: {
    height: 200,
    alignSelf: 'flex-end',
    marginEnd: 10
  },

  textInput: {

    flex: 2,
    fontSize: 45,
    marginTop: 80,
  }
})


