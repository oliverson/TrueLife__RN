import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainWrapper: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  carouselWrapper: {
    paddingVertical: 10,
    backgroundColor: "white",
  },
  bodyWrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  mainProductWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    maxWidth: "98%",
    height: 300,
    display: "flex",
    position: "relative",
    padding: 10,
    backgroundColor: "#fff",
  },

  col: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  row60: {
    width: "100%",
    height: "60%",
    overflow: "hidden",
    position: "relative",
  },
  row40: {
    width: "100%",
    height: "35%",
    overflow: "hidden",
    position: "relative",
  },
  bannerImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
export default styles;
