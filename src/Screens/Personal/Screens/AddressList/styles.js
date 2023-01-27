import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: "100%",
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  addressWrapper: {
    backgroundColor: "#FAFDFF",
    flexDirection: "row",
    marginVertical: 10,
  },
  addressDesc: {
    color: "#999999",
  },
  addAddressButton: {
    backgroundColor: "#FA748F",
    paddingVertical: 8,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 8,
    marginTop: 5
  },
});
export default styles;
