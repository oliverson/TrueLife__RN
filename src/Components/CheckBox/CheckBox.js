import { Text, View } from "react-native";
import styles from "./styles";
import React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import { CheckIcon } from "../../assets/svg";

export default function CheckBox({ isChecked, onClick }) {
  return (
    <TouchableOpacity style={[styles.checkBoxWrapper]} onPress={onClick}>
      {isChecked && <CheckIcon />}
    </TouchableOpacity>
  );
}
