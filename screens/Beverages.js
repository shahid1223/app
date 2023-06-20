import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Beverages = () => {
  return (
    <View style={styles.beverages}>
      <Text style={styles.beverages1}>Beverages</Text>
      <Image
        style={[styles.backArrowIcon, styles.backArrowIconPosition]}
        contentFit="cover"
        source={require("../assets/back-arrow13.png")}
      />
      <Image
        style={[styles.beveragesChild, styles.backArrowIconPosition]}
        contentFit="cover"
        source={require("../assets/group-68391.png")}
      />
      <Image
        style={styles.pngfuel11Icon}
        contentFit="cover"
        source={require("../assets/pngfuel-112.png")}
      />
      <Image
        style={styles.pngfuel12Icon}
        contentFit="cover"
        source={require("../assets/pngfuel-122.png")}
      />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.groupItemPosition]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.h1, styles.h1FlexBox]}>Coca Cola Can</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$4.99</Text>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector35.png")}
            />
          </View>
          <Text style={[styles.h2, styles.h2Typo]}>325ml, Price</Text>
        </View>
        <Image
          style={[styles.pngfuel12Icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pngfuel-123.png")}
        />
        <Image
          style={[styles.pngfuel13Icon, styles.iconPosition2]}
          contentFit="cover"
          source={require("../assets/pngfuel-132.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.groupItemPosition]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.h1, styles.h1FlexBox]}>{`Pepsi Can `}</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$4.99</Text>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector36.png")}
            />
          </View>
          <Text style={[styles.h21, styles.h2Typo]}>330ml, Price</Text>
        </View>
        <Image
          style={[styles.pngfuel13Icon1, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/pngfuel-133.png")}
        />
        <Image
          style={[styles.pngfuel14Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/pngfuel-142.png")}
        />
      </View>
      <Text style={styles.profile}>Profile</Text>
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.groupParent1, styles.groupParent1Position]}>
        <View style={[styles.rectangleParent, styles.groupItemPosition]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.h1, styles.h1FlexBox]}>Diet Coke</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$1.99</Text>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector37.png")}
            />
          </View>
          <Text style={[styles.h2, styles.h2Typo]}>355ml, Price</Text>
        </View>
        <Image
          style={[styles.pngfuel10Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/pngfuel-10.png")}
        />
        <Image
          style={[styles.pngfuel11Icon1, styles.iconPosition2]}
          contentFit="cover"
          source={require("../assets/pngfuel-113.png")}
        />
      </View>
      <View style={[styles.groupParent2, styles.groupParentPosition]}>
        <View style={[styles.rectangleParent, styles.groupItemPosition]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.h16, styles.h16Typo]}>{`Apple & Grape 
Juice`}</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$15.99</Text>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector38.png")}
            />
          </View>
          <Text style={[styles.h23, styles.h2Typo]}>2L, Price</Text>
        </View>
        <Image
          style={[styles.treeTopJuiceAppleGrape64oIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/treetopjuiceapplegrape64oz-12.png")}
        />
      </View>
      <View style={[styles.groupParent3, styles.groupParentPosition]}>
        <View style={[styles.rectangleParent, styles.groupItemPosition]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.h18, styles.h16Typo]}>Orenge Juice</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$15.99</Text>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector39.png")}
            />
          </View>
          <Text style={[styles.h23, styles.h2Typo]}>2L, Price</Text>
        </View>
        <Image
          style={[styles.treeTopJuiceAppleGrape64oIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/treetopjuiceapplegrape64oz-13.png")}
        />
      </View>
      <View style={[styles.beveragesInner, styles.groupParent1Position]}>
        <View style={[styles.rectangleParent, styles.groupItemPosition]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.h1, styles.h1FlexBox]}>Sprite Can</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$1.50</Text>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector40.png")}
            />
          </View>
          <Text style={[styles.h25, styles.h2Typo]}>325ml, Price</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backArrowIconPosition: {
    height: 18,
    top: 57,
    position: "absolute",
  },
  groupParentLayout: {
    height: 249,
    width: 173,
    position: "absolute",
  },
  groupItemPosition: {
    left: 0,
    top: 0,
  },
  h1FlexBox: {
    alignItems: "center",
    display: "flex",
    letterSpacing: 0,
    left: 15,
    textAlign: "left",
    color: Color.darkDeep,
    lineHeight: 18,
    position: "absolute",
  },
  groupLayout: {
    height: 46,
    width: 46,
    position: "absolute",
  },
  h2Typo: {
    height: 15,
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    left: 15,
    textAlign: "left",
    lineHeight: 18,
    position: "absolute",
  },
  iconLayout: {
    width: 49,
    left: 62,
  },
  iconPosition2: {
    top: 20,
    position: "absolute",
  },
  iconPosition1: {
    left: 61,
    position: "absolute",
  },
  iconPosition: {
    top: 18,
    position: "absolute",
  },
  groupParent1Position: {
    top: 105,
    height: 249,
    width: 173,
    position: "absolute",
  },
  groupParentPosition: {
    top: 368,
    height: 249,
    width: 173,
    position: "absolute",
  },
  h16Typo: {
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    left: 15,
    textAlign: "left",
    color: Color.darkDeep,
    fontFamily: FontFamily.gilroyBoldRegular,
    position: "absolute",
  },
  beverages1: {
    left: 158,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.darkDeep,
    fontFamily: FontFamily.gilroyBoldRegular,
    lineHeight: 18,
    top: 57,
    position: "absolute",
  },
  backArrowIcon: {
    width: 10,
    left: 25,
    overflow: "hidden",
  },
  beveragesChild: {
    left: 372,
    width: 17,
  },
  pngfuel11Icon: {
    top: 129,
    left: 271,
    width: 58,
    height: 95,
    position: "absolute",
  },
  pngfuel12Icon: {
    top: 124,
    left: 274,
    height: 92,
    width: 52,
    position: "absolute",
  },
  groupChildShadowBox: {
    borderWidth: 1,
    borderColor: "#e2e2e2",
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    left: 0,
    top: 0,
    height: 249,
    width: 173,
    position: "absolute",
  },
  h1: {
    width: 137,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0,
    left: 15,
    top: 130,
    fontFamily: FontFamily.gilroyBoldRegular,
  },
  h11: {
    top: 205,
    fontSize: FontSize.buttone16pxS_size,
    fontWeight: "600",
    fontFamily: FontFamily.buttone16pxS,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0,
    left: 15,
    width: 52,
  },
  groupItem: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.mediumseagreen_100,
    left: 0,
    top: 0,
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
    width: 78,
    top: 153,
    height: 15,
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
  },
  rectangleParent: {
    height: 249,
    width: 173,
    position: "absolute",
  },
  pngfuel12Icon1: {
    top: 28,
    height: 87,
    position: "absolute",
  },
  pngfuel13Icon: {
    height: 90,
    width: 49,
    left: 62,
  },
  groupParent: {
    top: 632,
    width: 173,
    left: 25,
  },
  h21: {
    width: 81,
    top: 153,
    height: 15,
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
  },
  pngfuel13Icon1: {
    top: 19,
    height: 102,
    width: 50,
  },
  pngfuel14Icon: {
    width: 50,
    left: 62,
    top: 18,
    height: 95,
  },
  groupContainer: {
    left: 213,
    top: 632,
    width: 173,
  },
  profile: {
    marginTop: 384.83,
    width: "10.4%",
    top: "50%",
    left: "81.6%",
    fontFamily: FontFamily.hKGroteskRegular,
    color: Color.darkslategray_100,
    textAlign: "right",
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
    top: 880,
    left: 133,
    width: 148,
    height: 16,
    opacity: 0.1,
    position: "absolute",
  },
  pngfuel10Icon: {
    top: 33,
    height: 84,
    width: 52,
  },
  pngfuel11Icon1: {
    left: 64,
    width: 44,
    height: 89,
  },
  groupParent1: {
    left: 25,
  },
  h16: {
    top: 130,
    lineHeight: 20,
  },
  h23: {
    top: 172,
    width: 89,
  },
  treeTopJuiceAppleGrape64oIcon: {
    left: 40,
    width: 93,
    height: 93,
  },
  groupParent2: {
    left: 25,
  },
  h18: {
    top: 140,
  },
  groupParent3: {
    left: 213,
  },
  h25: {
    width: 82,
    top: 153,
    height: 15,
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
  },
  beveragesInner: {
    left: 213,
  },
  beverages: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Beverages;
