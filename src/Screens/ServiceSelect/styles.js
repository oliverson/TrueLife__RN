import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: "100%",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fef4f3",
  },
  pageTitle: {
    fontSize: 22, 
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    marginHorizontal: '10%',
    textAlign: 'center'
  },
  productItemWrapper: {
    flexDirection: 'row',
    padding: 8,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginBottom: 10
  },
  imageWrapper: {
    marginHorizontal: 8,
    height: 100,
    aspectRatio: 1,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productItemDescWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignSelf: "stretch",
    flex: 1,
    paddingHorizontal: 15
  },
  checkBoxWrapper: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  saveButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },
  saveButton: {
    backgroundColor: '#FA748F',
    borderRadius: 8,
    paddingVertical: 10,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  saveButtonText: {
    color: 'white',
    fontSize: 17
  }
});
export default styles;
