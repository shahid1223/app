import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const LogIn = () => {
  return (
    <View style={styles.logIn}>
      <Image
        style={[styles.maskGroupIcon, styles.logInItemPosition]}
        contentFit="cover"
        source={require("../assets/mask-group2.png")}
      />
      <View style={[styles.barsHomeIndicatorIphone, styles.barsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap9.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi9.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection9.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.password, styles.emailLayout]}>
        <Image
          style={[styles.passwordChild, styles.buttonLayout]}
          contentFit="cover"
          source={require("../assets/group-68031.png")}
        />
        <Text style={[styles.password1, styles.password1FlexBox]}>
          Password
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector56.png")}
        />
      </View>
      <View style={[styles.barsHomeIndicatorIphone1, styles.barsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={styles.buttonChild} />
        <Text style={[styles.logIn1, styles.logIn1Typo]}>Log In</Text>
      </View>
      <View style={[styles.email, styles.emailLayout]}>
        <View
          style={[styles.imshuvo97gmailcomParent, styles.groupChildPosition]}
        >
          <Text style={[styles.imshuvo97gmailcom, styles.logIn1Typo]}>
            imshuvo97@gmail.com
          </Text>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/vector-21.png")}
          />
        </View>
        <Text style={[styles.password1, styles.password1FlexBox]}>Email</Text>
      </View>
      <View style={styles.text}>
        <Text style={[styles.loging, styles.logIn1Typo1]}>Loging</Text>
        <Text style={[styles.enterYourEmails, styles.password1FlexBox]}>
          Enter your emails and password
        </Text>
      </View>
      <Text style={[styles.forgotPassword, styles.forgotPasswordLayout]}>
        Forgot Password?
      </Text>
      <Text style={[styles.dontHaveAnContainer, styles.forgotPasswordLayout]}>
        <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
        <Text style={styles.singup}>Singup</Text>
      </Text>
      <Image
        style={[styles.logInChild, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group-6893.png")}
      />
      <View style={[styles.logInItem, styles.logInItemPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  logInItemPosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  barsPosition: {
    opacity: 0.1,
    width: 148,
    left: 133,
    position: "absolute",
  },
  timeLayout: {
    lineHeight: 18,
    textAlign: "center",
  },
  emailLayout: {
    height: 79,
    width: 364,
    left: 25,
    position: "absolute",
  },
  buttonLayout: {
    width: 364,
    position: "absolute",
  },
  password1FlexBox: {
    textAlign: "left",
    left: 0,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logIn1Typo: {
    fontSize: FontSize.buttone16pxS_size,
    position: "absolute",
  },
  groupChildPosition: {
    top: 39,
    width: 364,
    left: 0,
    position: "absolute",
  },
  logIn1Typo1: {
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
  },
  forgotPasswordLayout: {
    height: 14,
    lineHeight: 15,
    letterSpacing: 0.7,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 0,
    height: 896,
    width: 414,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.darkDeep,
    width: 134,
    height: 5,
    position: "absolute",
  },
  barsHomeIndicatorIphone: {
    top: 859,
    height: 37,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.black,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 15,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 17,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 19,
    height: 11,
  },
  time: {
    marginTop: -7.5,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.black,
    width: 60,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "20.45%",
    right: "80%",
    bottom: "31.82%",
    left: "5.6%",
    position: "absolute",
  },
  statusBar: {
    marginTop: -443.17,
    right: "0.04%",
    left: "-0.04%",
    height: 44,
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  passwordChild: {
    top: 50,
    height: 29,
    left: 0,
  },
  password1: {
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    lineHeight: 29,
    top: 0,
  },
  vectorIcon: {
    height: "24.09%",
    width: "5.47%",
    top: "56.07%",
    bottom: "19.85%",
    left: "94.53%",
    right: "0%",
  },
  password: {
    top: 441,
  },
  barsHomeIndicatorIphone1: {
    top: 880,
    height: 16,
  },
  buttonChild: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_lgi,
    backgroundColor: Color.mediumseagreen_100,
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  logIn1: {
    top: "36.57%",
    left: "43.12%",
    color: Color.ghostwhite,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 18,
  },
  button: {
    top: 583,
    height: 67,
    left: 25,
  },
  imshuvo97gmailcom: {
    color: Color.darkDeep,
    fontFamily: FontFamily.gilroyMediumRegular,
    textAlign: "left",
    left: 0,
    lineHeight: 29,
    top: 0,
  },
  groupChild: {
    height: 1,
  },
  imshuvo97gmailcomParent: {
    height: 40,
  },
  email: {
    top: 332,
  },
  loging: {
    fontSize: FontSize.size_7xl,
    color: Color.darkDeep,
    lineHeight: 29,
    top: 0,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  enterYourEmails: {
    top: 44,
    lineHeight: 15,
    fontFamily: FontFamily.gilroyMediumRegular,
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    top: 233,
    width: 233,
    height: 59,
    left: 25,
    position: "absolute",
  },
  forgotPassword: {
    top: 539,
    left: 264,
    width: 125,
    color: Color.darkDeep,
    fontFamily: FontFamily.gilroyMediumRegular,
  },
  dontHaveAn: {
    color: Color.darkDeep,
  },
  singup: {
    color: Color.mediumseagreen_100,
  },
  dontHaveAnContainer: {
    top: 675,
    left: 93,
    width: 228,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
  },
  logInChild: {
    height: "7.1%",
    width: "13.49%",
    top: "8.62%",
    right: "43.26%",
    bottom: "84.28%",
    left: "43.26%",
  },
  logInItem: {
    top: 749,
    height: 147,
  },
  logIn: {
    backgroundColor: Color.gray_100,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default LogIn;
