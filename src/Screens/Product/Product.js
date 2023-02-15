import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import NavBarBottom from "../../Components/NavBarBottom/NavBarBottom";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  getListProductsContent,
  getListProductsFillter,
} from "../../Store/Production/service";
import { useEffect } from "react";
import { RETCODE_SUCCESS, SUCCESS } from "../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  getListProductsContentActions,
  getListProductsFlitter,
} from "../../Store/Production/actions";
import { productListProductContentDataSelector } from "../../Store/Production/selectors";

export default function Product() {
  const [currentItem, setCurrentItem] = useState({ id: 0, name: "Son Môi" });
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [listProduct, setListProduct] = useState([
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
  ]);
  const handleItemChoose = (item) => {
    setCurrentItem(item);
    console.log(item);
    fetchListProduct(item?.typeProductName, item?.typeProductId);
  };

  const dispatch = useDispatch();
  const handleGetListDataProducts = () => {
    dispatch(getListProductsContentActions({}));
  };
  const handleProductPress = (item) => {
    navigation.navigate("ProductDetail");
  };

  const fetchListProduct = (productName, productTypeId) => {
    dispatch(
      getListProductsFlitter({
        productName,
        productTypeId,
      })
    );
  };

  useEffect(() => {
    handleGetListDataProducts();
  }, []);
  const dataListProducts = useSelector(productListProductContentDataSelector);

  return (
    <View style={styles.mainWrapper}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        {!loading && (
          <ScrollView
            style={[styles.scrollContainer]}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {dataListProducts.map((item) => (
              <View style={styles.categoryContainer} key={item?.id}>
                <View style={styles.titleCategory}>
                  <Text style={styles.titleCategoryText}>
                    {item?.portfolioName}
                  </Text>
                </View>
                <View style={styles.categoryListWrapper}>
                  {item?.listTypeProductUsers.map((categoryItem) => (
                    <TouchableOpacity
                      key={categoryItem?.typeProductId}
                      style={[
                        styles.categoryItem,
                        currentItem?.typeProductId ===
                          categoryItem.typeProductId && {
                          backgroundColor: "white",
                        },
                      ]}
                      onPress={() => handleItemChoose(categoryItem)}
                    >
                      <Text style={styles.categoryItemText}>
                        {categoryItem.typeProductName}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </ScrollView>
        )}

        <View style={styles.productMainContainer}>
          <View style={styles.productMainHeader}>
            <Text style={styles.productMainContainerText}>
              {currentItem?.typeProductName}
            </Text>
          </View>
          <ScrollView
            style={styles.productList}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {dataListProducts?.map((item) => (
              <TouchableOpacity
                key={item?.id}
                style={styles.productItemWrapper}
                onPress={handleProductPress}
              >
                <View style={styles.productImageWrapper}>
                  <Image
                    style={styles.productImage}
                    source={{ uri: item?.img }}
                  />
                </View>
                <Text style={styles.productItemText}>{item?.name}</Text>
                <Text style={styles.productItemPrice}>{item?.price}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <NavBarBottom></NavBarBottom>
    </View>
  );
}
