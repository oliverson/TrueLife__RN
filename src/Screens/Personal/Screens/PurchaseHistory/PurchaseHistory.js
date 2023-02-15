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
import {
  listCartUserSelector,
  userDataSelector,
} from "../../../../Store/Auth/selectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getInforUserCart } from "../../../../Store/Auth/service";
import { RETCODE_SUCCESS, SUCCESS } from "../../../../config/constants";
export default function PurchaseHistory() {
  const navigation = useNavigation();
  const getListCartUser = useSelector(listCartUserSelector);

  // const getHistoryOrder = async () => {
  //   try {
  //     const res = await getInforUserCart({
  //       userId: userData.userId,
  //     });
  //     console.log("res", res.data);
  //     if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
  //       alert("OKOK");
  //     } else {
  //       alert(res.data.retText);
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //   } finally {
  //   }
  // };
  // useEffect(() => {
  //   getHistoryOrder();
  // }, []);
  // console.log("getHistoryOrder", getHistoryOrder);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainWrapper}>
          <View style={styles.formWrapper}>
            {getListCartUser.map((item) => (
              <View style={styles.itemWrapper} key={item?.orderId}>
                <View style={[styles.partWrapper, { flex: 1 }]}>
                  {/* <Text style={styles.itemText}>{item?.fullName}</Text> */}
                  <Text style={[styles.itemText, { color: "red" }]}>
                    {"Tổng tiền"}
                  </Text>
                  <Text style={styles.itemPrice}>{item?.total}</Text>
                </View>
                <View
                  style={[
                    styles.partWrapper,
                    { flex: 1.5, paddingHorizontal: 0 },
                  ]}
                >
                  <Text style={[styles.itemText, { color: "red" }]}>
                    {"Địa chỉ"}
                  </Text>
                  <Text
                    style={[styles.itemText, { lineHeight: 20 }]}
                    numberOfLines={1}
                  >
                    {item?.infoAddressDeliveryUser?.address}
                    {", "}
                    {item?.infoAddressDeliveryUser?.districtName}
                    {", "}
                    {item?.infoAddressDeliveryUser?.provinceName}
                  </Text>
                </View>
                <View style={styles.partWrapper}>
                  <Text style={[styles.itemText, { color: "red" }]}>
                    {"Trạng thái"}
                  </Text>
                  <Text style={styles.itemText}>{item?.status}</Text>
                </View>
                <TouchableOpacity
                  style={styles.partWrapper}
                  onPress={() => {
                    navigation.navigate("PurchaseDetail");
                  }}
                >
                  <Text style={styles.viewText}>Xem</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <NavBarBottom />
    </View>
  );
}
