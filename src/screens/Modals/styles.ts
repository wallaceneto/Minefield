import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    padding: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#555',
    paddingBottom: 30,
  },
  button: {
    marginTop: 10,
    padding: 5,
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  bgEasy: {
    backgroundColor: '#49B65D',
  },
  bgNormal: {
    backgroundColor: '#2765F7',
  },
  bgHard: {
    backgroundColor: '#F26337',
  },
});

export default styles;
