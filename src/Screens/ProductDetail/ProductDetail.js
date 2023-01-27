import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import NavBarBottom from "../../Components/NavBarBottom/NavBarBottom";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import NumberInput from "../../Components/NumberInput/NumberInput";

export default function ProductDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState({
    id: 0,
    uri: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
  });
  const [activeKind, setActiveKind] = useState({
    id: 0,
    name: "Hương Phong Lan",
  });
  const array = [
    {
      id: 0,
      uri: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: 1,
      uri: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: 2,
      uri: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: 3,
      uri: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: 4,
      uri: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
  ];
  const kindArray = [
    { id: 0, name: "Hương Phong Lan" },
    { id: 1, name: "Hương Vani" },
    { id: 2, name: "Nho Đen Hy Lạp" },
    { id: 3, name: "Hương Clementine" },
  ];
  const listProduct = [
    {
      id: "001",
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "002",
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "003",
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "004",
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "005",
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "006",
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "007",
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
  ];
  const handleSubImagePress = (item) => {
    setActiveImage(item);
  };
  const handleKindItemPress = (item) => {
    setActiveKind(item);
  };
  return (
    <View style={styles.mainWrapper}>
      <ScrollView>
        <View style={styles.productDetailWrapper}>
          <View style={styles.productImageWrapper}>
            <Image
              style={styles.productMainImage}
              resizeMode="contain"
              source={{
                uri: activeImage?.uri,
              }}
            />
            <View style={{ width: "100%", height: 100, position: "relative" }}>
              <ScrollView
                style={[styles.productSubImageWrapper]}
                horizontal={true}
              >
                {array?.map((item) => (
                  <TouchableOpacity
                    style={[
                      styles.productSubImage,
                      { opacity: item?.id === activeImage?.id ? 0.5 : 1 },
                    ]}
                    key={item?.id}
                    onPress={() => handleSubImagePress(item)}
                  >
                    <Image style={{ flex: 1 }} source={{ uri: item?.uri }} />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.productNameWrapper}>
            <View style={styles.productName}>
              <Text style={styles.productNameText} numberOfLines={2}>
                CHANEL COCO MADEMOISELLE
              </Text>
            </View>
            <View style={styles.productPriceWrapper}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  marginBottom: 5,
                }}
              >
                <Text style={styles.productPriceTitle}>Giá bán:</Text>
                <Text style={styles.productPriceDiscountedText}>
                  2.800.000đ
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Text style={styles.productPriceTitle}>Giá gốc:</Text>
                <Text style={styles.productPriceOriginalText}>2.450.000đ</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                marginTop: 10,
              }}
            >
              <Text style={styles.productPriceTitle}>Hãng sản xuất:</Text>
              <Text
                style={[
                  styles.productPriceOriginalText,
                  { color: "#000", textDecorationLine: "none" },
                ]}
              >
                Dior
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <Text style={styles.productPriceTitle}>Tình trạng:</Text>
              <Text
                style={[
                  styles.productPriceOriginalText,
                  { color: "#000", textDecorationLine: "none" },
                ]}
              >
                Còn hàng
              </Text>
            </View>
          </View>
          <View style={styles.productNameWrapper}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={styles.productPriceTitle}>Loại:</Text>
              <View style={styles.productKindsWrapper}>
                {kindArray.map((item) => (
                  <TouchableOpacity
                    style={
                      item?.id === activeKind?.id
                        ? styles.kindActiveItem
                        : styles.kindItem
                    }
                    onPress={() => handleKindItemPress(item)}
                  >
                    <Text
                      style={[
                        styles?.kindItemName,
                        {
                          color: item?.id === activeKind?.id ? "white" : "#000",
                        },
                      ]}
                    >
                      {item?.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                marginTop: 10,
              }}
            >
              <Text style={styles.productPriceTitle}>Số lượng mua:</Text>
              <NumberInput
                number={currentQuantity}
                setNumber={setCurrentQuantity}
                containerStyle={{ width: "70%" }}
              />
            </View>
          </View>
          <View style={[styles.productNameWrapper, { padding: 0 }]}>
            <View
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                borderWidth: 1,
                borderColor: "#d9d9d9",
              }}
            >
              <Text
                style={[
                  styles.productPriceTitle,
                  {
                    padding: 10,
                    color: "#fb7088",
                    fontWeight: "bold",
                    paddingBottom: 10,
                    fontSize: 18,
                    borderBottomColor: "#d9d9d9",
                    borderBottomWidth: 1,
                    width: "100%",
                  },
                ]}
              >
                Mô tả
              </Text>
              <Text style={{ color: "#999999", fontSize: 18, padding: 10 }}>
                This is description
              </Text>
            </View>
          </View>
          <View style={[styles.productNameWrapper]}>
            <Text style={styles.productRelevantText}>Sản phẩm liên quan</Text>
            <ScrollView style={styles.productRelevantScroll} horizontal={true}>
              <View style={styles.productRelevantWrapper}>
                {listProduct?.map((item) => (
                  <View style={styles.relevantProductItem}>
                    <Image
                      style={styles.relevantProductItemImage}
                      source={{ uri: item?.img }}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        marginTop: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ marginBottom: 5 }}>{item?.name}</Text>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#fb7088",
                          fontWeight: "bold",
                        }}
                      >
                        {item?.price}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <NavBarBottom />
    </View>
  );
}

{
  /* */
}
