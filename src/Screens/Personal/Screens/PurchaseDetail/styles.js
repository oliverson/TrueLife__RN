import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: "100%",
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  productItemWrapper: {
    width: "45%",
    flexDirection: "column",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "white",
    paddingBottom: 10,
  },
  productImageWrapper: {
    width: "100%",
    aspectRatio: 1 / 1.2,
  },
  productImage: {
    width: "100%",
    aspectRatio: 1 / 1.2,
  },
  productItemText: {
    textTransform: "uppercase",
    alignSelf: "stretch",
  },
  productItemPrice: {
    fontSize: 16,
    color: "#FA748F",
    marginTop: 5,
  },
});
export default styles;
