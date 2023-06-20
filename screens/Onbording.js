import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Onbording = () => {
  return (
    <View style={styles.onbording}>
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/8140-1.png")}
      />
      <LinearGradient
        style={[styles.onbordingChild, styles.iconPosition]}
        locations={[0, 1]}
        colors={["rgba(14, 23, 39, 0)", "#858585"]}
      />
      <View style={[styles.barsHomeIndicatorIphone, styles.barsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Text style={styles.gerYourGroceries}>
        Ger your groceries in as fast as one hour
      </Text>
      <View style={styles.button}>
        <View style={styles.buttonChild} />
        <Text style={[styles.getStarted, styles.getStartedTypo]}>
          Get Started
        </Text>
      </View>
      <View style={[styles.barsHomeIndicatorIphone1, styles.barsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Text style={[styles.welcomeToOur, styles.getStartedTypo]}>{`Welcome 
to our store`}</Text>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
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
  getStartedTypo: {
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  icon: {
    top: 0,
    height: 896,
  },
  onbordingChild: {
    top: 454,
    height: 442,
    backgroundColor: "transparent",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    position: "absolute",
  },
  barsHomeIndicatorIphone: {
    top: 859,
    height: 37,
  },
  gerYourGroceries: {
    top: 682,
    left: 60,
    fontSize: FontSize.size_base,
    lineHeight: 15,
    fontFamily: FontFamily.gilroyMediumRegular,
    color: "rgba(252, 252, 252, 0.7)",
    textAlign: "center",
    position: "absolute",
  },
  buttonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_lgi,
    backgroundColor: Color.mediumseagreen_100,
    position: "absolute",
    width: "100%",
  },
  getStarted: {
    top: "36.57%",
    left: "35.98%",
    fontSize: FontSize.buttone16pxS_size,
    lineHeight: 18,
    color: Color.ghostwhite,
  },
  button: {
    top: 738,
    left: 31,
    width: 353,
    height: 67,
    position: "absolute",
  },
  barsHomeIndicatorIphone1: {
    top: 880,
    height: 16,
  },
  welcomeToOur: {
    top: 577,
    left: 81,
    fontSize: 48,
    lineHeight: 29,
    color: Color.white,
  },
  groupIcon: {
    height: "6.29%",
    width: "11.71%",
    top: "54.16%",
    right: "44.15%",
    bottom: "39.55%",
    left: "44.15%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  onbording: {
    backgroundColor: Color.gray_100,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default Onbording;
