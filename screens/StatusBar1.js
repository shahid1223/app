import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const StatusBar1 = () => {
  return (
    <View style={styles.statusBar}>
      <View style={styles.battery}>
        <View style={styles.border} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap6.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi6.png")}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection6.png")}
      />
      <View style={styles.timeStyle}>
        <Text style={styles.time}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    top: 0,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
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
    top: "50%",
    left: 0,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.black,
    textAlign: "center",
    width: 60,
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
    flex: 1,
    width: "100%",
    height: 44,
  },
});

export default StatusBar1;
