import React from 'react';
import {View} from 'react-native';

import styles from './styles';

type Props = {
  bigger?: boolean;
};

export default function Flag({bigger}: Props) {
  return (
    <View style={styles.container}>
      <View style={[styles.flagpole, bigger ? styles.flagpoleBigger : null]} />
      <View style={[styles.flag, bigger ? styles.flagBigger : null]} />
      <View style={[styles.base1, bigger ? styles.base1Bigger : null]} />
      <View style={[styles.base2, bigger ? styles.base2Bigger : null]} />
    </View>
  );
}
