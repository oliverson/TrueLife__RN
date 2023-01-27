import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";
import React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import {
  CartIcon,
  ContactIcon,
  HomeIcon,
  ProductIcon,
  UserIcon,
} from "../../assets/svg";
import { useNavigation } from "@react-navigation/native";

export default function NavBarBottom() {
  const navigation = useNavigation();
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <HomeIcon></HomeIcon>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("Product");
        }}
      >
        <ProductIcon></ProductIcon>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("Personal");
        }}
      >
        <UserIcon></UserIcon>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("YourCart");
        }}
      >
        <CartIcon></CartIcon>
      </TouchableOpacity>
    </View>
  );
}
