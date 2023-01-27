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
import NavBarBottom from "../../Components/NavBarBottom/NavBarBottom";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CheckBox from "../../Components/CheckBox/CheckBox";

export default function ServiceSelect() {
  const navigation = useNavigation();

  return (
    <View style={styles.mainWrapper}>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.contactTitle}>Hỗ trợ khách hàng</Text>
          <View style={{ padding: 12 }}>
            <Text style={styles.sendUsTitle}>Gửi tin nhắn đến chúng tôi</Text>
            <TextInput
              placeholder="Nhập họ và tên"
              style={styles.inputStyle}
              placeholderTextColor={"#B1B1B1"}
            />
            <TextInput
              placeholder="Nhập email"
              style={styles.inputStyle}
              placeholderTextColor={"#B1B1B1"}
            />
            <TextInput
              placeholder="Nhập số điện thoại"
              style={styles.inputStyle}
              placeholderTextColor={"#B1B1B1"}
            />
            <TextInput
              placeholder="Nhập tiêu đề"
              style={styles.inputStyle}
              placeholderTextColor={"#B1B1B1"}
            />
            <TextInput
              placeholder="Nhập nội dung"
              style={styles.textAreaStyle}
              placeholderTextColor="#B1B1B1"
              numberOfLines={8}
            />
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Gửi phản hồi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <NavBarBottom />
    </View>
  );
}
