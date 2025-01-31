import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your fourse goal!" />
        <Button style={styles.button} title="Add" />
      </View>
      <View>
        <Text>List of goals..</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'white',
    padding: 50,
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {},
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8,
    width: '80%',
    marginRight: 8,
  },
});
