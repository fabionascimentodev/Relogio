import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Relogio from './components/timer';


export default function App() {
  return (
  <>
    <View style={styles.container}>
      <Relogio></Relogio>
    </View>
 </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
