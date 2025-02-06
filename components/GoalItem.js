import { StyleSheet, Text } from 'react-native';

function GoalItem(props) {
  return <Text style={styles.item}>🛒 {props.text}</Text>;
}

export default GoalItem;

const styles = StyleSheet.create({
  item: {
    color: 'white',
    padding: 3,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
});
