import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Button1 = () => {
  return (
    <View style={styles.button}>
      <View style={styles.googlePosition}>
        <View style={styles.googlePosition}>
          <View style={[styles.groupChild, styles.googlePosition]} />
        </View>
        <View style={[styles.googleChild, styles.addLayout]}>
          <View style={[styles.addToCartWrapper, styles.addLayout]}>
            <Text style={[styles.addToCart, styles.cartTypo]}>Add to Cart</Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.openLayout]}>
          <View style={[styles.openCartWrapper, styles.openLayout]}>
            <Text style={[styles.openCart, styles.openLayout]}>Open Cart</Text>
          </View>
        </View>
        <Image
          style={styles.backArrowIcon}
          contentFit="cover"
          source={require("../assets/back-arrow15.png")}
        />
      </View>
      <View style={[styles.buttonInner, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
      </View>
      <Image
        style={styles.excludeIcon}
        contentFit="cover"
        source={require("../assets/exclude2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  googlePosition: {
    width: 364,
    left: 0,
    top: 0,
    position: "absolute",
    height: 67,
  },
  addLayout: {
    height: 14,
    width: 118,
    position: "absolute",
  },
  cartTypo: {
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    lineHeight: 18,
    left: 0,
    top: 0,
  },
  openLayout: {
    width: 70,
    height: 14,
    position: "absolute",
  },
  groupItemLayout: {
    height: 29,
    width: 29,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_lgi,
    backgroundColor: "#6fae79",
  },
  addToCart: {
    fontSize: FontSize.buttone16pxS_size,
    height: 14,
    width: 118,
    position: "absolute",
  },
  addToCartWrapper: {
    left: 0,
    top: 0,
  },
  googleChild: {
    left: 53,
    top: 27,
  },
  openCart: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.gray_100,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    lineHeight: 18,
    left: 0,
    top: 0,
  },
  openCartWrapper: {
    left: 0,
    top: 0,
  },
  groupView: {
    left: 267,
    top: 27,
  },
  backArrowIcon: {
    top: 30,
    left: 344,
    width: 6,
    height: 10,
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    left: 0,
    top: 0,
  },
  buttonInner: {
    top: 19,
    left: 16,
  },
  excludeIcon: {
    width: 16,
    height: 12,
  },
  button: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 67,
  },
});

export default Button1;
