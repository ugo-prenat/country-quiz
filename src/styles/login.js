import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },

  container: {
    flex: 1,
    alignItems: 'center'
  },

  background_image: {
    flex: 1,
    justifyContent: 'center'
  },

  logo: {
    width: 130,
    height: 130,
    marginTop: 70
  },

  label: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 30,
    color: '#ffff',
    fontFamily: 'MuktaMahee-Regular'
  },

  inputBox: {
    flexDirection: 'column',
    height: 100
  },

  inputLabel: {
    fontSize: 20,
    color: '#ffff',
    fontFamily: 'MuktaMahee-Regular'
  },

  errorInputLabel: {
    color: '#EE0000'
  },

  input: {
    borderColor: '#ffff',
    borderWidth: 1,
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: 300,
    height: 40,
    marginTop: 5,
    paddingLeft: 10,
    color: '#000'
  },
  pwdInput: {
    width: 250
  },

  errorInput: {
    borderColor: '#EE0000',
    color: '#EE0000',
    borderWidth: 2
  },

  submitButton: {
    borderColor: '#006CEA',
    backgroundColor: '#006CEA',
    color: '#ffff',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20
  },

  connexionText: {
    fontSize: 20,
    color: '#ffff',
    fontFamily: 'MuktaMahee-Regular'
  },

  connexion: {
    fontSize: 20,
    color: '#006CEA',
    fontFamily: 'MuktaMahee-Regular'
  },

  connexionBox: {
    flexDirection: 'row',
    marginTop: 20,
    fontFamily: 'MuktaMahee-Regular'
  },

  errorMsg: {
    color: '#EE0000',
    textAlign: 'center',
    width: 300
  },

  errorMsgGlobal: {
    color: '#EE0000',
    textAlign: 'center',
    width: 300,
    fontSize: 20
  },
  viewCardAllCountry: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 40,
    borderBottomWidth: 2,
    borderColor: '#A2A2A2',
    marginHorizontal: 20
  },
  textCardAllCountry: {
    display: 'row',
    alignHimSelf: 'right'
  },
  imageAllCountryFlags: {
    height: 70,
    width: 100
  },
  textAllCountryFlags: {
    paddingVertical: 20,
    fontWeights: '900',
    color: '#fff',
    fontFamily: 'MuktaMahee-Regular',
    fontSize: 20
  },
  emptyFavourites: {
    alignSelf: 'center',
    fontSize: 13,
    color: 'grey',
    marginTop: 50
  },

  logo_appBar: {
    width: 180,
    height: 80
  },
  header_bar: {
    width: Dimensions.get('window').width,
    height: 80,
    alignItems: 'flex-start',
    paddingLeft: 20
  },
  title: {
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: 'MuktaMahee-Regular',
    marginVertical: 40,
    fontWeight: '700'
  },
  subtitle: {
    marginHorizontal: 20,
    fontSize: 20,
    marginVertical: 20,
    fontWeight: '600'
  },
  scrollViewContainer: {
    margin: 15
  }
});
