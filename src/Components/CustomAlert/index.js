import { View, Text, Dimensions } from "react-native";
import React, { useEffect } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import AlertTypes from "./config";
import TouchableScale from "react-native-touchable-scale";
import { IconClose } from "./icons";
import { useDispatch } from "react-redux";
import { closeAlert } from "../../Store/alert/actions";

const styles = EStyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    zIndex: 9999999099,
    width: 500,
    alignItems: "center",
    marginTop: 10,
  },
  alert: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  iconWrapper: {
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    fontFamily: "$fontGothamB",
    lineHeight: 18,
  },
  message: {
    fontFamily: "$fontGothamM",
  },
  middle: {
    flex: 1,
  },
});

const CustomAlert = ({ type, title = "", message = "", duration = 3 }) => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeAlert());
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      close();
    }, duration * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <TouchableScale style={styles.container}>
      <View
        style={[
          styles.alert,
          {
            backgroundColor: AlertTypes[type].backgroundColor,
            borderColor: AlertTypes[type].borderColor,
            flexDirection: "row",
          },
        ]}
      >
        <View style={styles.iconWrapper}>{AlertTypes[type].icon}</View>

        <View style={styles.middle}>
          {!!title && (
            <Text style={[styles.title, { color: AlertTypes[type].title }]}>
              {title}
            </Text>
          )}
          <Text style={styles.message}>{message}</Text>
        </View>

        <TouchableScale
          onPress={close}
          hitSlop={{ top: 20, left: 20, right: 20, bottom: 20 }}
        >
          <IconClose />
        </TouchableScale>
      </View>
    </TouchableScale>
  );
};

export default CustomAlert;
