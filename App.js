import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((current) => {
      console.log(id);
      return current.filter((goal) => goal.id !== id);
    });
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
      </View>

      <GoalInput
        onCancel={endAddGoalHandler}
        onAddGoal={addGoalHandler}
        isModalVisible={modalIsVisible}
      />

      <View style={styles.goalsContainer}>
        <Text style={styles.title}>To Buy:</Text>
        <ScrollView>
          <View style={styles.items}>
            {courseGoals.map((item) => (
              <GoalItem
                key={item.id}
                text={item.text}
                onDelete={() => deleteGoalHandler(item.id)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#ddd',
    padding: 50,
    height: '100%',
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
  items: {
    gap: 10,
  },
});
