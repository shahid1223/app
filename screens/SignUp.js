import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <Image
        style={[styles.maskGroupIcon, styles.borderPosition]}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <View style={[styles.barsHomeIndicatorIphone, styles.barsPosition]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap9.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
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
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.password, styles.emailLayout]}>
        <Image
          style={[styles.passwordChild, styles.buttonLayout]}
          contentFit="cover"
          source={require("../assets/group-6803.png")}
        />
        <Text style={[styles.password1, styles.signUp1FlexBox]}>Password</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector54.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector55.png")}
      />
      <View style={[styles.barsHomeIndicatorIphone1, styles.barsPosition]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={styles.buttonChild} />
        <Text style={[styles.singUp, styles.singUpTypo]}>Sing Up</Text>
      </View>
      <View style={[styles.email, styles.emailLayout]}>
        <View
          style={[styles.imshuvo97gmailcomParent, styles.groupChildPosition]}
        >
          <Text style={[styles.imshuvo97gmailcom, styles.singUpTypo]}>
            imshuvo97@gmail.com
          </Text>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/vector-2.png")}
          />
        </View>
        <Text style={[styles.password1, styles.signUp1FlexBox]}>Email</Text>
      </View>
      <View style={[styles.email2, styles.emailLayout]}>
        <View
          style={[styles.imshuvo97gmailcomParent, styles.groupChildPosition]}
        >
          <Text style={[styles.imshuvo97gmailcom, styles.singUpTypo]}>
            Afsar Hossen Shuvo
          </Text>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/vector-21.png")}
          />
        </View>
        <Text style={[styles.password1, styles.signUp1FlexBox]}>Username</Text>
      </View>
      <View style={styles.text}>
        <Text style={[styles.signUp1, styles.signUp1FlexBox]}>Sign Up</Text>
        <Text style={[styles.enterYourCredentials, styles.signUp1FlexBox]}>
          Enter your credentials to continue
        </Text>
      </View>
      <Text style={[styles.byContinuingYouContainer, styles.containerTypo]}>
        <Text style={styles.byContinuingYou}>
          By continuing you agree to our
        </Text>
        <Text style={styles.text1}>{` `}</Text>
        <Text style={styles.termsOfService}>{`Terms of Service
`}</Text>
        <Text style={styles.byContinuingYou}>and</Text>
        <Text style={styles.text1}>{` `}</Text>
        <Text style={styles.termsOfService}>Privacy Policy.</Text>
      </Text>
      <Text style={[styles.alreadyHaveAnContainer, styles.containerTypo]}>
        <Text style={styles.text1}>{`Already have an account? `}</Text>
        <Text style={styles.termsOfService}>Singup</Text>
      </Text>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  barsPosition: {
    opacity: 0.1,
    width: 148,
    left: 133,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.black,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    lineHeight: 18,
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
  signUp1FlexBox: {
    textAlign: "left",
    left: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  singUpTypo: {
    fontSize: FontSize.buttone16pxS_size,
    position: "absolute",
  },
  groupChildPosition: {
    top: 39,
    width: 364,
    left: 0,
    position: "absolute",
  },
  containerTypo: {
    lineHeight: 15,
    letterSpacing: 0.7,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  maskGroupIcon: {
    width: 414,
    left: 0,
    height: 896,
    top: 0,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
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
    width: 18,
    height: 7,
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
    fontSize: FontSize.size_sm,
    textAlign: "center",
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
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    lineHeight: 29,
    textAlign: "left",
    top: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
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
    top: 549,
  },
  vectorIcon1: {
    height: "1.63%",
    width: "4.72%",
    top: "54.33%",
    right: "6.04%",
    bottom: "44.03%",
    left: "89.24%",
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
  singUp: {
    top: "36.57%",
    left: "41.2%",
    color: Color.ghostwhite,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 18,
  },
  button: {
    top: 717,
    height: 67,
    left: 25,
  },
  imshuvo97gmailcom: {
    color: Color.gray_300,
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
    top: 441,
  },
  email2: {
    top: 332,
  },
  signUp1: {
    fontSize: FontSize.size_7xl,
    color: Color.gray_300,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    lineHeight: 29,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  enterYourCredentials: {
    top: 44,
    lineHeight: 15,
    fontFamily: FontFamily.gilroyMediumRegular,
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  text: {
    top: 233,
    width: 247,
    height: 59,
    left: 25,
    position: "absolute",
  },
  byContinuingYou: {
    color: Color.gray_200,
  },
  text1: {
    color: Color.gray_300,
  },
  termsOfService: {
    color: Color.mediumseagreen_100,
  },
  byContinuingYouContainer: {
    top: 648,
    width: 359,
    height: 39,
    fontFamily: FontFamily.gilroyMediumRegular,
    left: 25,
  },
  alreadyHaveAnContainer: {
    top: 809,
    left: 86,
    width: 241,
    height: 14,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
  },
  groupIcon: {
    height: "6.21%",
    width: "11.56%",
    top: "8.62%",
    right: "44.22%",
    bottom: "85.17%",
    left: "44.22%",
  },
  signUp: {
    backgroundColor: Color.gray_100,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default SignUp;
