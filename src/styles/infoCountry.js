import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  goBack: {
    borderColor: "#000000",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 5,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    alignSelf: "center",
  },

  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    width: "100%",
  },
  col: {
    flexDirection: "column",
    width: "45%",
    justifyContent: "center",
  },

  data: {
    marginVertical: 5,
    fontSize: 18,
    //flexDirection: "row",
    //justifyContent: "space-evenly",
    //alignItems: "center",
    //backgroundColor: "red",
  },
  dataIcon: {
    width: 30,
  },

  distance: {
    alignSelf: "center",
  },
});
