import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import NavBarBottom from "../../Components/NavBarBottom/NavBarBottom";
import CategoryProducts from "./components/CategoryProducts/CategoryProducts";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  const [sliderWidth, setSliderWidth] = useState(400);
  const [currentFlatlistIndex, setCurrentFlatlistIndex] = useState(0);
  const [currentOffsetX, setCurrentOffsetX] = useState(0);
  const flatlistRef = useRef();

  const handleScroll = (e) => {
    setCurrentOffsetX(e.nativeEvent.contentOffset.x);
  };
  const carouselData = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      name: "Sản phẩm A",
      price: "1.900.000",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1670272502307-5539ca02550a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      name: "Sản phẩm A",
      price: "1.900.000",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1672957581665-bdc4a16b8347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      name: "Sản phẩm A",
      price: "1.900.000",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1672999997109-cdb98eb957e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Sản phẩm A",
      price: "1.900.000",
    },
  ];
  // const carouselInterval = setInterval(() => {
  //   const nextIndex = currentFlatlistItem + 1;
  //   setCurrentFlatlistItem(nextIndex);
  //   flatlistRef.current.scrollToIndex({ index, animated: true });
  // }, 4000);
  useEffect(() => {
    // carouselInterval();
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View key={item?.id} style={{ width: sliderWidth, height: 200 }}>
        <Image
          source={{ uri: item?.src }}
          style={{ width: "100%", aspectRatio: 1 }}
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
              data={carouselData}
              renderItem={renderItem}
              horizontal
            ></FlatList>
          </View>

          <View style={styles.bodyWrapper}>
            <View style={[styles.mainProductWrapper, { marginBottom: 10 }]}>
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
            </View>
            <CategoryProducts listData={carouselData} />
            <CategoryProducts
              listData={carouselData}
              title={"Sản phẩm khuyến mãi"}
            />
            <CategoryProducts
              listData={carouselData}
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
