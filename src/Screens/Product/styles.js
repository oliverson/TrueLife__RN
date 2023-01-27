import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: "100%",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
  },
  scrollContainer: {
    backgroundColor: "white",
    height: "100%",
  },
  categoryItem: {
    width: "100%",
    aspectRatio: 1 / 0.5,
    backgroundColor: "red",
    backgroundColor: "#fef4f3",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  categoryItemText: {
    fontSize: 18,
    color: "#FA748F",
    textAlign: "center",
  },
  productMainContainer: {
    width: "65%",
    height: "100%",
    paddingTop: 10,
  },
  categoryContainer: {},
  titleCategory: {
    backgroundColor: "#FA748F",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  titleCategoryText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  productMainHeader: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 12,
  },
  productMainContainerText: {
    fontSize: 24,
    textTransform: "uppercase",
    alignItems: "center",
    justifyContent: "center",
  },
  productList: {
    paddingHorizontal: 8,
  },
  productItemWrapper: {
    width: "90%",
    flexDirection: "column",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  productImageWrapper: {
    width: "100%",
    aspectRatio: 1 / 1.2,
  },
  productImage: {
    width: "100%",
    aspectRatio: 1 / 1.2,
  },
  productItemText: {
    textTransform: "uppercase",
  },
  productItemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FA748F",
  },
});
export default styles;
