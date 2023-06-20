import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ProductDetail = () => {
  return (
    <View style={styles.productDetail}>
      <View style={[styles.productDetailChild, styles.groupItemPosition]} />
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap8.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi8.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection8.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.backArrowIcon}
        contentFit="cover"
        source={require("../assets/back-arrow14.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector44.png")}
      />
      <Text style={styles.h1}>Naturel Red Apple</Text>
      <Image
        style={styles.bookmark1Icon}
        contentFit="cover"
        source={require("../assets/bookmark-17.png")}
      />
      <Text style={[styles.h2, styles.h2FlexBox]}>1kg, Price</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector45.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.h22Position]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>1</Text>
      </View>
      <Text style={styles.text1}>$4.99</Text>
      <Image
        style={[styles.productDetailItem, styles.productLayout]}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.productDetailInner, styles.productLayout]}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={[styles.productDetailChild1, styles.productLayout]}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <View style={styles.h2Parent}>
        <Text style={[styles.h21, styles.h21Typo]}>Product Detail</Text>
        <Text style={[styles.h22, styles.h22Position]}>
          Apples are nutritious. Apples may be good for weight loss. apples may
          be good for your heart. As part of a healtful and varied diet.
        </Text>
      </View>
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector47.png")}
      />
      <View style={[styles.h2Wrapper, styles.h2WrapperPosition]}>
        <Text style={[styles.h23, styles.h21Typo]}>Nutritions</Text>
      </View>
      <View style={[styles.group115s, styles.group115sLayout]}>
        <View style={[styles.group115sInner, styles.group115sLayout]}>
          <View style={[styles.groupItem, styles.group115sLayout]} />
        </View>
        <Text style={[styles.h11, styles.h2FlexBox]}>100gr</Text>
      </View>
      <View style={[styles.h2Container, styles.h2WrapperPosition]}>
        <Text style={[styles.h23, styles.h21Typo]}>Review</Text>
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-6834.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector48.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector49.png")}
      />
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon6, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector50.png")}
        />
        <View style={styles.groupInner} />
        <View style={[styles.rectangleView, styles.groupChild1Layout]} />
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
      </View>
      <Image
        style={styles.pngfuel11}
        contentFit="cover"
        source={require("../assets/pngfuel-1-1.png")}
      />
      <Text style={[styles.home, styles.homePosition]}>Home</Text>
      <Text style={styles.courses}>Courses</Text>
      <Text style={[styles.profile, styles.homePosition]}>Profile</Text>
      <View style={styles.button}>
        <View style={styles.buttonChild} />
        <Text style={[styles.addToBasket, styles.textTypo]}>Add To Basket</Text>
      </View>
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <Image
        style={[styles.vectorIcon7, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector51.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemPosition: {
    left: 0,
    top: 0,
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
  },
  capacityBg: {
    backgroundColor: Color.darkDeep,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  h2FlexBox: {
    color: Color.gray_200,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  groupChildLayout: {
    height: 46,
    position: "absolute",
  },
  h22Position: {
    left: "0%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.buttone16pxS_size,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    lineHeight: 18,
    position: "absolute",
  },
  productLayout: {
    height: 1,
    width: 364,
    left: 25,
    position: "absolute",
  },
  h21Typo: {
    top: "0%",
    left: "0%",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.darkDeep,
    lineHeight: 18,
    position: "absolute",
  },
  h2WrapperPosition: {
    right: "66.54%",
    width: "26.21%",
    height: "2.01%",
    left: "7.25%",
    position: "absolute",
  },
  group115sLayout: {
    width: 34,
    height: 18,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "2.13%",
    height: "1.61%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild1Layout: {
    width: 3,
    backgroundColor: Color.darkgray_100,
    height: 3,
    borderRadius: Border.br_smi,
    top: 203,
    position: "absolute",
  },
  homePosition: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.hKGroteskRegular,
    marginTop: 384.83,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  productDetailChild: {
    borderBottomRightRadius: Border.br_6xl,
    borderBottomLeftRadius: Border.br_6xl,
    backgroundColor: Color.whitesmoke_100,
    width: 414,
    height: 371,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#181725",
    width: 22,
    opacity: 0.35,
    height: 11,
    position: "absolute",
  },
  capIcon: {
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    top: 4,
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
    height: 11,
    width: 24,
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
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    width: 60,
    textAlign: "center",
    color: Color.darkDeep,
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
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
    right: "0.1%",
    left: "-0.1%",
    height: 44,
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  backArrowIcon: {
    top: 57,
    width: 10,
    height: 18,
    left: 25,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "2.06%",
    width: "4.46%",
    top: "6.33%",
    right: "6.21%",
    bottom: "91.61%",
    left: "89.33%",
  },
  h1: {
    width: "50.59%",
    top: "44.86%",
    alignItems: "center",
    display: "flex",
    left: "6.04%",
    textAlign: "left",
    fontFamily: FontFamily.gilroyBoldRegular,
    fontSize: FontSize.size_5xl,
    color: Color.darkDeep,
    lineHeight: 18,
    letterSpacing: 0,
    position: "absolute",
  },
  bookmark1Icon: {
    top: 398,
    left: 365,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  h2: {
    height: "1.66%",
    width: "19.95%",
    top: "48.04%",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    color: Color.gray_200,
    position: "absolute",
    fontSize: FontSize.size_base,
    left: "6.04%",
    lineHeight: 18,
  },
  groupChild: {
    left: 37,
    borderRadius: Border.br_mid,
    borderColor: "#e2e2e2",
    width: 46,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
  },
  vectorIcon1: {
    height: "37.22%",
    top: "31.39%",
    bottom: "31.39%",
    left: "85.79%",
    right: "0%",
    width: "14.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon2: {
    height: "6.21%",
    top: "46.89%",
    right: "85.79%",
    bottom: "46.89%",
    width: "14.21%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  text: {
    top: 14,
    left: 56,
    textAlign: "left",
    color: Color.darkDeep,
  },
  rectangleParent: {
    top: 475,
    width: 120,
    left: 25,
  },
  text1: {
    top: 489,
    left: 330,
    textAlign: "left",
    fontFamily: FontFamily.gilroyBoldRegular,
    fontSize: FontSize.size_5xl,
    color: Color.darkDeep,
    lineHeight: 18,
    letterSpacing: 0,
    position: "absolute",
  },
  productDetailItem: {
    top: 551,
  },
  productDetailInner: {
    top: 679,
  },
  productDetailChild1: {
    top: 734,
  },
  h21: {
    width: "30.22%",
  },
  h22: {
    top: "30.35%",
    fontSize: 13,
    lineHeight: 21,
    textTransform: "capitalize",
    fontFamily: FontFamily.gilroyMediumRegular,
    color: Color.gray_200,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    width: "100%",
  },
  h2Parent: {
    height: "10.09%",
    width: "86.71%",
    top: "63.57%",
    right: "6.04%",
    bottom: "26.33%",
    left: "7.25%",
    position: "absolute",
  },
  vectorIcon3: {
    height: "0.98%",
    width: "3.48%",
    top: "63.95%",
    bottom: "35.07%",
    left: "90.53%",
    right: "5.99%",
  },
  h23: {
    width: "100%",
  },
  h2Wrapper: {
    top: "78.04%",
    bottom: "19.96%",
  },
  groupItem: {
    borderRadius: 5,
    backgroundColor: "#ebebeb",
    left: 0,
    top: 0,
  },
  group115sInner: {
    left: 0,
    top: 0,
  },
  h11: {
    left: 5,
    fontSize: 9,
    lineHeight: 14,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    color: Color.gray_200,
    position: "absolute",
    top: 4,
    width: 24,
  },
  group115s: {
    top: 697,
    left: 326,
  },
  h2Container: {
    top: "83.95%",
    bottom: "14.04%",
  },
  groupIcon: {
    height: "1.56%",
    width: "22.34%",
    top: "84.06%",
    right: "12.96%",
    bottom: "14.38%",
    left: "64.71%",
  },
  vectorIcon4: {
    top: "84.15%",
    right: "6.05%",
    bottom: "14.24%",
    left: "91.83%",
  },
  vectorIcon5: {
    top: "78.01%",
    bottom: "20.38%",
    left: "91.88%",
    right: "5.99%",
  },
  vectorIcon6: {
    height: "81.63%",
    top: "65%",
    right: "-25.03%",
    bottom: "-46.63%",
    left: "25.03%",
    width: "100%",
  },
  groupInner: {
    left: 123,
    width: 16,
    height: 3,
    borderRadius: Border.br_smi,
    top: 203,
    backgroundColor: Color.mediumseagreen_100,
    position: "absolute",
  },
  rectangleView: {
    left: 142,
  },
  groupChild1: {
    left: 149,
  },
  vectorParent: {
    height: "22.99%",
    width: "67.1%",
    top: "14.94%",
    right: "16.1%",
    bottom: "62.07%",
    left: "16.8%",
    position: "absolute",
  },
  pngfuel11: {
    top: 97,
    width: 385,
    height: 262,
    opacity: 0.5,
    left: 25,
    position: "absolute",
  },
  home: {
    width: "9.87%",
    left: "8%",
    textAlign: "left",
  },
  courses: {
    width: "13.87%",
    left: "43.07%",
    fontWeight: "700",
    fontFamily: FontFamily.hKGroteskBold,
    color: Color.mediumslateblue_100,
    marginTop: 384.83,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  profile: {
    width: "10.4%",
    left: "81.6%",
    textAlign: "right",
  },
  buttonChild: {
    height: "100%",
    bottom: "0%",
    borderRadius: Border.br_lgi,
    backgroundColor: Color.mediumseagreen_100,
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  addToBasket: {
    top: "36.57%",
    left: "33.78%",
    color: Color.ghostwhite,
    textAlign: "center",
  },
  button: {
    top: 790,
    height: 67,
    width: 364,
    left: 25,
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
    top: 880,
    left: 133,
    width: 148,
    height: 16,
    opacity: 0.1,
    position: "absolute",
  },
  vectorIcon7: {
    height: "22.23%",
    width: "79.55%",
    top: "11.47%",
    right: "10.22%",
    bottom: "66.3%",
    left: "10.23%",
  },
  productDetail: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProductDetail;
