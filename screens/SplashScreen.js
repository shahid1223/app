import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen}>
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.navigation, styles.borderPosition]}>
        <View style={[styles.navigation, styles.borderPosition]}>
          <View style={[styles.navigationBar, styles.barPosition]}>
            <View style={[styles.statusBar, styles.barPosition]}>
              <View style={styles.battery}>
                <View style={[styles.border, styles.borderPosition]} />
                <Image
                  style={styles.capIcon}
                  contentFit="cover"
                  source={require("../assets/cap15.png")}
                />
                <View style={styles.capacity} />
              </View>
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/wifi15.png")}
              />
              <Image
                style={styles.cellularConnectionIcon}
                contentFit="cover"
                source={require("../assets/cellular-connection15.png")}
              />
              <View style={styles.timeStyle}>
                <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.logoParent}>
        <Image
          style={[styles.logoIcon, styles.barPosition]}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
        <Text style={[styles.onlineGroceriet, styles.timeTypo]}>
          online groceriet
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  barPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  timeTypo: {
    textAlign: "center",
    color: Color.white,
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    position: "absolute",
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
    left: 133,
    width: 148,
    height: 37,
    opacity: 0.1,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#fff",
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
    backgroundColor: Color.white,
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
    width: 60,
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
    marginTop: -44.13,
    height: 44,
    top: "50%",
  },
  navigationBar: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    overflow: "hidden",
  },
  navigation: {
    width: 414,
    height: 98,
    left: 0,
  },
  logoIcon: {
    height: "92.71%",
    bottom: "7.29%",
    maxWidth: "100%",
    maxHeight: "100%",
    top: "0%",
    right: "0%",
    overflow: "hidden",
  },
  onlineGroceriet: {
    top: 51,
    left: 75,
    letterSpacing: 6,
    fontFamily: FontFamily.gilroyMediumRegular,
  },
  logoParent: {
    height: "7.66%",
    width: "64.59%",
    top: "46.17%",
    right: "17.7%",
    bottom: "46.17%",
    left: "17.7%",
    position: "absolute",
  },
  splashScreen: {
    backgroundColor: Color.mediumseagreen_100,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default SplashScreen;
