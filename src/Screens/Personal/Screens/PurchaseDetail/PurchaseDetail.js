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
export default function PurchaseDetail() {
  const navigation = useNavigation();
  const [personalInfo, setPersonalInfo] = useState({
    name: "Phan Thuan",
    phone: "0909319641",
    address: "B386/15, kp3, DHT, Q12",
  });
  const listProduct = [
    {
      id: "001",
      name: "CHANEL COCO MADEMOISELLE",
      quantity: 2,
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "002",
      name: "CHANEL COCO MADEMOISELLE",
      quantity: 2,
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "003",
      name: "CHANEL COCO MADEMOISELLE",
      quantity: 2,
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "004",
      name: "CHANEL COCO MADEMOISELLE",
      quantity: 2,
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "005",
      name: "CHANEL COCO MADEMOISELLE",
      quantity: 2,
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "006",
      name: "CHANEL COCO MADEMOISELLE",
      quantity: 2,
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "007",
      name: "CHANEL COCO MADEMOISELLE",
      quantity: 2,
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
  ];
  const handleProductPress = (item) => {};
  const PurchaseItem = (item) => {
    return (
      <TouchableOpacity
        key={item?.id}
        style={styles.productItemWrapper}
        onPress={() => handleProductPress(item)}
      >
        <View style={styles.productImageWrapper}>
          <Image style={styles.productImage} source={{ uri: item?.img }} />
        </View>
        <Text
          style={[styles.productItemText, { paddingHorizontal: 8 }]}
          numberOfLines={1}
        >
          {item?.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            paddingHorizontal: 8,
          }}
        >
          <Text style={styles.productItemPrice}>{item?.price}</Text>
          <Text style={{ fontSize: 13, color: "#999999" }}>
            x{item?.quantity}
          </Text>
        </View>
        <Text
          style={[
            styles.productItemPrice,
            {
              paddingHorizontal: 8,
              alignSelf: "stretch",
              textAlign: "left",
              fontSize: 18,
              fontWeight: "bold",
            },
          ]}
        >
          {item?.price}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainWrapper}>
          {listProduct.map((item) => PurchaseItem(item))}
        </View>
      </ScrollView>

      <NavBarBottom />
    </View>
  );
}
