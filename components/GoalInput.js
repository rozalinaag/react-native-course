import { StyleSheet, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Input your grocery!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.button}>
        <Button onPress={addGoalHandler} title="Add" color="#dbe1f4" />
      </View>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
