import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const SelectLocation = () => {
  return (
    <View style={styles.selectLocation}>
      <Image
        style={[styles.maskGroupIcon, styles.borderPosition]}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <View style={[styles.barsHomeIndicatorIphone, styles.barsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.statusBar, styles.statusBarLayout]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap10.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi10.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection10.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow16.png")}
      />
      <View style={[styles.yourArea, styles.yourLayout1]}>
        <View style={[styles.typesOfYourAreaParent, styles.groupChildPosition]}>
          <Text style={[styles.typesOfYour, styles.yourLayout]}>
            Types of your area
          </Text>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/vector-22.png")}
          />
        </View>
        <Text style={[styles.yourArea1, styles.yourPosition]}>Your Area</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector57.png")}
        />
      </View>
      <View style={[styles.barsHomeIndicatorIphone1, styles.barsPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.button}>
        <View style={[styles.buttonChild, styles.statusBarLayout]} />
        <Text style={[styles.submit, styles.yourTypo]}>Submit</Text>
      </View>
      <View style={[styles.yourZone, styles.yourLayout1]}>
        <View style={[styles.typesOfYourAreaParent, styles.groupChildPosition]}>
          <Text style={[styles.banasree, styles.banasreePosition]}>
            Banasree
          </Text>
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/vector-23.png")}
          />
        </View>
        <Text style={[styles.yourArea1, styles.yourPosition]}>Your Zone</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector58.png")}
        />
      </View>
      <Image
        style={[styles.illustrationIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/illustration.png")}
      />
      <View style={styles.text}>
        <Text style={[styles.selectYourLocation, styles.banasreePosition]}>
          Select Your Location
        </Text>
        <Text
          style={[styles.swithchOnYour, styles.yourPosition]}
        >{`Swithch on your location to stay in tune with
what’s happening in your area
`}</Text>
      </View>
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
  statusBarLayout: {
    width: "100%",
    position: "absolute",
  },
  timeLayout: {
    lineHeight: 18,
    textAlign: "center",
    position: "absolute",
  },
  yourLayout1: {
    height: 79,
    width: 364,
    left: 25,
    position: "absolute",
  },
  groupChildPosition: {
    top: 39,
    width: 364,
    left: 0,
    position: "absolute",
  },
  yourLayout: {
    lineHeight: 29,
    textAlign: "left",
    top: 0,
  },
  yourPosition: {
    color: Color.gray_200,
    fontSize: FontSize.size_base,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  yourTypo: {
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
  },
  banasreePosition: {
    color: Color.darkDeep,
    lineHeight: 29,
    top: 0,
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
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.black,
    width: 60,
    textAlign: "center",
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
    right: "0.04%",
    left: "-0.04%",
    height: 44,
    top: "50%",
    position: "absolute",
  },
  backArrowIcon: {
    top: 57,
    width: 10,
    height: 18,
    left: 25,
    position: "absolute",
    overflow: "hidden",
  },
  typesOfYour: {
    left: 4,
    color: "#b1b1b1",
    textAlign: "left",
    fontFamily: FontFamily.gilroyMediumRegular,
    fontSize: FontSize.buttone16pxS_size,
    position: "absolute",
  },
  groupChild: {
    height: 1,
  },
  typesOfYourAreaParent: {
    height: 40,
  },
  yourArea1: {
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 29,
    top: 0,
  },
  vectorIcon: {
    height: "8.91%",
    width: "3.57%",
    top: "63.65%",
    bottom: "27.43%",
    left: "96.43%",
    right: "0%",
  },
  yourArea: {
    top: 630,
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
  },
  submit: {
    top: "36.57%",
    left: "42.02%",
    color: Color.ghostwhite,
    fontSize: FontSize.buttone16pxS_size,
    textAlign: "center",
    lineHeight: 18,
    position: "absolute",
  },
  button: {
    top: 748,
    height: 67,
    width: 364,
    left: 25,
    position: "absolute",
  },
  banasree: {
    textAlign: "left",
    fontFamily: FontFamily.gilroyMediumRegular,
    fontSize: FontSize.buttone16pxS_size,
    left: 0,
  },
  yourZone: {
    top: 521,
  },
  illustrationIcon: {
    height: "19.94%",
    width: "56.2%",
    top: "13.37%",
    right: "21.9%",
    bottom: "66.68%",
    left: "21.9%",
  },
  selectYourLocation: {
    left: 39,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
  },
  swithchOnYour: {
    top: 44,
    lineHeight: 15,
    fontFamily: FontFamily.gilroyMediumRegular,
    textAlign: "center",
  },
  text: {
    top: 331,
    left: 44,
    width: 324,
    height: 101,
    position: "absolute",
  },
  selectLocation: {
    backgroundColor: Color.gray_100,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default SelectLocation;
