import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.groupPosition}>
        <View style={styles.groupPosition}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.h1, styles.h1FlexBox]}>Organic Bananas</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$4.99</Text>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector52.png")}
            />
          </View>
          <Text style={[styles.h2, styles.h1FlexBox]}>7pcs, Priceg</Text>
        </View>
        <Image
          style={styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon}
          contentFit="cover"
          source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-34.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    width: 173,
    left: 0,
    top: 0,
    position: "absolute",
    height: 249,
  },
  h1FlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    left: 15,
    position: "absolute",
  },
  groupLayout: {
    height: 46,
    width: 46,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_lg,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#e2e2e2",
    borderWidth: 1,
  },
  h1: {
    top: 130,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gilroyBoldRegular,
    width: 137,
    color: Color.darkDeep,
    letterSpacing: 0,
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    left: 15,
  },
  h11: {
    top: 205,
    fontSize: FontSize.buttone16pxS_size,
    fontWeight: "600",
    fontFamily: FontFamily.buttone16pxS,
    width: 52,
    color: Color.darkDeep,
    letterSpacing: 0,
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    left: 15,
  },
  groupItem: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.mediumseagreen_100,
    left: 0,
    top: 0,
    width: 46,
  },
  vectorIcon: {
    height: "37.22%",
    width: "37.22%",
    top: "31.39%",
    right: "31.39%",
    bottom: "31.39%",
    left: "31.39%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 188,
    left: 114,
  },
  h2: {
    top: 153,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.gilroyMediumRegular,
    color: Color.gray_200,
    width: 79,
    height: 15,
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    left: 15,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon: {
    top: 25,
    left: 34,
    width: 100,
    height: 79,
    position: "absolute",
  },
  card: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 249,
  },
});

export default Card;
