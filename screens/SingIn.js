import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SingIn = () => {
  return (
    <View style={styles.singIn}>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group4.png")}
      />
      <Image
        style={styles.maskGroupIcon1}
        contentFit="cover"
        source={require("../assets/mask-group5.png")}
      />
      <View style={[styles.barsHomeIndicatorIphone, styles.barsPosition]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={[styles.barsHomeIndicatorIphone1, styles.barsPosition]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={[styles.facebook, styles.facebookLayout]}>
        <View style={[styles.facebookInner, styles.facebookLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
        </View>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector59.png")}
          />
          <Text style={styles.continueWithFacebook}>
            Continue with Facebook
          </Text>
        </View>
      </View>
      <View style={[styles.google, styles.facebookLayout]}>
        <View style={[styles.facebookInner, styles.facebookLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
        </View>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <View
            style={[styles.continueWithGoogleWrapper, styles.continueLayout]}
          >
            <Text style={[styles.continueWithGoogle, styles.continueLayout]}>
              Continue with Google
            </Text>
          </View>
          <Image
            style={[styles.groupInner, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/group-6795.png")}
          />
        </View>
      </View>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={styles.text}>+880</Text>
        <Image
          style={[styles.rectangleIcon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-111.png")}
        />
        <Image
          style={[styles.groupChild1, styles.parentLayout]}
          contentFit="cover"
          source={require("../assets/vector-26.png")}
        />
      </View>
      <Text style={styles.getYourGroceries}>{`Get your groceries
with nectar`}</Text>
      <Text style={[styles.orConnectWith, styles.timeTypo]}>
        Or connect with social media
      </Text>
      <Image
        style={[styles.singInChild, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/group-6801.png")}
      />
      <View style={[styles.statusBar, styles.timePosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap13.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi13.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection13.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barsPosition: {
    opacity: 0.1,
    width: 148,
    left: 133,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.darkDeep,
    position: "absolute",
  },
  facebookLayout: {
    height: 67,
    width: 364,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_lgi,
    height: 67,
    width: 364,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParentLayout: {
    height: 24,
    position: "absolute",
  },
  continueLayout: {
    width: 183,
    height: 14,
    position: "absolute",
  },
  parentLayout: {
    width: 364,
    position: "absolute",
  },
  timeTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  maskGroupIcon: {
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
    height: 896,
  },
  maskGroupIcon1: {
    width: 413,
    height: 374,
    left: 0,
    top: 0,
    position: "absolute",
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
  barsHomeIndicatorIphone1: {
    top: 880,
    height: 16,
  },
  groupChild: {
    backgroundColor: "#4a66ac",
  },
  facebookInner: {
    left: 0,
    top: 0,
  },
  vectorIcon: {
    width: "4.48%",
    right: "95.52%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  continueWithFacebook: {
    left: 54,
    width: 207,
    height: 14,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    lineHeight: 18,
    fontSize: FontSize.buttone16pxS_size,
    top: 5,
    position: "absolute",
  },
  vectorParent: {
    height: "35.92%",
    width: "71.82%",
    top: "31.79%",
    right: "18.31%",
    bottom: "32.29%",
    left: "9.87%",
    position: "absolute",
  },
  facebook: {
    top: 739,
    left: 25,
  },
  groupItem: {
    backgroundColor: "#5383ec",
  },
  continueWithGoogle: {
    textAlign: "left",
    color: Color.gray_100,
    fontSize: FontSize.buttone16pxS_size,
    width: 183,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    lineHeight: 18,
    left: 0,
    top: 0,
  },
  continueWithGoogleWrapper: {
    left: 63,
    width: 183,
    top: 5,
  },
  groupInner: {
    width: "9.31%",
    right: "90.69%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  groupParent: {
    top: 21,
    left: 36,
    width: 246,
  },
  google: {
    top: 652,
    left: 25,
  },
  text: {
    left: 46,
    fontFamily: FontFamily.gilroyMediumRegular,
    textAlign: "center",
    color: Color.gray_300,
    lineHeight: 29,
    fontSize: FontSize.buttone16pxS_size,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    top: 1,
    borderRadius: Border.br_10xs,
    width: 34,
    left: 0,
  },
  groupChild1: {
    top: 39,
    height: 1,
    left: 0,
  },
  parent: {
    top: 517,
    height: 40,
    left: 25,
  },
  getYourGroceries: {
    top: 424,
    fontSize: FontSize.size_7xl,
    color: Color.gray_300,
    lineHeight: 29,
    textAlign: "left",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    left: 25,
    position: "absolute",
  },
  orConnectWith: {
    top: 597,
    left: 113,
    color: "#828282",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  singInChild: {
    height: "7.26%",
    width: "18.34%",
    top: "1.62%",
    right: "13.4%",
    bottom: "91.12%",
    left: "68.26%",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#181725",
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
    color: Color.darkDeep,
    width: 60,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    lineHeight: 18,
    top: "50%",
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
    right: "0.15%",
    left: "-0.15%",
    height: 44,
    top: "50%",
    width: "100%",
  },
  singIn: {
    backgroundColor: Color.gray_100,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default SingIn;
