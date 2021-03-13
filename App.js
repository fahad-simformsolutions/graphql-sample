import React, {useState} from 'react';
import { LogBox, Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import CenterSpinner from './src/screens/components/Util/CenterSpinner';

function App() {
  const [isLoadingComplete, setLoadingState] = useState(true);

  LogBox.ignoreAllLogs(true);

  if (!isLoadingComplete) return <CenterSpinner />;

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;
