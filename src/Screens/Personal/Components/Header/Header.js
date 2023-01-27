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
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.headerWrapper} onPress={() => navigation.navigate('MainInfoChange')}>
      <View style={styles.avatarWrapper}>
        <Image
          style={styles.avatarImage}
          source={{
            uri: "https://images.unsplash.com/photo-1674596346697-166368afebdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
          }}
        />
      </View>
      <View style={styles.descWrapper}>
        <Text numberOfLines={1} style={styles.loginNameText}>
          PGT1592000
        </Text>
        <Text style={styles.nameText}>P G T</Text>
        <View style={{flexDirection: 'row'}}>
            <Text style={[styles.emailText]}>pgt159@gmail.com</Text>
            <Text style={[styles.phoneText]}>01234556789</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
