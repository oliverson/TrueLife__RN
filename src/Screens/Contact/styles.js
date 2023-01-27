import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: "100%",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
  },
  contactTitle: {
    fontSize: 22,
    paddingBottom: 8,
    borderBottomColor: "#d9d9d9",
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlign: "center",
    marginHorizontal: "10%",
  },
  sendUsTitle: {
    fontSize: 18,
  },
  inputStyle: {
    color: "black",
    fontSize: 17,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    backgroundColor: "white",
    borderRadius: 8,
  },
  textAreaStyle: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    backgroundColor: "white",
    borderRadius: 8,
    color: "black",
    fontSize: 17,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  buttonStyle: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FA748F",
    paddingVertical: 10,
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 8
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
  }
});
export default styles;
