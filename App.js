import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/Components/Header";
import MainNavigator from "./src/Navigations/navigation";
import SignUpScreen from "./src/Screens/SignUpScreen/SignUpScreen";


export default function App() {
  return (
    <MainNavigator></MainNavigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
