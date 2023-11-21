import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

type Props = {
  onCancel: () => void;
  onLevelSelected: (level: number) => void;
  isVisible: boolean;
};

function LevelSelection(props: Props) {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent>
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>
          <TouchableOpacity
            style={[styles.button, styles.bgEasy]}
            onPress={() => props.onLevelSelected(0.1)}>
            <Text style={styles.buttonLabel}>Fácil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgNormal]}
            onPress={() => props.onLevelSelected(0.2)}>
            <Text style={styles.buttonLabel}>Intermediário</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.bgHard]}
            onPress={() => props.onLevelSelected(0.3)}>
            <Text style={styles.buttonLabel}>Difícil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export {LevelSelection};
