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

export default function ServiceSelect() {
  const navigation = useNavigation();
  const [productList, setProductList] = useState([
    {
      id: "001",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      isChecked: false,
      desc: "Đây là phần quà cực bự",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "002",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      isChecked: false,
      desc: "Đây là phần quà cực bự",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "003",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      isChecked: false,
      desc: "Đây là phần quà cực bự",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "004",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      isChecked: false,
      desc: "Đây là phần quà cực bự",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "005",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      isChecked: false,
      desc: "Đây là phần quà cực bự",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "006",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      isChecked: false,
      desc: "Đây là phần quà cực bự",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "007",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      isChecked: false,
      desc: "Đây là phần quà cực bự",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
  ]);

  const ProductItem = (item) => (
    <View style={styles.productItemWrapper} key={item?.id}>
      <View style={styles.imageWrapper}>
        <Image style={styles.productImage} source={{ uri: item?.img }} />
      </View>
      <View style={styles.productItemDescWrapper}>
        <Text numberOfLines={1} style={{ fontSize: 15 }}>
          {item?.name}
        </Text>
        <Text numberOfLines={2} style={{ fontSize: 14, color: "#999999" }}>
          {item?.desc}
        </Text>
        <Text style={{ fontSize: 15, color: "#fb7088" }}>
          Giá: {item?.price}
        </Text>
      </View>
      <View style={styles.checkBoxWrapper}>
        <CheckBox />
      </View>
    </View>
  );
  return (
    <View style={styles.mainWrapper}>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.pageTitle}>Chọn combo gói quà</Text>
          <View style={{ marginVertical: 12 }}>
            {productList.map((item) => ProductItem(item))}
          </View>
          <View style={styles.saveButtonWrapper}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => navigation.navigate("Contact")}
            >
              <Text style={styles.saveButtonText}>Lưu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
