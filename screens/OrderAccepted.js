import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const OrderAccepted = () => {
  return (
    <View style={styles.orderAccepted}>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={styles.orderAcceptedChild}
        contentFit="cover"
        source={require("../assets/group-6872.png")}
      />
      <Text
        style={[styles.yourOrderHas, styles.h2FlexBox]}
      >{`Your Order has been
 accepted`}</Text>
      <Text
        style={[styles.h2, styles.h2FlexBox]}
      >{`Your items has been placcd and is on 
it’s way to being processed`}</Text>
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={styles.buttonPosition} />
        <Text style={[styles.backToHome, styles.backToHomeTypo]}>
          Back to home
        </Text>
      </View>
      <View style={[styles.button1, styles.buttonLayout]}>
        <View style={[styles.buttonItem, styles.buttonPosition]} />
        <Text style={[styles.trackOrder, styles.backToHomeTypo]}>
          Track Order
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  h2FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  buttonLayout: {
    height: 67,
    width: 364,
    left: 25,
    position: "absolute",
  },
  backToHomeTypo: {
    lineHeight: 18,
    fontSize: FontSize.buttone16pxS_size,
    top: "36.57%",
    textAlign: "center",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    position: "absolute",
  },
  buttonPosition: {
    borderRadius: Border.br_lgi,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  maskGroupIcon: {
    top: 0,
    left: 0,
    width: 414,
    position: "absolute",
    height: 896,
  },
  orderAcceptedChild: {
    top: 152,
    left: 57,
    width: 272,
    height: 240,
    position: "absolute",
  },
  yourOrderHas: {
    top: 459,
    left: 75,
    fontSize: FontSize.size_9xl,
    color: Color.darkDeep,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
  },
  h2: {
    top: "61.01%",
    left: "16.43%",
    fontSize: FontSize.size_base,
    lineHeight: 21,
    fontFamily: FontFamily.gilroyMediumRegular,
    color: Color.gray_200,
  },
  backToHome: {
    left: "34.33%",
    color: Color.darkDeep,
  },
  button: {
    top: 791,
  },
  buttonItem: {
    backgroundColor: Color.mediumseagreen_100,
  },
  trackOrder: {
    left: "36.53%",
    color: Color.ghostwhite,
  },
  button1: {
    top: 724,
  },
  orderAccepted: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default OrderAccepted;
