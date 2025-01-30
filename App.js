import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{ margin: 16, borderWidth: 2, borderColor: 'red', padding: 15 }}
      >
        Test
      </Text>
      <Text style={styles.dumText}>Test</Text>
      <StatusBar style="auto" />
      <Button title="Tap me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#183',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dumText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    padding: 15,
  },
});
