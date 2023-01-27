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
  bookingArticle: {
    backgroundColor: "white",
    marginVertical: 5,
  },
  addressWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#FAFDFF",
    flexDirection: "row",
  },
  productItemWrapper: {
    flexDirection: "row",
    marginVertical: 5,
    padding: 12,
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
  },
  addressTitle: {
    fontSize: 18,
    marginLeft: 15,
    marginVertical: 8,
  },
  addressDesc: {
    color: "#999999",
  },

  bookingFooterWrapper: {
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
  footerLeftSideWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  footerRightSideWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonPurchase: {
    backgroundColor: "#fb7088",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 35,
  },
  paymentMethodOption: {
    borderWidth: 1,
    marginVertical: 8,
    borderColor: "#d9d9d9",
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInputWrapper: {
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    flexDirection: "row",
  },
  codeInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  applySaleCodeBtn: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fb7088",
    borderWidth: 0,
  },
  applySaleCodeText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  receiptInfoWrapper: {
    flexDirection: "row",
    marginBottom: 8,
    justifyContent: "space-between",
  },
  receiptInfoText: {
    fontSize: 17,
  },
});
export default styles;
