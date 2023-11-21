import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import Flag from '../Flag';

type Props = {
  flagsLeft: number;
  onNewGame: () => void;
};

export default function Header({flagsLeft, onNewGame}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <TouchableOpacity style={styles.flagButton} onPress={() => {}}>
          <Flag bigger />
        </TouchableOpacity>
        <Text style={styles.flagsLeft}>= {flagsLeft}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onNewGame}>
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}
