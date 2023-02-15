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
import DateTimePicker from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { userDataSelector } from "../../../../Store/Auth/selectors";
import { updateInforUserActions } from "../../../../Store/Auth/actions";
import Input from "../../../../Components/Input";
import { useForm } from "react-hook-form";
import validationSchema from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
export default function MainInfoChange() {
  const navigation = useNavigation();
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const showDatePicker = () => {
    setDatePicker(true);
  };
  const form = useForm({
    resolver: yupResolver(validationSchema()),
    mode: "all",
  });
  const handleDateChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setDatePicker(false);
      return;
    }
    setDate(selectedDate);
    setDatePicker(false);
  };
  const userData = useSelector(userDataSelector);
  const handleUpdate = (values) => {
    dispatch(
      updateInforUserActions({
        // ...userData,
        userName: values.username,
        fullName: values.fullname,
        phone: values.email,
        email: values.phone,
      })
    );
  };
  useEffect(() => {
    if (userData) {
      form.setValue("username", userData?.userName);
      form.setValue("fullname", userData?.fullName);
      form.setValue("email", userData?.email);
      form.setValue("phone", userData?.phone);
    }
  }, [userData]);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mainWrapper}>
        <TouchableOpacity style={styles.avatarChangeWrapper}>
          <View style={styles.avatarWrapper}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={{
                uri:
                  userData?.avatar ||
                  "https://images.unsplash.com/photo-1674596346697-166368afebdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
              }}
            />
          </View>
          <View style={styles.touchToChange}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 14 }}>
              Chạm để thay đổi
            </Text>
          </View>
        </TouchableOpacity>
        <Input
          label={"Tên đăng nhập"}
          name="username"
          containerStyle={styles.inputArticle}
          placeholder={userData.userName}
          placeholderTextColor="#B1B1B1"
          {...form}
        />
        <Input
          label={"Họ và tên"}
          name="fullname"
          containerStyle={styles.inputArticle}
          placeholder={userData.fullName}
          placeholderTextColor="#B1B1B1"
          {...form}
        />
        <Input
          label={"Email"}
          name="email"
          containerStyle={styles.inputArticle}
          placeholder={userData.email}
          placeholderTextColor="#B1B1B1"
          {...form}
        />
        <Input
          label={"Số điện thoại"}
          name="phone"
          containerStyle={styles.inputArticle}
          placeholder={userData.phone}
          placeholderTextColor="#B1B1B1"
          {...form}
        />

        {/* {datePicker && (
          <RNDateTimePicker value={date} onChange={handleDateChange} />
        )} */}
        {/* <TouchableOpacity
          style={[styles.inputArticle, { paddingVertical: 15 }]}
          onPress={showDatePicker}
        >
          <Text style={{ fontSize: 15, color: "#B1B1B1" }}>
            {moment(date).format("DD/MM/YYYY")}
          </Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.buttonSave} onPress={handleUpdate}>
          <Text style={{ fontSize: 16, color: "white" }}>Lưu</Text>
        </TouchableOpacity>
      </View>
      <NavBarBottom />
    </View>
  );
}
