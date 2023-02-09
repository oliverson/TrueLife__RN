import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import Header from "./src/Components/Header";
import MainNavigator from "./src/Navigations/navigation";
import SignUpScreen from "./src/Screens/SignUpScreen/SignUpScreen";
import createStore from "./src/Store";
import { PersistGate } from "redux-persist/integration/react";

import storeInit from "./src/Store";
import Bootstrap from "./src/Bootstrap";

const { store, persistor } = storeInit();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Bootstrap />
      </PersistGate>
    </Provider>
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
