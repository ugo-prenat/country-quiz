import { StyleSheet } from 'react-native';

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
    marginBottom: 30,
    fontSize: 30,
    color: '#ffff'
  },

  inputBox: {
    flexDirection: 'column',
    height: 100
  },

  inputLabel: {
    fontSize: 20,
    color: '#ffff'
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
    borderRadius: 10
  },

  connexionText: {
    fontSize: 20,
    color: '#ffff'
  },

  connexion: {
    fontSize: 20,
    color: '#006CEA'
  },

  connexionBox: {
    flexDirection: 'row',
    marginTop: 20,
    fontFamily: 'MuktaMahee-Regular'
  },
  viewCardAllCountry: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 40,
    borderBottomWidth: 2,
    borderColor: '#D9D9D9'
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
    fontWeights: '900'
  }
});
