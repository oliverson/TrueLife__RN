import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import NavBarBottom from "../../Components/NavBarBottom/NavBarBottom";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import CheckBox from "../../Components/CheckBox/CheckBox";
import MiniNumberInput from "../../Components/MiniNumberInput/MiniNumberInput";
import { BinIcon } from "../../assets/svg";
import { useDispatch, useSelector } from "react-redux";
import { getInforUserCart } from "../../Store/Auth/actions";
import {
  listCartUserSelector,
  userDataSelector,
} from "../../Store/Auth/selectors";
import { getCardDataSelector } from "../../Store/Production/selectors";
import EmptyList from "../../Components/EmptyList";
import {
  changeQuantitiesItemOnCart,
  deleteItemOnCart,
  setCheckedItemOnCart,
} from "../../Store/Production/actions";
import { moneyFormat } from "../../Utils/currency";

export default function YourCart() {
  const navigation = useNavigation();
  const route = useRoute();
  const cartData = useSelector(getCardDataSelector);
  const handleChooseAll = () => {
    const hasChecked = cartData.every((e) => e.isChecked);
    cartData.forEach((item) => {
      dispatch(setCheckedItemOnCart({ ...item, isChecked: !hasChecked }));
    });
  };
  const handlePurchasePress = () => {
    navigation.navigate("Booking");
  };
  const dispatch = useDispatch();
  const handleGetListUserCart = () => {};
  useEffect(() => {
    handleGetListUserCart();
  }, []);

  return (
    <View style={styles.mainWrapper}>
      <FlatList
        data={cartData}
        ListEmptyComponent={() => {
          return <EmptyList />;
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.cartItemWrapper} key={item?.productId}>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  isChecked={item?.isChecked}
                  onClick={() =>
                    dispatch(
                      setCheckedItemOnCart({
                        ...item,
                        isChecked: !item?.isChecked,
                      })
                    )
                  }
                />
              </View>
              <View style={styles.imageWrapper}>
                <Image
                  style={styles.cartProductImage}
                  source={{ uri: item?.listImage?.[0] }}
                />
              </View>
              <View style={styles.itemDescWrapper}>
                <Text numberOfLines={1} style={styles.itemNameText}>
                  {item?.productName}
                </Text>
                <Text style={styles.itemPriceText}>
                  {moneyFormat({
                    money: item.price,
                    currency: "đ",
                  })}
                </Text>
                <View
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <MiniNumberInput
                    number={item?.quantities}
                    containerStyle={{ width: 120, marginRight: 60 }}
                    minusPress={() => {
                      if (item?.quantities === 1) {
                        dispatch(deleteItemOnCart(item));
                      } else {
                        dispatch(
                          changeQuantitiesItemOnCart({
                            ...item,
                            quantities: Math.max(item?.quantities - 1, 1),
                          })
                        );
                      }
                    }}
                    plusPress={() =>
                      dispatch(
                        changeQuantitiesItemOnCart({
                          ...item,
                          quantities: item?.quantities + 1,
                        })
                      )
                    }
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(deleteItemOnCart(item));
                  }}
                  style={styles.deleteIcon}
                >
                  <BinIcon />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.cartFooterWrapper}>
        <View style={styles.chooseAllWrapper}>
          <CheckBox
            onClick={handleChooseAll}
            isChecked={cartData.every((item) => item.isChecked)}
          />
          <Text style={{ fontSize: 18, marginLeft: 8 }}>Tất cả</Text>
        </View>
        <View style={styles.footerRightSideWrapper}>
          <TouchableOpacity
            style={[
              styles.buttonPurchase,
              0 === cartData.filter((item) => item?.isChecked).length && {
                opacity: 0.65,
              },
            ]}
            disabled={0 === cartData.filter((item) => item?.isChecked).length}
            onPress={handlePurchasePress}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Thanh toán ({cartData.filter((item) => item?.isChecked).length})
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
