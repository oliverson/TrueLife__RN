import { Text, View } from "react-native";
import styles from "./styles";
import React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";

export default function MiniNumberInput({
  number,
  containerStyle,
  minusPress,
  plusPress,
}) {
  return (
    <View style={[styles.numberInputContainer, containerStyle]}>
      <TouchableOpacity style={styles.buttonMinus} onPress={minusPress}>
        <Text style={styles.icon}>-</Text>
      </TouchableOpacity>
      <View style={styles.numberInput}>
        <Text>{number}</Text>
      </View>
      <TouchableOpacity style={styles.buttonPlus} onPress={plusPress}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
