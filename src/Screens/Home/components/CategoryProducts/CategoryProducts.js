import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";

export default function CategoryProducts({
  listData,
  title = "Sản phẩm bán chạy",
  style = {},
}) {
  const flatlistRef = useRef();
  const carouselProductItem = ({ item }) => {
    return (
      <View key={item?.id} style={styles.carouselItem}>
        <Image
          source={{ uri: item?.src }}
          style={{ width: "100%", height: "75%", marginBottom: 5 }}
        />
        <View style={styles.itemContent}>
          <Text style={styles.itemName}>{item?.name}</Text>
          <Text style={styles.itemPrice}>{item?.price}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.mainWrapper, style]}>
      <View style={styles.cateProductHeader}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>{title.toUpperCase()}</Text>
        </View>
        <View style={styles.headerViewMore}>
          <Text style={styles.headerViewMoreText}>Xem thêm...</Text>
        </View>
      </View>
      <View style={styles.cateProductBody}>
        <View style={[styles.carouselWrapper, { marginTop: 15 }]}>
          <FlatList
            ref={flatlistRef}
            showsHorizontalScrollIndicator={false}
            data={listData}
            renderItem={carouselProductItem}
            horizontal
          ></FlatList>
        </View>
      </View>
    </View>
  );
}
