import { Image, StyleSheet, Text, View, FlatList, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import { getSixNewProducts, getTopSixNewProducts } from "../../../../Store/Production/service";
import { RETCODE_SUCCESS, SUCCESS } from "../../../../config/constants";
import { useNavigation } from "@react-navigation/native";
import EmptyList from "../../../../Components/EmptyList";

export default function CategoryProducts({
  listData,
  title = "",
  style = {},
}) {
  const flatlistRef = useRef();

  const navigation = useNavigation();
  const carouselProductItem = ({ item }) => {
    const handleProductPress = () => {

      navigation.navigate("ProductDetail");
    };
    return (
      <TouchableOpacity
        onPress={handleProductPress}
        key={item?.productId} style={styles.carouselItem}>
        <Image
          resizeMode='contain'
          source={{ uri: item?.avatar }}
          style={{ width: "100%", height: "70%" }}
        />
        <View style={styles.itemContent}>
          <Text style={styles.itemName}>{item?.productName}</Text>
          <Text style={styles.itemPrice}>{item?.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[styles.mainWrapper, style]}>
      <View style={styles.cateProductHeader}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>{title.toUpperCase()}</Text>
        </View>
        {/* <View style={styles.headerViewMore}>
          <Pressable style={styles.headerViewMoreText}
          // onPress={handleGetTopSixNewProducts}
          >
            <Text>  Xem thêm...</Text>

          </Pressable>
        </View> */}
      </View>
      <View style={styles.cateProductBody}>
        <View style={[styles.carouselWrapper, { marginTop: 15 }]}>
          <FlatList
            ref={flatlistRef}
            showsHorizontalScrollIndicator={false}
            data={listData}
            renderItem={carouselProductItem}
            horizontal
            ListEmptyComponent={()=>{
              return <EmptyList/>
            }}
          ></FlatList>
        </View>
      </View>
    </View>
  );
}
