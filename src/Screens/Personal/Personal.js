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
import Header from "./Components/Header/Header";

export default function Personal() {
  const navigation = useNavigation();
  const [personalInfo, setPersonalInfo] = useState({
    name: "Phan Thuan",
    phone: "0909319641",
    address: "B386/15, kp3, DHT, Q12",
  });
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mainWrapper}>
        <Header />
        <TouchableOpacity
          style={styles.addressWrapper}
          onPress={() => navigation.navigate("AddressList")}
        >
          <View
            style={{
              flexDirection: "column",
              flex: 1,
            }}
          >
            <Text style={styles.addressDesc}>{personalInfo.name}</Text>
            <Text style={styles.addressDesc}>{personalInfo.phone}</Text>
            <Text style={styles.addressDesc}>{personalInfo.address}</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.addressDesc}>Sửa</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.addressWrapper,
            { borderTopColor: "#d9d9d9", borderTopWidth: 1 },
          ]}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <Text style={{ fontSize: 18, color: "#999999" }}>ĐỔI MẬT KHẨU</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.addressWrapper,
            { borderTopColor: "#d9d9d9", borderTopWidth: 1 },
          ]}
          onPress={() => navigation.navigate("PurchaseHistory")}
        >
          <Text style={{ fontSize: 18, color: "#999999" }}>LỊCH SỬ MUA HÀNG</Text>
        </TouchableOpacity>
      </View>
      <NavBarBottom />
    </View>
  );
}
