import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import NavBarBottom from "../../Components/NavBarBottom/NavBarBottom";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import CheckBox from "../../Components/CheckBox/CheckBox";
import MiniNumberInput from "../../Components/MiniNumberInput/MiniNumberInput";
import { BinIcon } from "../../assets/svg";

export default function YourCart() {
  const navigation = useNavigation();
  const route = useRoute();

  const [productList, setProductList] = useState([
    {
      id: 0,
      price: 3500,
      quantity: 5,
      url: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      name: "Blue Switch",
      isChecked: false,
    },
    {
      id: 1,
      price: 120000,
      quantity: 1,
      url: "https://images.unsplash.com/photo-1674230226985-f7d78563c90d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      name: "KeyCap",
      isChecked: false,
    },
    // {
    //   id: 2,
    //   price: 5000,
    //   quantity: 1,
    //   url: "https://images.unsplash.com/photo-1674082540761-440dc1b2326b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    //   name: "Con ghệ miền Tây",
    //   isChecked: false,
    // },
  ]);
  const handleCheckBoxPress = (item) => {
    const index = productList.findIndex((object) => object.id === item.id);
    const newArray = productList;
    newArray[index].isChecked = !item?.isChecked;
    setProductList([...newArray]);
  };
  const handlePlusPress = (item) => {
    const index = productList.findIndex((object) => object.id === item.id);
    const newArray = productList;
    let result;
    if (item?.quantity >= 99) {
      return;
    } else {
      result = item?.quantity + 1;
    }
    newArray[index].quantity = result;
    setProductList([...newArray]);
  };
  const handleMinusPress = (item) => {
    const index = productList.findIndex((object) => object.id === item.id);
    const newArray = productList;
    let result;
    if (item?.quantity <= 1) {
      return;
    } else {
      result = item?.quantity - 1;
    }
    newArray[index].quantity = result;
    setProductList([...newArray]);
  };
  const handleChooseAll = () => {
    const newArray = productList;
    const isChooseAll = newArray.every((item) => item?.isChecked);
    console.log(isChooseAll);
    newArray.forEach((item) => {
      if (isChooseAll) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
      }
    });
    setProductList([...newArray]);
  };
  const handlePurchasePress = () => {
    navigation.navigate("Booking");
  };
  return (
    <View style={styles.mainWrapper}>
      <ScrollView style={{ height: "100%", flex: 1 }}>
        <View style={styles.yourCartWrapper}>
          <Text style={styles.yourCartTitle}>Giỏ hàng của bạn</Text>
          <View style={styles.yourCartMainWrapper}>
            {productList.map((item) => (
              <TouchableOpacity style={styles.cartItemWrapper} key={item?.id}>
                <View style={styles.checkboxWrapper}>
                  <CheckBox
                    isChecked={item?.isChecked}
                    onClick={() => handleCheckBoxPress(item)}
                  />
                </View>
                <View style={styles.imageWrapper}>
                  <Image
                    style={styles.cartProductImage}
                    source={{ uri: item?.url }}
                  />
                </View>
                <View style={styles.itemDescWrapper}>
                  <Text numberOfLines={1} style={styles.itemNameText}>
                    {item?.name}
                  </Text>
                  <Text style={styles.itemPriceText}>{item.price}</Text>
                  <View
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <MiniNumberInput
                      number={item?.quantity}
                      containerStyle={{ width: 120, marginRight: 60 }}
                      minusPress={() => handleMinusPress(item)}
                      plusPress={() => handlePlusPress(item)}
                    />
                  </View>
                  <TouchableOpacity style={styles.deleteIcon}>
                    <BinIcon />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.cartFooterWrapper}>
        <View style={styles.chooseAllWrapper}>
          <CheckBox
            onClick={handleChooseAll}
            isChecked={productList.every((item) => item.isChecked)}
          />
          <Text style={{ fontSize: 18, marginLeft: 8 }}>Tất cả</Text>
        </View>
        <View style={styles.footerRightSideWrapper}>
          <TouchableOpacity
            style={styles.buttonPurchase}
            onPress={handlePurchasePress}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Thanh toán ({productList.filter((item) => item?.isChecked).length}
              )
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
