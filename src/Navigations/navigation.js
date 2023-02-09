import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Booking from "../Screens/Booking/Booking";
import Contact from "../Screens/Contact/Contact";
import Home from "../Screens/Home/Home";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import Personal from "../Screens/Personal/Personal";
import AddressList from "../Screens/Personal/Screens/AddressList/AddressList";
import ChangePassword from "../Screens/Personal/Screens/ChangePassword/ChangePassword";
import MainInfoChange from "../Screens/Personal/Screens/MainInfoChange/MainInfoChange";
import PurchaseDetail from "../Screens/Personal/Screens/PurchaseDetail/PurchaseDetail";
import PurchaseHistory from "../Screens/Personal/Screens/PurchaseHistory/PurchaseHistory";
import UpdateAddress from "../Screens/Personal/Screens/UpdateAddress/UpdateAddress";
import Product from "../Screens/Product/Product";
import ProductDetail from "../Screens/ProductDetail/ProductDetail";
import ServiceSelect from "../Screens/ServiceSelect/ServiceSelect";
import SignUpScreen from "../Screens/SignUpScreen/SignUpScreen";
import YourCart from "../Screens/YourCart/YourCart";
import { ROUTES } from "../config/constants";
import { Title } from "react-native-paper";
import { HomeIcon } from "../assets/svg";
const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FA748F" },
        headerLeftContainerStyle: { flex: 1 },
        headerTintColor: "white",
        headerTitleStyle: { color: "white" },
      }}
      // initialRouteName={ROUTES.HOME}
    >
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={LoginScreen}
        options={(route) => ({ title: "Đăng Nhập" })}
      />
      <Stack.Screen name={ROUTES.SIGN_UP} component={SignUpScreen} />
      <Stack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={(route) => ({ title: "Trang chủ" })}
      />
      <Stack.Screen
        name={ROUTES.CONTACT}
        component={Contact}
        options={(route) => ({ title: "Liên hệ" })}
      />
      <Stack.Screen
        name={ROUTES.BOOKING}
        component={Booking}
        options={(route) => ({ title: "Đơn hàng" })}
      />
      <Stack.Screen
        name={ROUTES.PRODUCT}
        component={Product}
        options={(route) => ({ title: "Danh mục" })}
      />
      <Stack.Screen
        name={ROUTES.PRODUCT_DETAIL}
        component={ProductDetail}
        options={(route) => ({ title: "Chi tiết" })}
      />
      <Stack.Screen
        name={ROUTES.SELECT_SERVICE}
        component={ServiceSelect}
        options={(route) => ({ title: "Chọn dịch vụ" })}
      />
      <Stack.Screen
        name={ROUTES.YOUR_CART}
        component={YourCart}
        options={(route) => ({ title: "Giỏ hàng" })}
      />
      <Stack.Screen
        name={ROUTES.PERSONAL}
        component={Personal}
        options={(route) => ({ title: "Cá nhân" })}
      />
      <Stack.Screen
        name={ROUTES.MAIN_INFO_CHANGE}
        component={MainInfoChange}
        options={(route) => ({ title: "Thông tin cá nhân" })}
      />
      <Stack.Screen
        name={ROUTES.ADDRESS_LIST}
        component={AddressList}
        options={(route) => ({ title: "Địa chỉ" })}
      />
      <Stack.Screen
        name={ROUTES.UPDATE_ADDRESS}
        component={UpdateAddress}
        options={(route) => ({ title: "Địa chỉ" })}
      />
      <Stack.Screen
        name={ROUTES.CHANGE_PASS}
        component={ChangePassword}
        options={(route) => ({ title: "Đổi mật khẩu" })}
      />
      <Stack.Screen
        name={ROUTES.PUR_HISTORY}
        component={PurchaseHistory}
        options={(route) => ({ title: "Lịch sử đơn hàng" })}
      />
      <Stack.Screen
        name={ROUTES.PUR_DETAIL}
        component={PurchaseDetail}
        options={(route) => ({ title: "Chi tiết đơn hàng" })}
      />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator></Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
