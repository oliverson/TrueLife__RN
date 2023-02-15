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
import { useDispatch, useSelector } from "react-redux";
import { userDataSelector } from "../../Store/Auth/selectors";
import { setProfileUser } from "../../Store/Auth/actions";

export default function Personal() {
  const navigation = useNavigation();

  const profileData = useSelector(userDataSelector);
  const dispacth = useDispatch();
  const logout = () => {
    dispacth(setProfileUser(null));
  };

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
            <Text style={styles.addressDesc}>
              {profileData?.fullName || ""}
            </Text>
            <Text style={styles.addressDesc}>{profileData?.phone || ""}</Text>
            <Text style={styles.addressDesc}>{profileData?.email || ""}</Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.addressDesc}>Sửa</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[
            styles.addressWrapper,
            { borderTopColor: "#d9d9d9", borderTopWidth: 1 },
          ]}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <Text style={{ fontSize: 18, color: "#999999" }}>ĐỔI MẬT KHẨU</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={[
            styles.addressWrapper,
            { borderTopColor: "#d9d9d9", borderTopWidth: 1 },
          ]}
          onPress={() => navigation.navigate("PurchaseHistory")}
        >
          <Text style={{ fontSize: 18, color: "#999999" }}>
            LỊCH SỬ MUA HÀNG
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.addressWrapper,
            { borderTopColor: "#d9d9d9", borderTopWidth: 1 },
          ]}
          onPress={logout}
        >
          <Text style={{ fontSize: 18, color: "#999999" }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
      <NavBarBottom />
    </View>
  );
}
