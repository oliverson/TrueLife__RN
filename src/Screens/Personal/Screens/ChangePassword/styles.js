import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: "100%",
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  mainTitle: {
    fontSize: 20,
    paddingVertical: 15,
    borderBottomColor: "#d9d9d9",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    color: "#999999",
  },
  inputArticle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    color: "black",
    fontSize: 15,
    marginVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
  },
  confirmBtn: {
    paddingVertical: 10,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#FA748F",
    marginTop: 15, 
    borderRadius: 8
  },
});
export default styles;
