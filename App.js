import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((prev) => [...prev, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your fourse goal!"
          onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandler} style={styles.button} title="Add" />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((item) => (
          <Text>{item}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 50,
    height: '100%',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  button: {
    backgroundColor: 'red',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8,
    width: '80%',
    marginRight: 8,
  },
  goalsContainer: {
    flex: 4,
  },
});
