import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import Mine from '../Mine';
import Flag from '../Flag';

type Props = {
  mined?: boolean;
  opened?: boolean;
  nearMines?: number;
  exploded?: boolean;
  flagged?: boolean;
};

export default function Field({
  mined,
  opened,
  nearMines,
  exploded,
  flagged,
}: Props) {
  const styleField: Array<any> = [styles.field];

  if (opened) {
    styleField.push(styles.opened);
  }
  if (exploded) {
    styleField.push(styles.exploded);
  }
  if (flagged) {
    styleField.push(styles.flaged, styles.regular);
  }
  if (styleField.length === 1) {
    styleField.push(styles.regular);
  }

  if (!nearMines) {
    nearMines = 0;
  }
  let color;
  if (nearMines > 0) {
    if (nearMines === 1) {
      color = '#2A28D7';
    } else if (nearMines === 2) {
      color = '#2B520F';
    } else if (nearMines > 2 && nearMines < 6) {
      color = '#F9060A';
    } else {
      color = '#F221A9';
    }
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 ? (
        <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
      ) : (
        false
      )}
      {mined && opened ? <Mine /> : false}
      {flagged && !opened ? <Flag /> : false}
    </View>
  );
}
