import { View, Text } from "react-native";
import React from "react";
import MainNavigator from "./Navigations/navigation";
import CustomAlert from "./Components/CustomAlert";
import { alertDataSelector } from "./Store/alert/selectors";
import { useSelector } from "react-redux";

const Bootstrap = () => {
  const alertData = useSelector(alertDataSelector);

  return (
    <>
      {alertData?.show && (
        <CustomAlert
          type={alertData?.type} // success | error | warning | info
          message={alertData?.message} // string
          title={alertData?.title} // string?
          duration={alertData?.duration} // number (default: 3 [s])
        />
      )}
      <MainNavigator></MainNavigator>
    </>
  );
};

export default Bootstrap;
