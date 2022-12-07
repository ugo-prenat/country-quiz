import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  safeArea: {
    flex: 1,
  },

  container : {
    flex : 1,
    alignItems : 'center',
  },

  background_image: {
    flex: 1,
    justifyContent: "center"
  },

  logo : {
    width : 130,
    height : 130,
    marginTop : 70,
  },

  label : {
    marginTop : 30,
    marginBottom : 30,
    fontSize : 30,
    color : '#ffff',
  },

  inputBox : {
    flexDirection : 'column',
    height : 100,
  },
  
  inputLabel : {
    fontSize : 20,
    color : '#ffff',
  },

  input : {
    borderColor : '#ffff',
    borderWidth : 1,
    backgroundColor : '#ffff',
    borderRadius : 10,
    width : 300,
    height : 40,
    marginTop : 5
  },

  submitButton : {
    borderColor : '#006CEA',
    backgroundColor : '#006CEA',
    color : '#ffff',
    width : 150,
    height : 50,
    justifyContent : 'center',
    alignItems: 'center',
    borderRadius : 10
  }

});
