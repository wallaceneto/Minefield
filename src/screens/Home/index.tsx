import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './style';
import params from '../../global/params';
import {createMineBoard} from '../../global/functions';
import MineField from '../../components/MineField';

export default class HomeScreen extends Component<{}, {board: any}> {
  constructor(props: any) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.dificultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {board: createMineBoard(rows, cols, this.minesAmount())};
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <MineField board={this.state.board} />
      </View>
    );
  }
}
