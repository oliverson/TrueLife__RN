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
export default function MainInfoChange() {
  const navigation = useNavigation();
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const showDatePicker = () => {
    setDatePicker(true);
  };
  const handleDateChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      setDatePicker(false);
      return;
    }
    setDate(selectedDate);
    setDatePicker(false);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mainWrapper}>
        <TouchableOpacity style={styles.avatarChangeWrapper}>
          <View style={styles.avatarWrapper}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: "https://images.unsplash.com/photo-1674596346697-166368afebdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
              }}
            />
          </View>
          <View style={styles.touchToChange}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 14 }}>
              Chạm để thay đổi
            </Text>
          </View>
        </TouchableOpacity>
        <TextInput
          style={styles.inputArticle}
          placeholder="Tên đăng nhập..."
          placeholderTextColor="#B1B1B1"
        />
        <TextInput
          style={styles.inputArticle}
          placeholder="Họ và tên..."
          placeholderTextColor="#B1B1B1"
        />
        <TextInput
          style={styles.inputArticle}
          placeholder="Email..."
          placeholderTextColor="#B1B1B1"
        />
        <TextInput
          style={styles.inputArticle}
          placeholder="Số điện thoại..."
          placeholderTextColor="#B1B1B1"
        />

        {datePicker && (
          <RNDateTimePicker value={date} onChange={handleDateChange}/>
        )}
        <TouchableOpacity
          style={[styles.inputArticle, {paddingVertical: 15}]}
          onPress={showDatePicker}
        >
          <Text style={{ fontSize: 15, color: "#B1B1B1" }}>
            {moment(date).format("DD/MM/YYYY")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSave}>
          <Text style={{ fontSize: 16, color: "white" }}>Lưu</Text>
        </TouchableOpacity>
      </View>
      <NavBarBottom />
    </View>
  );
}
