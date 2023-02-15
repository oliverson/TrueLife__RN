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
// import { useDispatch } from "react-redux";
// import { signIn } from "../../Store/Auth/actions";
// import useFetch from '../../Store/useFetch';
import { signIn } from "../../Store/Auth/service";
import validationSchema from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Provider, useDispatch, useSelector } from "react-redux";
import Input from "../../Components/Input";
import { getProfileUser, loginActions } from "../../Store/Auth/actions";
import { login } from "../../Store/Auth/service";
import { showAlert } from "../../Store/alert/actions";
import { RETCODE_SUCCESS, SUCCESS } from "../../config/constants";
import { userDataSelector } from "../../Store/Auth/selectors";

export default function LoginScreen(props) {
  const form = useForm({
    resolver: yupResolver(validationSchema()),
    mode: "all",
  });
  const { navigation } = props;
  const dispatch = useDispatch();
  const userData = useSelector(userDataSelector);
  console.log("userData LOGIN", userData);
  // const onSubmit = async () => {
  //   dispatch(
  //     loginActions({
  //       userName: form.getValues("username"),
  //       passWord: form.getValues("password"),
  //     })
  //   );
  //   try {
  //     const res = await login({
  //       userName: form.getValues("username"),
  //       passWord: form.getValues("password"),
  //     });

  //     if (res.status === SUCCESS && res.data.retCode === RETCODE_SUCCESS) {
  //       // const dataUser = res.data;
  //       // dispatch(
  //       //   getProfileUser({
  //       //     dataUser,
  //       //   })
  //       // );
  //       dispatch(
  //         showAlert({
  //           type: "success",
  //           message: res.data.retText,
  //         })
  //       );
  //       navigation.navigate("Home");
  //     } else {
  //       dispatch(
  //         showAlert({
  //           type: "error",
  //           message: res.data.retText,
  //         })
  //       );
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //   } finally {
  //   }
  // };
  const onSubmit = () => {
    dispatch(
      loginActions({
        userName: form.getValues("username"),
        passWord: form.getValues("password"),
      })
    );
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
        <View style={styles.loginBody}>
          <View style={styles.loginTitleWrapper}>
            <Text style={styles.loginTitle}>Đăng nhập</Text>
            <Text style={styles.loginNote}>Vui lòng đăng nhập để tiếp tục</Text>
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
          </View>
          <View style={styles.loginFooter}>
            <View style={styles.loginFooterPart}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={onSubmit}
                // onPress={() => {
                //   navigation.navigate("Home");
                // }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 24,
                    width: "100%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  ĐĂNG NHẬP
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginFooterPart}>
              <Text style={styles.loginSignUpText}>
                Bạn có tài khoản không?{" "}
              </Text>
              <Pressable
                style={styles.loginSignUpLink}
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text style={styles.signUpText}>Đăng ký ngay</Text>
              </Pressable>
            </View>
            {/* <View style={styles.loginFooterPart}>
              <Text style={styles.loginSignUpText}>Quên mật khẩu? </Text>
              <Pressable style={styles.loginSignUpLink}
              onPress={() => {
                  navigation.navigate("");
                }}>
                <Text style={styles.signUpText}>Nhấp vào đây</Text>
              </Pressable>
            </View> */}
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
  loginBody: {
    width: "85%",
    borderRadius: 16,
    paddingHorizontal: 30,
    display: "flex",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  loginFormWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    width: "100%",
  },
  loginFooter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    paddingBottom: 15,
    minHeight: 0,
    flex: 1,
    gap: 20,
    // backgroundColor: 'white'
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
