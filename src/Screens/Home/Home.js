import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import NavBarBottom from "../../Components/NavBarBottom/NavBarBottom";
import CategoryProducts from "./components/CategoryProducts/CategoryProducts";
import { ScrollView } from "react-native-gesture-handler";

import { RETCODE_SUCCESS, SUCCESS } from "../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  getListProductsContentActions,
  getTopSixNewProductsActions,
  getTopSixProductsPromotionActions,
  getTopSixSellingProductsActions,
} from "../../Store/Production/actions";
import {
  productSixNewProductDataSelector,
  productSixProductPromotionDataSelector,
  productSixSellingProductDataSelector,
} from "../../Store/Production/selectors";

export default function Home() {
  const [sliderWidth, setSliderWidth] = useState(200);
  const [currentFlatlistIndex, setCurrentFlatlistIndex] = useState(0);
  const [currentOffsetX, setCurrentOffsetX] = useState(0);
  const flatlistRef = useRef();
  // const [dataTopSixNewProducts, setDataTopSixNewProducts] = useState("");
  const dataTopSixSellingProducts = useSelector(
    productSixSellingProductDataSelector
  );
  const dataTopSixNewProducts = useSelector(productSixNewProductDataSelector);
  const dataTopSixProductsPromotion = useSelector(
    productSixProductPromotionDataSelector
  );
  const handleScroll = (e) => {
    setCurrentOffsetX(e.nativeEvent.contentOffset.x);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getTopSixProductsPromotionActions());
    // dispatch(getTopSixSellingProductsActions());
    // dispatch(getTopSixNewProductsActions());
    // dispatch(getListProductsContentActions());
  }, []);
  // console.log("dataTopSixSellingProducts", dataTopSixSellingProducts);
  // console.log("dataTopSixNewProducts", dataTopSixNewProducts);

  const renderItem = ({ item }) => {
    return (
      <View key={item?.id} style={{ width: sliderWidth, height: 200 }}>
        <Image
          source={{ uri: item?.avatar }}
          style={{ width: "100%", height: "70%" }}
          resizeMode="contain"
        />
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#fef4f3" }}>
        <View style={styles.mainWrapper}>
          <View style={[styles.carouselWrapper, { marginVertical: 10 }]}>
            <FlatList
              onScroll={handleScroll}
              ref={flatlistRef}
              onLayout={(e) => {
                setSliderWidth(e.nativeEvent.layout.width);
              }}
              onScrollEndDrag={() => {
                const index = Math.floor(
                  (currentOffsetX + 0.5 * sliderWidth) / sliderWidth
                );
                if (!!flatlistRef?.current) {
                  flatlistRef?.current?.scrollToIndex({
                    index: index,
                    animated: true,
                  });
                  setCurrentFlatlistIndex(index);
                }
              }}
              showsHorizontalScrollIndicator={false}
              data={dataTopSixNewProducts}
              renderItem={renderItem}
              horizontal
            ></FlatList>
          </View>

          <View style={styles.bodyWrapper}>
            {/* <View style={[styles.mainProductWrapper, { marginBottom: 10 }]}>
              <View style={[styles.col, { flex: 0.4 }]}>
                <View style={[styles.row60]}>
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1672999997109-cdb98eb957e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                    }}
                    resizeMethod={"resize"}
                    resizeMode={"stretch"}
                    style={styles.bannerImage}
                  />
                </View>
                <View style={[styles.row40]}>
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1672957581665-bdc4a16b8347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                    }}
                    resizeMethod={"resize"}
                    style={styles.bannerImage}
                  />
                </View>
              </View>
              <View
                style={[
                  styles.col,
                  {
                    flex: 0.6,
                    marginLeft: 20,
                  },
                ]}
              >
                <View style={[styles.row40]}>
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
                    }}
                    resizeMethod={"resize"}
                    style={styles.bannerImage}
                  />
                </View>
                <View style={[styles.row60]}>
                  <Image
                    source={{
                      uri: "https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
                    }}
                    resizeMethod={"resize"}
                    style={styles.bannerImage}
                  />
                </View>
              </View>
            </View> */}
            <CategoryProducts
              title={"Sản phẩm bán chạy"}
              listData={dataTopSixSellingProducts}
            />
            <CategoryProducts
              // listData={dataTopSixProductsPromotion}
              title={"Sản phẩm khuyến mãi"}
            />
            <CategoryProducts
              listData={dataTopSixNewProducts}
              title={"Sản phẩm mới"}
              style={{ marginBottom: 50 }}
            />
          </View>
        </View>
      </ScrollView>
      <NavBarBottom></NavBarBottom>
    </View>
  );
}
