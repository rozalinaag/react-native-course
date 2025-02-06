import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const images = {
    1: require('../assets/images/cat1.jpg'),
    2: require('../assets/images/cat2.jpg'),
    3: require('../assets/images/cat3.jpg'),
    4: require('../assets/images/cat4.jpg'),
    5: require('../assets/images/cat5.jpg'),
    6: require('../assets/images/cat6.jpg'),
    7: require('../assets/images/cat7.jpg'),
    8: require('../assets/images/cat8.jpg'),
    9: require('../assets/images/cat9.jpg'),
  };

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    return images[randomIndex];
  };

  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal
      style={styles.modal}
      visible={props.isModalVisible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={getRandomImage()} />
        <TextInput
          style={styles.textInput}
          placeholder="Input your grocery!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add" color="#dbe1f4" />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" color="#dbe1f4" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  modal: {},
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  image: {
    width: 220,
    height: 220,
    margin: 20,
  },
  button: {
    backgroundColor: '#5169b9',
    borderRadius: 5,
    width: '30%',
    marginHorizontal: 8,
  },
  textInput: {
    color: 'black',
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8,
    width: '80%',
    marginRight: 8,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
});
