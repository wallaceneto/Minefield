import React from 'react';
import {View} from 'react-native';

import styles from './style';
import Field from '../../components/Field';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field mined />
      <Field mined opened />
      <Field mined exploded opened />
      <Field flagged />
      <Field flagged opened />
    </View>
  );
}
