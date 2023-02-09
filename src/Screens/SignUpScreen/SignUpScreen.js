import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import image from "../../assets/images/background/LoginBg.png";
import { useForm } from "react-hook-form";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import validationSchema from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../Components/Input";
import { signup, signUp } from "../../Store/Auth/service";
import { signUpActions } from "../../Store/Auth/actions";
import { useDispatch } from "react-redux";
import { RETCODE_SUCCESS, SUCCESS } from "../../config/constants";
import { showAlert } from "../../Store/alert/actions";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
  const form = useForm({
    resolver: yupResolver(validationSchema()),
    mode: "all",
  });
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const onSubmit = async () => {
    // dispatch(
    //   signUpActions({
    //     userName: form.getValues("username"),
    //     email: form.getValues("email"),
    //     phone: form.getValues("phone"),
    //     password: form.getValues("password"),
    //     confirmPassword: form.getValues("repassword"),
    //   })
    // );
    try {
      const res = await signup({
        userName: form.getValues("username"),
        email: form.getValues("email"),
        phone: form.getValues("phone"),
        password: form.getValues("password"),
        confirmPassword: form.getValues("repassword"),
      });
      if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
        dispatch(
          showAlert({
            type: "success",
            message: res.data.retText,
          })
        );
        navigation.navigate("Login");
      } else {
        dispatch(
          showAlert({
            type: "error",
            message: res.data.retText,
          })
        );
      }
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
      }}
      style={{ height: "100%", width: "100%" }}
      enableOnAndroid={true}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.signUpBody}>
          <View style={styles.loginTitleWrapper}>
            <Text style={styles.loginTitle}>Đăng ký</Text>
          </View>
          <View style={styles.loginFormWrapper}>
            <Input
              name="username"
              containerStyle={styles.loginInput}
              placeholder={"Tên đăng nhập"}
              height={20}
              required
              placeholderTextColor="white"
              {...form}
            />
            <Input
              name="password"
              containerStyle={styles.loginInput}
              placeholder={"Mật khẩu"}
              isPassword={true}
              height={20}
              required
              placeholderTextColor="white"
              {...form}
            />
            <Input
              name="repassword"
              containerStyle={styles.loginInput}
              placeholder={"Xác nhận mật khẩu"}
              isPassword={true}
              height={20}
              required
              placeholderTextColor="white"
              {...form}
            />
            <Input
              name="email"
              containerStyle={styles.loginInput}
              placeholder={"Email"}
              height={20}
              placeholderTextColor="white"
              {...form}
            />

            <Input
              name="phone"
              containerStyle={styles.loginInput}
              placeholder={"Số điện thoại"}
              height={20}
              placeholderTextColor="white"
              {...form}
            />
          </View>
          <View style={styles.loginFooter}>
            <View style={styles.loginFooterPart}>
              <TouchableOpacity style={styles.loginButton} onPress={onSubmit}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 24,
                    width: "100%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  ĐĂNG KÝ
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    resizeMode: "cover",
    position: "absolute",
    opacity: 0.6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpBody: {
    width: "85%",
    borderRadius: 16,
    paddingHorizontal: 30,
    display: "flex",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    paddingBottom: 20,
  },
  loginTitleWrapper: {
    marginVertical: 20,
  },
  loginTitle: {
    fontSize: 40,
    color: "white",
  },
  loginNote: {
    color: "white",
    marginTop: 10,
  },
  loginInput: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: "transparent",
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    marginVertical: 10,
    borderRadius: 25,
  },
  loginFooter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 0,
    flex: 1,
    gap: 20,
  },
  loginFooterPart: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
  },
  loginSignUpText: {
    display: "flex",
    alignItems: "center",
    marginRight: 20,
    color: "white",
  },
  signUpText: {
    color: "#FA748F",
  },
  loginButton: {
    paddingVertical: 13,
    display: "flex",
    justifyContent: "center",
    width: "80%",
    backgroundColor: "#FA748F",
    borderRadius: 50,
  },
});
