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
        <View style={styles.button}>
          <Button onPress={addGoalHandler} title="Add" color="#dbe1f4" />
        </View>
      </View>

      <View style={styles.goalsContainer}>
        <Text style={styles.title}>To Buy:</Text>
        {courseGoals.map((item) => (
          <Text style={styles.item} key={item}>
            🛒 {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#141414',
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
    backgroundColor: '#5169b9',
    borderRadius: 5,
  },
  textInput: {
    color: 'white',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8,
    width: '80%',
    marginRight: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  title: {
    color: '#5169b9',
    fontSize: 20,
    fontWeight: 800,
    paddingBottom: 10,
  },
  item: {
    color: 'white',
    padding: 3,
  },
});
