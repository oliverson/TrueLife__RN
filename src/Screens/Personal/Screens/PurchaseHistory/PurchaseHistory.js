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
export default function PurchaseHistory() {
  const navigation = useNavigation();
  const [personalInfo, setPersonalInfo] = useState({
    name: "Phan Thuan",
    phone: "0909319641",
    address: "B386/15, kp3, DHT, Q12",
  });
  const historyList = [
    {
      code: "DH12345",
      date: "10/09/2022",
      address: "123 Nguyen Van Qua, Q12, HoChiMinh City",
      price: 120000,
      status: "done",
    },
    {
      code: "DH22222",
      date: "25/09/2022",
      address: "123 Nguyen Van Qua, Q12, HoChiMinh City",
      price: 120000,
      status: "pending",
    },
    {
      code: "DH33333",
      date: "10/10/2022",
      address: "123 Nguyen Van Qua, Q12, HoChiMinh City",
      price: 120000,
      status: "shipping",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainWrapper}>
          <View style={styles.formWrapper}>
            {historyList.map((item) => (
              <View style={styles.itemWrapper} key={item.code}>
                <View style={[styles.partWrapper, { flex: 1 }]}>
                  <Text style={styles.itemText}>{item.code}</Text>
                  <Text style={styles.itemText}>{item.date}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                </View>
                <View
                  style={[
                    styles.partWrapper,
                    { flex: 1.5, paddingHorizontal: 0 },
                  ]}
                >
                  <Text
                    style={[styles.itemText, { lineHeight: 20 }]}
                    numberOfLines={3}
                  >
                    {item.address}
                  </Text>
                </View>
                <View style={styles.partWrapper}>
                  <Text style={styles.itemText}>{item.status}</Text>
                </View>
                <TouchableOpacity style={styles.partWrapper} onPress={() => {navigation.navigate("PurchaseDetail")}}>
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
