import React, {Component} from 'react';
import {View, Alert} from 'react-native';

import styles from './style';
import params from '../../global/params';
import MineField from '../../components/MineField';
import Header from '../../components/Header';
import {
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from '../../global/functions';
import {LevelSelection} from '../Modals';

type homeProps = {
  board: any;
  won: boolean;
  lost: boolean;
  showLevelSelection: boolean;
};

export default class HomeScreen extends Component<{}, homeProps> {
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
      showLevelSelection: false,
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

  onLevelSelected = (level: number) => {
    params.dificultLevel = level;
    this.setState(this.createState());
  };

  render() {
    return (
      <View style={styles.container}>
        <LevelSelection
          isVisible={this.state.showLevelSelection}
          onCancel={() => this.setState({showLevelSelection: false})}
          onLevelSelected={this.onLevelSelected}
        />
        <Header
          flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({showLevelSelection: true})}
        />
        <MineField
          board={this.state.board}
          onOpenField={this.onOpenField}
          onSelectField={this.onSelectField}
        />
      </View>
    );
  }
}
