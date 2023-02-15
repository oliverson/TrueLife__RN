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
import Input from "../../../../Components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./validation";
import { updateAddressDeliveryUser } from "../../../../Store/Auth/service";
import { useSelector } from "react-redux";
import {
  listDeliveryAddressSelector,
  userDataSelector,
} from "../../../../Store/Auth/selectors";
export default function UpdateAddress() {
  const navigation = useNavigation();
  const route = useRoute();
  const personalInfo = route.params.detail;
  const isCreate = !route.params.detail;
  const form = useForm({
    resolver: yupResolver(validationSchema()),
    mode: "all",
  });
  console.log(isCreate);
  const listAddress = useSelector(listDeliveryAddressSelector);

  const userData = useSelector(userDataSelector);
  const onSubmit = async () => {
    try {
      const res = await updateAddressDeliveryUser({
        ...listAddress,
        userId: userData?.userId,
        phone: form.getValues("phone"),
        address: form.getValues("address"),
      });
      if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
        alert(res.data.retText);

        navigation.navigate("Login");
      } else {
        alert(res.data.retText);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainWrapper}>
          <Input
            name="fullname"
            containerStyle={styles.inputArticle}
            label={"Họ và tên"}
            placeholder="Họ và tên..."
            placeholderTextColor="#B1B1B1"
            {...form}
          />
          <Input
            name="phone"
            containerStyle={styles.inputArticle}
            label={"Số điện thoại"}
            placeholder="Số điện thoại..."
            placeholderTextColor="#B1B1B1"
            {...form}
          />
          <Input
            name="address"
            label={"Địa chỉ"}
            containerStyle={styles.inputArticle}
            placeholder="Địa chỉ..."
            placeholderTextColor="#B1B1B1"
            {...form}
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
            <TouchableOpacity style={styles.buttonWrapper} onPress={onSubmit}>
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
