import { Text, View } from "react-native";
import React from "react";

const EmptyList = ({}) => {
  return <View style={{flex: 1, alignItems: 'center',}}>
    <Text style={{textAlign: 'center'}}>Chưa có sản phầm để hiển thị</Text>
  </View>;
};

export default EmptyList;
