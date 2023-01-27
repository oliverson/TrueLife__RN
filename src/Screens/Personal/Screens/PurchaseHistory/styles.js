import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: "100%",
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  itemWrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 5,
    paddingVertical: 10,
  },
  partWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  itemPrice: {
    fontSize: 18,
    color: "#FA748F",
    fontWeight: "bold",
  },
  itemText: {
    color: "#999999",
    fontSize: 14,
    marginVertical: 5,
  },
  viewText: {
    fontSize: 16,
    color: "#FA748F",
    textDecorationLine: "underline",
    textAlign: "center",
    alignSelf: "center",
  },
});
export default styles;
