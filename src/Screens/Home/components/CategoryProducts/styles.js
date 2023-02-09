import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    width: "100%",
    padding: 10,
    paddingBottom: 0,
    backgroundColor: 'white',
    marginBottom: 10
  },
  cateProductHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  headerTitle: {
    flex: 0.7,
  },
  headerTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FA748F",
  },
  headerViewMore: {
    flex: 0.3,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  carouselWrapper: {
    height: 200,
    marginBottom: 20
  },
  carouselItem: {
    height: 200,
    aspectRatio: 1.3,
    marginHorizontal: 12,
    display: 'flex',
    flexDirection: 'column'
  },
  itemContent: {
    width: '100%',
    flex: 1,
    flexDirection: 'column'
  },
  itemName: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FA748F',
    textAlign: 'center'
  }
});
export default styles;
