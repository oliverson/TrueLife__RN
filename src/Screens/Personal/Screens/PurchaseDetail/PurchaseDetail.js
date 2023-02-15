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
import moment from "moment/moment";
import { useSelector } from "react-redux";
import { listCartUserSelector } from "../../../../Store/Auth/selectors";
export default function PurchaseDetail() {
  const getListCartUser = useSelector(listCartUserSelector);
  console.log("getListCartUser", getListCartUser);

  const PurchaseItem = (item) => {
    return (
      <TouchableOpacity
        key={item?.orderId}
        style={styles.productItemWrapper}
        // onPress={() => handleProductPress(item)}
      >
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <Text
            style={[styles.productItemText, { color: "red" }]}
            numberOfLines={1}
          >
            {"Họ tên: "}
          </Text>

          <Text style={[styles.productItemText]} numberOfLines={1}>
            {item?.fullName}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginVertical: 10,
          }}
        >
          <Text style={[styles.productItemText, { color: "red" }]}>
            {"Địa chỉ: "}
          </Text>
          <Text style={styles.productItemPrice}>{item?.price}</Text>
          <Text style={{ fontSize: 13, color: "#999999" }}>
            {item?.infoAddressDeliveryUser?.address} {", "}
            {item?.infoAddressDeliveryUser?.districtName} {", "}
            {item?.infoAddressDeliveryUser?.provinceName}
          </Text>
          {/* <Text style={{ fontSize: 13, color: "#999999" }}>
            x{item?.dateTimeD}
          </Text>
          <Text style={{ fontSize: 13, color: "#999999" }}>
            x{item?.dateTimeD}
          </Text> */}
        </View>

        <Text style={[styles.productItemText, { color: "red" }]}>
          {"Tổng tiền: "}
        </Text>
        <Text
          style={[
            styles.productItemPrice,
            {
              alignSelf: "stretch",
              textAlign: "left",
              fontSize: 18,
              fontWeight: "bold",
              margin: 0,
            },
          ]}
        >
          {item?.total}
          {" đ"}
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text
            style={[
              styles.productItemPrice,
              {
                color: "red",
              },
            ]}
          >
            {"Trạng thái: "}
          </Text>
          <Text style={[styles.productItemPrice, {}]}>{item?.status}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainWrapper}>
          {getListCartUser.map((item) => PurchaseItem(item))}
        </View>
      </ScrollView>

      <NavBarBottom />
    </View>
  );
}
