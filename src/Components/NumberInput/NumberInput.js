import { Text, View } from "react-native";
import styles from "./styles";
import React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";

export default function NumberInput({ number, setNumber, containerStyle }) {
  const handleMinusPress = () => {
    if (number <= 1) {
      setNumber(1);
      return;
    }
    setNumber(number - 1);
  };
  const handlePlusPress = () => {
    if (number >= 99) {
      setNumber(99);
      return;
    }
    setNumber(number + 1);
  };
  return (
    <View style={[styles.numberInputContainer, containerStyle]}>
      <TouchableOpacity style={styles.button} onPress={handleMinusPress}>
        <Text style={styles.icon}>-</Text>
      </TouchableOpacity>
      <View style={styles.numberInput}>
        <Text>{number}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePlusPress}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
