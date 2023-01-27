import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import NavBarBottom from "../../../../Components/NavBarBottom/NavBarBottom";
export default function UpdateAddress() {
  const navigation = useNavigation();
  const route = useRoute();
  const personalInfo = route.params.detail;
  const isCreate = !route.params.detail;
  console.log(isCreate);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainWrapper}>
          <TextInput
            style={styles.inputArticle}
            placeholder="Họ và tên..."
            placeholderTextColor="#B1B1B1"
          />
          <TextInput
            style={styles.inputArticle}
            placeholder="Số điện thoại..."
            placeholderTextColor="#B1B1B1"
          />
          <TextInput
            style={styles.inputArticle}
            placeholder="Địa chỉ..."
            placeholderTextColor="#B1B1B1"
          />
          <View style={{ flexDirection: "row" }}>
            {!isCreate && (
              <TouchableOpacity
                style={[
                  styles.buttonWrapper,
                  {
                    backgroundColor: "transparent",
                    borderColor: "#FA748F",
                    borderWidth: 1,
                  },
                ]}
              >
                <Text style={{ fontSize: 16, color: "#FA748F" }}>
                  XÓA ĐỊA CHỈ
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.buttonWrapper}>
              <Text style={{ fontSize: 16, color: "white" }}>
                {isCreate ? "TẠO ĐỊA CHỈ" : "LƯU"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <NavBarBottom />
    </View>
  );
}
