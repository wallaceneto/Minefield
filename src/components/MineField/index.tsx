/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

import styles from './styles';
import Field from '../Field';

export default function MineField(props: any) {
  const rows = props.board.map((row: any, r: number) => {
    const columns = row.map((field: any, c: number) => {
      return (
        <Field {...field} key={c} onOpen={() => props.onOpenField(r, c)} />
      );
    });
    return (
      <View key={r} style={{flexDirection: 'row'}}>
        {columns}
      </View>
    );
  });

  return <View style={styles.container}>{rows}</View>;
}
