import React from 'react';
import {Text, View} from 'react-native';

import styles from './style';
import params from '../../global/params';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Iniciando o Mines!</Text>
      <Text>
        Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>
    </View>
  );
}
