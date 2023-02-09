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
import { getListProductsContent } from "../../Store/Production/service";
import { useEffect } from "react";
import { RETCODE_SUCCESS, SUCCESS } from "../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import { getListProductsContentActions } from "../../Store/Production/actions";
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
  };
  const mockDataListProduct = [
    {
      id: 0,
      name: "Trang điểm",
      list: [
        {
          id: 0,
          name: "Son Môi",
          listProduct: [
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
          ],
        },
        {
          id: 1,
          name: "Trang điểm mặt",
          listProduct: [
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
          ],
        },
        {
          id: 2,
          name: "Công cụ trang điểm",
          listProduct: [
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
          ],
        },
        {
          id: 3,
          name: "Tẩy trang",
          listProduct: [
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
          ],
        },
      ],
    },
    {
      id: 1,
      name: "Dưỡng da",
      list: [
        {
          id: 4,
          name: "Dưỡng ẩm",
          listProduct: [
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
          ],
        },
        {
          id: 5,
          name: "Mặt nạ",
          listProduct: [
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
          ],
        },
        {
          id: 6,
          name: "Xịt khoáng",
          listProduct: [
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
          ],
        },
        {
          id: 7,
          name: "Nước hoa hồng",
          listProduct: [
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
          ],
        },
        {
          id: 8,
          name: "Sữa rửa mặt",
          listProduct: [
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
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Chăm sóc cơ thể",
      list: [
        {
          id: 9,
          name: "Sữa tắm",
          listProduct: [
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
          ],
        },
        {
          id: 10,
          name: "Dưỡng thể",
          listProduct: [
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
          ],
        },
        {
          id: 11,
          name: "Nước hoa",
          listProduct: [
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
          ],
        },
        {
          id: 12,
          name: "Chăm sóc tóc",
          listProduct: [
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
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Ưu đãi",
      list: [
        {
          id: 13,
          name: "Sale 50%",
          listProduct: [
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
          ],
        },
        {
          id: 14,
          name: "Tặng kèm sản phẩm",
          listProduct: [
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
          ],
        },
      ],
    },
  ];

  // const [dataListProducts, setDataListProducts] = useState("");
  // console.log("LISTDATA", dataListProducts);
  const dispatch = useDispatch();
  const handleGetListDataProducts = () => {
    dispatch(getListProductsContentActions());
  };
  const handleProductPress = (item) => {
    navigation.navigate("ProductDetail");
  };

  useEffect(() => {
    handleGetListDataProducts();
  }, []);
  const dataListProducts = useSelector(productListProductContentDataSelector);

  console.log(
    "dataListProductsContent",
    JSON.stringify(dataListProducts, null, 4)
  );
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
            {listProduct?.map((item) => (
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
