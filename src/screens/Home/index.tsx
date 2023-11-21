/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';

import styles from './style';
import params from '../../global/params';
import MineField from '../../components/MineField';
import {
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
} from '../../global/functions';

export default class HomeScreen extends Component<
  {},
  {board: any; won: boolean; lost: boolean}
> {
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
    return {
      board: createMineBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
    };
  };

  onOpenField = (row: number, column: number) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);

    const lost = hadExplosion(board);
    if (lost) {
      showMines(board);
      Alert.alert('Perdeu', 'Fim de jogo!');
    }

    const won = wonGame(board);
    if (won) {
      Alert.alert('Parabéns', 'Você ganhou!');
    }

    this.setState({board, won, lost});
  };

  onSelectField = (row: number, column: number) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);

    const won = wonGame(board);
    if (won) {
      Alert.alert('Parabéns', 'Você ganhou!');
    }

    this.setState({board, won});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'black'}}>
          Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
        <MineField
          board={this.state.board}
          onOpenField={this.onOpenField}
          onSelectField={this.onSelectField}
        />
      </View>
    );
  }
}
