import { StyleSheet } from 'react-native';

const blue = '#006CEA';

export const styles = StyleSheet.create({
  pageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  startScreenContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontFamily: 'MuktaMahee-SemiBold',
    textAlign: 'center'
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
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    fontSize: 25
  },
  questionNb: {
    textAlign: 'center',
    fontFamily: 'MuktaMahee-Regular'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'MuktaMahee-SemiBold'
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
    marginBottom: 20,
    fontFamily: 'MuktaMahee-SemiBold'
  },
  propositionBtn: {
    marginVertical: 10,
    alignSelf: 'center'
  },
  propositionBtnText: {
    color: 'white',
    fontFamily: 'MuktaMahee-SemiBold'
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
    marginBottom: 5,
    fontFamily: 'MuktaMahee-Regular',
    fontSize: 15
  },
  didYouKnowAnecdote: {
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'MuktaMahee-Regular',
    fontSize: 15,
    lineHeight: 20
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
  },
  quizResultText: {
    fontFamily: 'MuktaMahee-SemiBold',
    fontSize: 17,
    lineHeight: 22
  },
  historicContainer: {
    opacity: 0.6
  },
  historicResult: {
    textAlign: 'center'
  },
  historicTitle: {
    marginBottom: 10
  }
});
