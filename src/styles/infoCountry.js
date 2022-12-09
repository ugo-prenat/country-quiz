import { StyleSheet } from 'react-native';

const blue = '#006CEA';

export const styles = StyleSheet.create({
  goBack: {
    borderColor: '#000000',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 5,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    alignSelf: 'center'
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
    marginVertical: 5,
    fontSize: 18
    //flexDirection: "row",
    //justifyContent: "space-evenly",
    //alignItems: "center",
    //backgroundColor: "red",
  },
  dataIcon: {
    width: 30
  },

  distance: {
    alignSelf: 'center',
    marginTop: 20
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
    backgroundColor: blue
  },
  favBtnText: {
    color: blue
  },
  deleteFavBtnText: {
    color: 'white'
  }
});