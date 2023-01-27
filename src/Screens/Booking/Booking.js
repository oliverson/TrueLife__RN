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
import { LocationIcon } from "../../assets/svg";
import CheckBox from "../../Components/CheckBox/CheckBox";

export default function Product() {
  const [currentItem, setCurrentItem] = useState({ id: 0, name: "Son Môi" });
  const navigation = useNavigation();
  const [personalInfo, setPersonalInfo] = useState({
    name: "Phan Thuan",
    phone: "0909319641",
    address: "B386/15, kp3, DHT, Q12",
  });
  const [productList, setProductList] = useState([
    {
      id: "001",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "002",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "003",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "004",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "005",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "006",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
    {
      id: "007",
      quantity: 2,
      name: "CHANEL COCO MADEMOISELLE",
      price: "2.450.000đ",
      img: "https://images.unsplash.com/photo-1674043701161-9c15f4d8b205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    },
  ]);

  const ProductItem = (item) => (
    <View style={styles.productItemWrapper}>
      <View style={styles.imageWrapper}>
        <Image style={styles.productImage} source={{ uri: item?.img }} />
      </View>
      <View style={styles.productItemDescWrapper}>
        <Text numberOfLines={2} style={{ fontSize: 16 }}>
          {item?.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "stretch",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 15, color: "#999999" }}>{item?.price}</Text>
          <Text style={{ fontSize: 15, color: "#999999" }}>
            x{item?.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.mainWrapper}>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={styles.bookingArticle}>
            <Text style={styles.addressTitle}>Địa chỉ nhận hàng</Text>
            <TouchableOpacity style={styles.addressWrapper}>
              <View style={{ flexDirection: "column", flex: 1 }}>
                <Text style={styles.addressDesc}>{personalInfo.name}</Text>
                <Text style={styles.addressDesc}>{personalInfo.phone}</Text>
                <Text style={styles.addressDesc}>{personalInfo.address}</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.addressDesc}>Sửa</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bookingArticle}>
            <Text style={styles.addressTitle}>Danh sách sản phẩm</Text>
            <View>{productList.map((item) => ProductItem(item))}</View>
          </View>
          <View style={styles.bookingArticle}>
            <Text
              style={[
                styles.addressTitle,
                {
                  textAlign: "center",
                  marginHorizontal: 30,
                  marginBottom: 10,
                },
              ]}
            >
              Thông tin đơn hàng
            </Text>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 16 }}>Phương thức thanh toán</Text>
              <TouchableOpacity style={styles.paymentMethodOption}>
                <Text style={{ fontSize: 16 }}>Thanh toán khi nhận hàng</Text>
                <CheckBox />
              </TouchableOpacity>
              <TouchableOpacity style={styles.paymentMethodOption}>
                <Text style={{ fontSize: 16 }}>Thẻ tín dụng</Text>
                <CheckBox />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 8,
                  padding: 8,
                }}
              >
                <Text style={{ fontSize: 16 }}>Chọn dịch vụ quà tặng</Text>
                <CheckBox onClick={() => navigation.navigate("ServiceSelect")}/>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  marginBottom: 8,
                  paddingHorizontal: 8,
                }}
              >
                <Text style={{ fontSize: 16 }}>Mã giảm giá</Text>
                <View style={styles.textInputWrapper}>
                  <TextInput
                    placeholder="Nhập mã..."
                    placeholderTextColor="#999999"
                    style={styles.codeInput}
                  />
                  <TouchableOpacity style={styles.applySaleCodeBtn}>
                    <Text style={styles.applySaleCodeText}>Áp dụng</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.bookingArticle, {padding: 16}]}>
            <View style={styles.receiptInfoWrapper}>
                <Text style={styles.receiptInfoText}>Số lượng:</Text>
                <Text style={styles.receiptInfoText}>4</Text>
            </View>
            <View style={styles.receiptInfoWrapper}>
                <Text style={styles.receiptInfoText}>Tạm tính:</Text>
                <Text style={styles.receiptInfoText}>5.250.000đ</Text>
            </View>
            <View style={styles.receiptInfoWrapper}>
                <Text style={styles.receiptInfoText}>Phí vận chuyển:</Text>
                <Text style={styles.receiptInfoText}>25.000đ</Text>
            </View>
            <View style={styles.receiptInfoWrapper}>
                <Text style={styles.receiptInfoText}>Phí dịch vụ:</Text>
                <Text style={styles.receiptInfoText}>0đ</Text>
            </View>
            <View style={styles.receiptInfoWrapper}>
                <Text style={styles.receiptInfoText}>Giảm:</Text>
                <Text style={styles.receiptInfoText}>0đ</Text>
            </View>
            <View style={styles.receiptInfoWrapper}>
                <Text style={styles.receiptInfoText}>Thành tiền:</Text>
                <Text style={[styles.receiptInfoText, {color: '#fb7088', fontWeight: 'bold'}]}>5.275.000đ</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bookingFooterWrapper}>
        <View style={styles.footerLeftSideWrapper}>
          <Text style={{ color: "#999999", fontSize: 16 }}>
            Tổng thanh toán
          </Text>
          <Text style={{ color: "#fb7088", fontSize: 17, fontWeight: "bold" }}>
            10.000.000đ
          </Text>
        </View>
        <View style={styles.footerRightSideWrapper}>
          <TouchableOpacity style={styles.buttonPurchase}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>
              ĐẶT HÀNG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
