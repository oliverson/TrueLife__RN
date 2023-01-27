import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  numberInputContainer: {
    flexDirection: "row",
    width: 0,
    height: 25,
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#d9d9d9",
  },
  buttonMinus: {
    width: 25,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#d9d9d9",
  },
  buttonPlus: {
    width: 25,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#d9d9d9",
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
