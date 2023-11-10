import React from 'react';
import {View} from 'react-native';

import styles from './style';
import Field from '../../components/Field/Field';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={4} />
      <Field opened nearMines={6} />
    </View>
  );
}
