import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((prev) => [...prev, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.goalsContainer}>
        <GoalInput onAddGoal={addGoalHandler} />

        <Text style={styles.title}>To Buy:</Text>
        <ScrollView>
          <View style={styles.items}>
            {courseGoals.map((item, index) => (
              <GoalItem key={index} text={item} />
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
    backgroundColor: '#141414',
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
