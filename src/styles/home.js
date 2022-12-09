import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
    safeArea: {
        flex: 1,
    },

    container : {
        flex : 1,
        alignItems : 'center',
    },

    header_bar : {
        width : Dimensions.get('window').width,
        height : 80,
        alignItems : 'flex-start',
        paddingLeft : 20,
    },

    home_label : {
        width : 400,
        fontSize : 25,
        fontFamily : 'MuktaMahee-Regular',
        color : '#fff',
        textAlign : 'center',
        marginTop : 50,
        marginBottom : 30,
    },

    logo_appBar : {
        width : 180,
        height : 80,
    },

    background_image: {
        flex: 1,
        justifyContent: 'center'
      },

    countryAllButton : {
        borderColor : '#fff',
        borderWidth : 2,
        borderRadius : 5,
        width : 300,
        height : 50,
        marginBottom : 20,
        alignItems : 'center',
        justifyContent : 'center',
    },

    textAllCountry : {
        fontSize : 20,
        color : '#fff',
        fontFamily : 'MuktaMahee-Regular',
    },  

    countryBox : {
        flexDirection : 'row',
        width : Dimensions.get('window').width,
        height : 200,
        justifyContent : 'space-evenly'
    },

    countryButton : {
        borderColor : '#fff',
        borderWidth : 2,
        borderRadius : 5,
        width : 170,
        height : 170,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },

    imageCountry : {
        width : 130,
        height : 130,
    },

    textCountry : {
        fontSize : 20,
        color : '#fff',
        fontFamily : 'MuktaMahee-Regular',
    },
    
    labelCountry : {
        fontSize : 30,
        color : '#fff',
        fontFamily : 'MuktaMahee-Regular',
    },
    
    searchbar : {
        borderColor : '#fff',
        borderWidth : 2,
        borderRadius : 5,
        width : 300,
        marginTop : 10,
        paddingLeft : 10,
        color : '#fff',
        fontSize : 15,
        fontFamily : 'MuktaMahee-Regular',
    },

    countryNotFound : {
        fontSize : 25,
        color : '#fff',
        fontFamily : 'MuktaMahee-Regular',
        marginTop : 10
    },
    
});
