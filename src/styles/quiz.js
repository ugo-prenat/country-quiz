import { StyleSheet } from 'react-native';

const blue = '#006CEA';

export const styles = StyleSheet.create({
  pageContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  quizQuestionContainer: {
    justifyContent: 'flex-start'
  },
  questionWrapper: {
    marginTop: 50
  },
  button: {
    color: 'white',
    backgroundColor: blue,
    padding: 10,
    borderRadius: 5
  },
  questionNb: {
    textAlign: 'center'
  },
  buttonText: {
    color: 'white',
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
    fontSize: 20,
    marginBottom: 20
  },
  propositionBtn: {
    marginVertical: 10,
    alignSelf: 'center'
  },
  propositionBtnText: {
    color: 'white'
  },
  correctAnswer: {
    backgroundColor: 'green'
  },
  wrongAnswer: {
    backgroundColor: 'red'
  },
  hidedBottom: {
    position: 'absolute',
    bottom: 30,
    left: 0
  },
  hidedBottomBtn: {
    justifyContent: 'center',
    flexDirection: 'row'
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
    textAlign: 'center',
    marginBottom: 10
  },
  resultBtns: {
    flexDirection: 'row',
    marginTop: 30
  },
  replayBtn: {
    marginRight: 10,
    backgroundColor: 'white',
    borderColor: blue,
    borderWidth: 1
  },
  replayBtnText: {
    color: blue,
    fontWeight: 'normal'
  }
});
