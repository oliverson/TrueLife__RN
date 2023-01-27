import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  yourCartWrapper: {
    height: "100%",
    flex: 1,
  },
  yourCartTitle: {
    fontSize: 22,
    marginVertical: 15,
    alignSelf: "center",
    justifyContent: "center",
  },
  yourCartMainWrapper: {
    flexDirection: "column",
  },
  cartItemWrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  checkboxWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    marginHorizontal: 8,
    height: 100,
    width: 100,
    aspectRatio: 1,
  },
  cartProductImage: {
    width: "100%",
    height: "100%",
  },
  itemDescWrapper: {
    flexDirection: "column",
    marginHorizontal: 5,
    justifyContent: "space-between",
    flex: 1,
    minWidth: 0,
    position: "relative",
  },
  itemNameText: {
    fontSize: 22,
  },
  itemPriceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fb7088",
  },
  deleteIcon: {
    position: "absolute",
    bottom: 2,
    right: 0,
  },
  cartFooterWrapper: {
    position: "relative",
    backgroundColor: "white",
    flexDirection: "row",
    borderTopColor: "#d9d9d9",
    borderTopWidth: 1,
    height: 55,
  },
  chooseAllWrapper: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  footerRightSideWrapper: {
    flexDirection: "row",
    minWidth: 0,
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonPurchase: {
    backgroundColor: "#fb7088",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
});
export default styles;
