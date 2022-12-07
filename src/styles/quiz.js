import { StyleSheet } from 'react-native';

const blue = '#006CEA';

export const styles = StyleSheet.create({
  pageContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  button: {
    color: 'white',
    backgroundColor: blue,
    padding: 10,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 15
  },
  questionContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 170,
    height: 170,
    resizeMode: 'contain'
  },
  question: {
    fontSize: 20
  },
  propositionBtn: {
    marginVertical: 10,
    alignSelf: 'center'
  },
  propositionBtnText: {
    color: 'white'
  },
  didYouKnowContainer: {
    marginTop: 20,
    padding: 20,
    alignItems: 'center'
  },
  didYouKnow: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  didYouKnowAnecdote: {
    textAlign: 'center'
  }
});
