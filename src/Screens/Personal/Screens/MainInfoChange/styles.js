import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: "100%",
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  avatarChangeWrapper: {
    flexDirection: "column",
    backgroundColor: "#FA748F",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarWrapper: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 100,
    overflow: "hidden",
    marginVertical: 20,
    borderWidth: 1,
  },
  touchToChange: {
    alignSelf: "stretch",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
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
  buttonSave: {
    marginVertical: 15,
    paddingVertical: 8,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FA748F",
    borderRadius: 8,
    alignSelf: "center",
  },
});
export default styles;
