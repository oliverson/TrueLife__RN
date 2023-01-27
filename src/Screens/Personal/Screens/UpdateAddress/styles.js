import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: "100%",
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  inputArticle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    color: "black",
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
  },
  buttonWrapper: {
    marginVertical: 15,
    paddingVertical: 8,
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FA748F",
    borderRadius: 8,
    alignSelf: "center",
  },
});
export default styles;
