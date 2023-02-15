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
import Input from "../../../../Components/Input";
import validationSchema from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { changePassword } from "../../../../Store/Auth/service";
export default function ChangePassword() {
  const navigation = useNavigation();
  const form = useForm({
    resolver: yupResolver(validationSchema()),
    mode: "all",
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainWrapper}>
          <View style={styles.formWrapper}>
            <Input
              name="currentpassword"
              containerStyle={styles.inputArticle}
              placeholder={"Mật khẩu hiện tại"}
              height={20}
              required
              placeholderTextColor="#B1B1B1"
              {...form}
            />

            <Input
              name="newpassword"
              containerStyle={styles.inputArticle}
              placeholder={"Mật khẩu mới"}
              height={20}
              required
              placeholderTextColor="#B1B1B1"
              {...form}
            />

            <Input
              name="renewpassword"
              containerStyle={styles.inputArticle}
              placeholder={"Xác nhận mật khẩu"}
              height={20}
              required
              placeholderTextColor="#B1B1B1"
              {...form}
            />
          </View>
          <Text style={styles.mainTitle}>
            Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
          </Text>
          <TouchableOpacity style={styles.confirmBtn}>
            <Text
              style={{ fontSize: 18, color: "white", alignItems: "center" }}
            >
              Xác nhận
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <NavBarBottom />
    </View>
  );
}
