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
import { useSelector } from "react-redux";
import { listDeliveryAddressSelector } from "../../../../Store/Auth/selectors";
export default function AddressList() {
  const navigation = useNavigation();

  const handleChangeAddress = (item) => {
    navigation.navigate("UpdateAddress", { detail: item });
  };
  const listAddress = useSelector(listDeliveryAddressSelector);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainWrapper}>
          {listAddress.map((item, index) => (
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
                  {listAddress.address}
                </Text>
                <Text
                  style={[
                    styles.addressDesc,
                    item?.isSelected && { color: "white" },
                  ]}
                >
                  {listAddress.districtName}
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
          <TouchableOpacity
            style={styles.addAddressButton}
            onPress={handleChangeAddress}
          >
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
