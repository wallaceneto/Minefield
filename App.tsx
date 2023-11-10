import React from 'react';
import {SafeAreaView} from 'react-native';

import styles from './src/global/style';
import HomeScreen from './src/screens/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.workspace}>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
