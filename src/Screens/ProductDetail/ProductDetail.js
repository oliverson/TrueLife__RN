import {
  Image,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import NavBarBottom from "../../Components/NavBarBottom/NavBarBottom";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import NumberInput from "../../Components/NumberInput/NumberInput";
import { getProductDetails } from "../../Store/Production/service";
import { moneyFormat } from "../../Utils/currency";
import { addToCart } from "../../Store/Production/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCardDataSelector } from "../../Store/Production/selectors";
export default function ProductDetail() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [currentId, setCurrentId] = useState(route?.params?.data?.productId);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeImage, setActiveImage] = useState();
  const fetchDetails = async () => {
    setLoading(true);
    try {
      const res = await getProductDetails(currentId);
      setData(res.data.data);
    } catch (e) {
      console.log("error", e);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchDetails();
  }, [currentId]);

  React.useEffect(() => {
    setActiveImage(data?.listImage?.[0]);
  }, [data]);
  const handleSubImagePress = (item) => {
    setActiveImage(item);
  };
  const handleKindItemPress = () => {};
  return loading ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>
  ) : (
    <View style={styles.mainWrapper}>
      <ScrollView>
        <View style={styles.productDetailWrapper}>
          <View style={styles.productImageWrapper}>
            <Image
              style={styles.productMainImage}
              resizeMode="contain"
              source={{
                uri: activeImage,
              }}
            />
            <View style={{ width: "100%", height: 100, position: "relative" }}>
              <ScrollView
                style={[styles.productSubImageWrapper]}
                horizontal={true}
              >
                {data?.listImage?.map((item) => (
                  <TouchableOpacity
                    style={[
                      styles.productSubImage,
                      { opacity: item === activeImage ? 0.5 : 1 },
                    ]}
                    key={item}
                    onPress={() => handleSubImagePress(item)}
                  >
                    <Image style={{ flex: 1 }} source={{ uri: item }} />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.productNameWrapper}>
            <View style={styles.productName}>
              <Text style={styles.productNameText} numberOfLines={2}>
                {data?.productName}
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
                  {moneyFormat({
                    money: data?.priceDiscount,
                  })}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                <Text style={styles.productPriceTitle}>Giá gốc:</Text>
                <Text style={styles.productPriceOriginalText}>
                  {moneyFormat({
                    money: data?.price,
                  })}
                </Text>
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
                {data?.trademark}
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
                {data?.statusProduct}
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
                <TouchableOpacity
                  style={styles.kindActiveItem}
                  onPress={() => handleKindItemPress()}
                >
                  <Text style={[styles?.kindItemName]}>{data?.natureName}</Text>
                </TouchableOpacity>
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
            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(data));
                // alert("Thêm thành công");
              }}
              style={{
                width: 200,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fb7088",
                borderRadius: 8,
                marginVertical: 20,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  color: "#FFF",
                }}
              >
                Thêm vào giỏ hàng
              </Text>
            </TouchableOpacity>
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
                {data?.describe}
              </Text>
            </View>
          </View>
          <View style={[styles.productNameWrapper]}>
            <Text style={styles.productRelevantText}>Sản phẩm liên quan</Text>
            <ScrollView style={styles.productRelevantScroll} horizontal={true}>
              <View style={styles.productRelevantWrapper}>
                {data?.listProductRelateTo?.map((item) => (
                  <TouchableOpacity
                    onPress={() => {
                      setCurrentId(item.productId);
                    }}
                    style={styles.relevantProductItem}
                  >
                    <Image
                      style={styles.relevantProductItemImage}
                      source={{ uri: item?.avatar }}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        marginTop: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ marginBottom: 5 }} numberOfLines={2}>
                        {item?.productName}
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#fb7088",
                          fontWeight: "bold",
                        }}
                      >
                        {moneyFormat({ money: item?.price, currency: "đ" })}
                      </Text>
                    </View>
                  </TouchableOpacity>
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
