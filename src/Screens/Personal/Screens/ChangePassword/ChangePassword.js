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
import { useNavigation } from "@react-navigation/native";
import NavBarBottom from "../../../../Components/NavBarBottom/NavBarBottom";
export default function ChangePassword() {
  const navigation = useNavigation();
  const [personalInfo, setPersonalInfo] = useState({
    name: "Phan Thuan",
    phone: "0909319641",
    address: "B386/15, kp3, DHT, Q12",
  });
  const addressList = [
    {
      name: "Phan Thuan",
      phone: "0909319641",
      address: "B386/15, kp3, DHT, Q12",
      isSelected: true,
    },
    {
      name: "Phan Thuan",
      phone: "0909319641",
      address: "B386/15, kp3, DHT, Q12",
      isSelected: false,
    },
    {
      name: "Phan Thuan",
      phone: "0909319641",
      address: "B386/15, kp3, DHT, Q12",
      isSelected: false,
    },
  ];
  const handleChangeAddress = (item) => {
    navigation.navigate("UpdateAddress", { detail: item });
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainWrapper}>
          <View style={styles.formWrapper}>
            <TextInput
              style={styles.inputArticle}
              placeholder="Mật khẩu hiện tại"
              placeholderTextColor="#B1B1B1"
            />
            <TextInput
              style={styles.inputArticle}
              placeholder="Mật khẩu mới"
              placeholderTextColor="#B1B1B1"
            />
            <TextInput
              style={styles.inputArticle}
              placeholder="Xác nhận mật khẩu"
              placeholderTextColor="#B1B1B1"
            />
          </View>
          <Text style={styles.mainTitle}>
            Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
          </Text>
          <TouchableOpacity style={styles.confirmBtn}>
            <Text style={{fontSize: 18, color: 'white', alignItems: 'center'}}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <NavBarBottom />
    </View>
  );
}
