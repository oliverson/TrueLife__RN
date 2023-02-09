export default {
  AuthStack: {
    name: "AUTH_STACK",
    props: {
      initialRouteName: "AUTH_STACK_SIGN_IN",
    },
    modeScreen: "STACK",
    screens: {
      ForgotUserName: {
        modeScreen: "SCREEN",
        name: "AUTH_SCREEN_FORGOT_USERNAME",
        screenName: "ForgotUserName",
        props: {
          options: { headerShown: false, animationEnabled: false },
        },
      },
      ForgotUserNameResult: {
        modeScreen: "SCREEN",
        name: "AUTH_SCREEN_FORGOT_USERNAME_RESULTS",
        screenName: "ForgotUserNameResult",
        props: {
          options: { headerShown: false, animationEnabled: false },
        },
      },
      SignIn_SignUp: {
        modeScreen: "SCREEN",
        name: "AUTH_STACK_SIGN_IN",
        screenName: "SignIn_SignUp",
        props: {
          options: { headerShown: false, animationEnabled: false },
        },
      },
      ForgotPassword: {
        modeScreen: "SCREEN",
        name: "AUTH_STACK_FORGOT_PASSWORD",
        screenName: "ForgotPassword",
        props: {
          options: { headerShown: false, animationEnabled: false },
        },
      },
      ResetPassword: {
        modeScreen: "SCREEN",
        name: "AUTH_STACK_RESET_PASSWORD",
        screenName: "ResetPassword",
        props: {
          options: { headerShown: false, animationEnabled: false },
        },
      },
      SignUpConfirm: {
        modeScreen: "SCREEN",
        name: "AUTH_STACK_SIGN_UP_CONFIRM",
        screenName: "SignUpConfirm",
        props: {
          options: { headerShown: false, animationEnabled: false },
        },
      },
    },
  },
};
