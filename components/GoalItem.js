import { StyleSheet, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: '#ddd' }}
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <Text style={styles.item}>🛒 {props.text}</Text>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  item: {
    color: 'black',
    padding: 3,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0,
  },
});
