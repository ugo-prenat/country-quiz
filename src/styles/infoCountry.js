import { Dimensions, StyleSheet } from 'react-native';

const blue = '#006CEA';

export const styles = StyleSheet.create({
  
  safeArea : {
    flex : 1
  },

  background_image: {
    flex: 1,
    justifyContent: 'center'
  },

  header_bar : {
    width : Dimensions.get('window').width,
    height : 80,
    alignItems : 'flex-start',
    paddingLeft : 20,
},

  containerCountry : {
    flex : 1,
    alignItems : 'center',
  },
  
  logo_appBar : {
    width : 180,
    height : 80,
  },

  flag : {
    width: 250,
    height: 250,
  },

  title : {
    fontSize : 30,
    fontFamily : 'MuktaMahee-Regular',
    color : '#fff',
  },  
  
  container: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20
  },
  col: {
    flexDirection: 'column',
    width: '45%',
    justifyContent: 'center'
  },

  data: {
    flexDirection : 'row',
    alignItems : 'center',
    marginVertical: 5,
    fontSize: 18
  },
  
  dataIcon: {
    width: 30,
  },

  textData : {
    color : '#fff',
    fontSize : 18,
    fontFamily : 'MuktaMahee-Regular',
  },  

  distance: {
    alignSelf: 'center',
    marginTop: 20,
    color : '#fff',
    fontFamily : 'MuktaMahee-Regular',
    fontSize : 20
  },
  favBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  favBtn: {
    borderColor: blue,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  deleteFavBtn: {
    backgroundColor: blue,
  },
  favBtnText: {
    color: blue,
    fontFamily : 'MuktaMahee-Regular',
  },
  deleteFavBtnText: {
    color: 'white'
  }
});
