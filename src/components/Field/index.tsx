import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';

import styles from './styles';
import Mine from '../Mine';
import Flag from '../Flag';

type Props = {
  mined?: boolean;
  opened?: boolean;
  nearMines?: number;
  exploded?: boolean;
  flagged?: boolean;
  onOpen?: () => void;
  onSelect?: () => void;
};

export default function Field(props: Props) {
  const styleField: Array<any> = [styles.field];

  if (props.opened) {
    styleField.push(styles.opened);
  }
  if (props.exploded) {
    styleField.push(styles.exploded);
  }
  if (props.flagged) {
    styleField.push(styles.flaged, styles.regular);
  }
  if (styleField.length === 1) {
    styleField.push(styles.regular);
  }

  if (!props.nearMines) {
    props.nearMines = 0;
  }
  let color;
  if (props.nearMines > 0) {
    if (props.nearMines === 1) {
      color = '#2A28D7';
    } else if (props.nearMines === 2) {
      color = '#2B520F';
    } else if (props.nearMines > 2 && props.nearMines < 6) {
      color = '#F9060A';
    } else {
      color = '#F221A9';
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={props.onOpen}
      onLongPress={props.onSelect}>
      <View style={styleField}>
        {!props.mined && props.opened && props.nearMines > 0 ? (
          <Text style={[styles.label, {color: color}]}>{props.nearMines}</Text>
        ) : (
          false
        )}
        {props.mined && props.opened ? <Mine /> : false}
        {props.flagged && !props.opened ? <Flag /> : false}
      </View>
    </TouchableWithoutFeedback>
  );
}
