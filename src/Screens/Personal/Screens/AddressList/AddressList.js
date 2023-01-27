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
export default function AddressList() {
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
          {addressList.map((item, index) => (
            <View
              key={index}
              style={[
                styles.addressWrapper,
                item?.isSelected && { backgroundColor: "#FA748F" },
              ]}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "column",
                  flex: 1,
                  paddingLeft: 25,
                  marginVertical: 15,
                }}
              >
                <Text
                  style={[
                    styles.addressDesc,
                    item?.isSelected && { color: "white" },
                  ]}
                >
                  {item.name}
                </Text>
                <Text
                  style={[
                    styles.addressDesc,
                    item?.isSelected && { color: "white" },
                  ]}
                >
                  {item.phone}
                </Text>
                <Text
                  style={[
                    styles.addressDesc,
                    item?.isSelected && { color: "white" },
                  ]}
                >
                  {item.address}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                  borderColor: item?.isSelected ? "white" : "#d9d9d9",
                  paddingHorizontal: 25,
                }}
                onPress={() => handleChangeAddress(item)}
              >
                <Text
                  style={[
                    styles.addressDesc,
                    item?.isSelected && { color: "white" },
                  ]}
                >
                  Sửa
                </Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.addAddressButton}>
            <Text style={{ fontSize: 17, color: "white", textAlign: "center" }}>
              THÊM ĐỊA CHỈ
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <NavBarBottom />
    </View>
  );
}
