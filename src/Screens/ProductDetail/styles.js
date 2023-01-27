import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  productDetailWrapper: {
    flex: 1,
    height: "100%",
  },
  productImageWrapper: {
    // height: 300,
    width: "100%",
    backgroundColor: "#fef4f3",
  },
  productMainImage: {
    height: 300,
    width: "100%",
  },
  productSubImageWrapper: {
    height: 100,
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "white",
  },
  productSubImage: {
    aspectRatio: 1,
    marginHorizontal: 5,
    height: "100%",
    borderWidth: 2,
    borderColor: "#d9d9d9",
    marginBottom: 10,
  },
  productNameWrapper: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#fef4f3",
    flexDirection: "column",
    padding: 10,
  },
  productName: {
    marginBottom: 10,
  },
  productNameText: {
    fontSize: 22,
  },
  productPriceWrapper: {
    flexDirection: "column",
    marginBottom: 10,
  },
  productPriceTitle: {
    fontSize: 15,
    width: "30%",
    marginBottom: 5,
  },
  productPriceDiscountedText: {
    width: "70%",
    fontSize: 22,
    fontWeight: "bold",
    color: "#fb7088",
  },
  productPriceOriginalText: {
    width: "70%",
    fontSize: 18,
    color: "#d9d9d9",
    textDecorationLine: "line-through",
  },
  productKindsWrapper: {
    width: "70%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  kindItem: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    margin: 5,
  },
  kindItemName: {
    fontSize: 13,
  },
  kindActiveItem: {
    borderWidth: 0,
    backgroundColor: "#fb7088",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  productRelevantText: {
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  productRelevantScroll: {
    width: "100%",
    paddingHorizontal: 15,
  },
  productRelevantWrapper: {
    flexDirection: "row",
    height: 250,
  },
  relevantProductItem: {
    marginHorizontal: 10,
    height: "100%",
    aspectRatio: 1,
    backgroundColor: "white",
    borderRadius: 8,
    paddingBottom: 5,
  },
  relevantProductItemImage: {
    height: "75%",
  },
});
export default styles;
