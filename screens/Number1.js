import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Number1 = () => {
  return (
    <View style={styles.number}>
      <Image
        style={[styles.maskGroupIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group3.png")}
      />
      <View style={[styles.barsHomeIndicatorIphone, styles.barsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={styles.text}>+880</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Image
          style={[styles.groupItem, styles.parentLayout]}
          contentFit="cover"
          source={require("../assets/vector-25.png")}
        />
      </View>
      <Text style={[styles.enterYourMobile, styles.mobileTypo]}>
        Enter your mobile number
      </Text>
      <View style={[styles.statusBar, styles.timePosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={[styles.capIcon, styles.capIconLayout]}
            contentFit="cover"
            source={require("../assets/cap12.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi12.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection12.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <View style={[styles.numberChild, styles.capIconLayout]} />
      <Text style={[styles.mobileNumber, styles.mobileTypo]}>
        Mobile Number
      </Text>
      <Image
        style={styles.numberItem}
        contentFit="cover"
        source={require("../assets/group-68021.png")}
      />
      <Image
        style={[styles.ubereatsV1246111Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/ubereats-v-12461-1-11.png")}
      />
      <View style={styles.numberInner} />
      <View style={[styles.barsHomeIndicatorIphone1, styles.barsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
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
  parentLayout: {
    width: 364,
    position: "absolute",
  },
  mobileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    lineHeight: 29,
    left: 25,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  capIconLayout: {
    width: 1,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 0,
    height: 896,
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
  text: {
    left: 46,
    fontSize: FontSize.buttone16pxS_size,
    fontFamily: FontFamily.gilroyMediumRegular,
    textAlign: "center",
    color: Color.darkDeep,
    lineHeight: 29,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 1,
    borderRadius: Border.br_10xs,
    width: 34,
    height: 24,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    top: 39,
    height: 1,
    left: 0,
  },
  parent: {
    height: 40,
    left: 25,
    top: 236,
  },
  enterYourMobile: {
    top: 140,
    fontSize: FontSize.size_7xl,
    color: Color.darkDeep,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#000",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    right: 0,
    height: 4,
    opacity: 0.4,
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
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.black,
    width: 60,
    textAlign: "center",
    left: 0,
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
    width: "100%",
  },
  frameIcon: {
    top: 57,
    width: 10,
    height: 18,
    left: 25,
    position: "absolute",
    overflow: "hidden",
  },
  numberChild: {
    left: 114,
    borderColor: "#7c7c7c",
    borderRightWidth: 1,
    height: 23,
    borderStyle: "solid",
    top: 236,
  },
  mobileNumber: {
    top: 197,
    fontSize: FontSize.size_base,
    color: Color.gray_200,
  },
  numberItem: {
    top: 498,
    left: 322,
    width: 67,
    height: 67,
    position: "absolute",
  },
  ubereatsV1246111Icon: {
    top: 595,
    height: 301,
  },
  numberInner: {
    top: 878,
    left: 120,
    backgroundColor: Color.gainsboro,
    width: 177,
    height: 19,
    position: "absolute",
  },
  barsHomeIndicatorIphone1: {
    top: 880,
    height: 16,
  },
  number: {
    backgroundColor: Color.gray_100,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default Number1;
