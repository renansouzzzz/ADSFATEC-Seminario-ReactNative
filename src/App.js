import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { Keyboard } from './components/Keyboard';

const number = 0;


function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>

        <View style={stylesText.containerView}>
          <TextInput style={stylesText.textInput} maxLength={12} keyboardType='numeric'>
            {number}
          </TextInput>
        </View>

        <View style={{ marginTop: 50 }}>
          <Keyboard />
        </View>

        <StatusBar />
      </View>
    </SafeAreaView>
  );
}

export default App;

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


