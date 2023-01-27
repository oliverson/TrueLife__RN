import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  numberInputContainer: {
    flexDirection: "row",
    width: 0,
    height: 30,
    backgroundColor: "white",
    borderRadius: 6,
    overflow: "hidden",
  },
  button: {
    width: 30,
    height: "100%",
    backgroundColor: "#d9d9d9",
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    minWidth: 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    flex: 1,
  },
});
export default styles;
