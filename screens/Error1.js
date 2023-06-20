import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Error1 = () => {
  return (
    <View style={styles.error}>
      <View style={[styles.statusBar, styles.timePosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap2.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi2.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection2.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.h2Typo]}>9:41</Text>
        </View>
      </View>
      <Text style={[styles.favorurite, styles.h11Typo]}>Favorurite</Text>
      <View style={[styles.errorChild, styles.errorChildLayout]} />
      <View style={[styles.errorItem, styles.errorLayout]} />
      <View style={[styles.errorInner, styles.errorLayout]} />
      <View style={[styles.lineView, styles.errorLayout]} />
      <View style={[styles.errorChild1, styles.errorLayout]} />
      <View style={[styles.errorChild2, styles.errorChildLayout]} />
      <View style={[styles.groupView, styles.groupInnerLayout]}>
        <View style={[styles.groupParent, styles.groupInnerLayout]}>
          <View style={[styles.h1Parent, styles.parentLayout]}>
            <Text style={[styles.h1, styles.h1Typo]}>$1.50</Text>
            <Image
              style={[styles.backArrowIcon, styles.backIconLayout]}
              contentFit="cover"
              source={require("../assets/back-arrow2.png")}
            />
          </View>
          <View style={[styles.h1Group, styles.h11Position]}>
            <Text style={[styles.h11, styles.h11FlexBox]}>Sprite Can</Text>
            <Text style={[styles.h2, styles.h2Clr]}>325ml, Price</Text>
          </View>
        </View>
      </View>
      <View style={[styles.errorInner1, styles.groupInnerLayout]}>
        <View style={[styles.groupParent, styles.groupInnerLayout]}>
          <View style={[styles.h1Parent, styles.parentLayout]}>
            <Text style={[styles.h1, styles.h1Typo]}>$1.99</Text>
            <Image
              style={[styles.backArrowIcon, styles.backIconLayout]}
              contentFit="cover"
              source={require("../assets/back-arrow3.png")}
            />
          </View>
          <View style={[styles.h1Group, styles.h11Position]}>
            <Text style={[styles.h11, styles.h11FlexBox]}>Diet Coke</Text>
            <Text style={[styles.h2, styles.h2Clr]}>355ml, Price</Text>
          </View>
        </View>
      </View>
      <View style={[styles.errorInner2, styles.groupInnerLayout]}>
        <View style={[styles.groupParent, styles.groupInnerLayout]}>
          <View style={[styles.h1Parent2, styles.parentLayout]}>
            <Text style={[styles.h14, styles.h1Typo]}>$15.50</Text>
            <Image
              style={[styles.backArrowIcon2, styles.backIconLayout]}
              contentFit="cover"
              source={require("../assets/back-arrow4.png")}
            />
          </View>
          <View style={[styles.h1Parent3, styles.h15Position]}>
            <Text
              style={[styles.h15, styles.h15Position]}
            >{`Apple & Grape Juice`}</Text>
            <Text style={[styles.h22, styles.h22Layout]}>2L, Price</Text>
          </View>
        </View>
      </View>
      <View style={[styles.errorInner3, styles.groupInnerLayout]}>
        <View style={[styles.groupParent, styles.groupInnerLayout]}>
          <View style={[styles.h1Parent, styles.parentLayout]}>
            <Text style={[styles.h1, styles.h1Typo]}>$4.99</Text>
            <Image
              style={[styles.backArrowIcon, styles.backIconLayout]}
              contentFit="cover"
              source={require("../assets/back-arrow4.png")}
            />
          </View>
          <View style={[styles.h1Group, styles.h11Position]}>
            <Text style={[styles.h11, styles.h11FlexBox]}>Coca Cola Can</Text>
            <Text style={[styles.h2, styles.h2Clr]}>325ml, Price</Text>
          </View>
        </View>
      </View>
      <View style={[styles.errorInner4, styles.groupInnerLayout]}>
        <View style={[styles.groupParent, styles.groupInnerLayout]}>
          <View style={[styles.h1Parent, styles.parentLayout]}>
            <Text style={[styles.h1, styles.h1Typo]}>$4.99</Text>
            <Image
              style={[styles.backArrowIcon, styles.backIconLayout]}
              contentFit="cover"
              source={require("../assets/back-arrow5.png")}
            />
          </View>
          <View style={[styles.h1Group, styles.h11Position]}>
            <Text style={[styles.h11, styles.h11FlexBox]}>{`Pepsi Can `}</Text>
            <Text style={[styles.h2, styles.h2Clr]}>330ml, Price</Text>
          </View>
        </View>
      </View>
      <View style={[styles.pngfuel12Wrapper, styles.pngfuel12Layout]}>
        <Image
          style={[styles.pngfuel12Icon, styles.pngfuel12Layout]}
          contentFit="cover"
          source={require("../assets/pngfuel-12.png")}
        />
      </View>
      <Image
        style={[styles.pngfuel11Icon, styles.cartWrapperLayout]}
        contentFit="cover"
        source={require("../assets/pngfuel-11.png")}
      />
      <Image
        style={styles.treeTopJuiceAppleGrape64oIcon}
        contentFit="cover"
        source={require("../assets/treetopjuiceapplegrape64oz-1.png")}
      />
      <Image
        style={[styles.pngfuel13Icon, styles.store1ParentLayout]}
        contentFit="cover"
        source={require("../assets/pngfuel-13.png")}
      />
      <Image
        style={styles.pngfuel14Icon}
        contentFit="cover"
        source={require("../assets/pngfuel-14.png")}
      />
      <View style={[styles.google, styles.googleLayout]}>
        <View style={[styles.googleInner, styles.googleLayout]}>
          <View style={[styles.groupChild, styles.groupChildBg]} />
        </View>
        <View style={[styles.googleChild, styles.googleChildLayout]}>
          <View style={[styles.addAllToCartWrapper, styles.googleChildLayout]}>
            <Text style={styles.addAllTo}>Add All To Cart</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bottomBar, styles.bottomBarLayout]}>
        <View style={[styles.base, styles.buttonPosition]} />
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
        <Text style={styles.courses}>Courses</Text>
        <Text style={[styles.profile, styles.homePosition]}>Profile</Text>
        <View style={[styles.groupParent4, styles.cartWrapperLayout]}>
          <View style={[styles.cartWrapper, styles.cartWrapperLayout]}>
            <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector19.png")}
          />
        </View>
        <View style={[styles.store1Parent, styles.store1ParentLayout]}>
          <Image
            style={[styles.store1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/store-12.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Shop</Text>
        </View>
        <View style={styles.groupParent5}>
          <View style={styles.vectorParent}>
            <Image
              style={[styles.vectorIcon1, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/vector20.png")}
            />
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.groupInner, styles.groupLayout]} />
            <View style={[styles.rectangleView, styles.groupLayout]} />
          </View>
          <Text style={[styles.explore, styles.cartTypo]}>Explore</Text>
        </View>
        <View style={[styles.bookmark1Parent, styles.parentPosition]}>
          <Image
            style={[styles.bookmark1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bookmark-12.png")}
          />
          <Text style={[styles.favourite, styles.cartTypo]}>Favourite</Text>
        </View>
        <View style={[styles.user1Parent, styles.parentPosition]}>
          <Image
            style={[styles.user1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-12.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Account</Text>
        </View>
      </View>
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={[styles.homeIndicator, styles.googleChildLayout]} />
      </View>
      <View style={[styles.errorChild3, styles.bottomBarLayout]} />
      <View style={styles.errorChild4} />
      <View style={[styles.button, styles.buttonLayout]}>
        <View style={[styles.buttonChild, styles.buttonPosition]} />
        <Text style={[styles.backToHome, styles.backToHomeTypo]}>
          Back to home
        </Text>
      </View>
      <View style={[styles.button1, styles.buttonLayout]}>
        <View style={[styles.buttonItem, styles.buttonPosition]} />
        <Text style={[styles.pleaseTryAgain, styles.backToHomeTypo]}>
          Please Try Again
        </Text>
      </View>
      <Text style={[styles.oopsOrderFailed, styles.h1Typo]}>
        Oops! Order Failed
      </Text>
      <Text style={[styles.h25, styles.h2Clr]}>
        Something went tembly wrong.
      </Text>
      <Image
        style={styles.image13Icon}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group-68461.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  h2Typo: {
    fontSize: FontSize.size_sm,
    lineHeight: 18,
  },
  h11Typo: {
    fontFamily: FontFamily.gilroyBoldRegular,
    color: Color.darkDeep,
  },
  errorChildLayout: {
    height: 1,
    width: 415,
    borderTopWidth: 1,
    borderColor: "#e2e2e2",
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  errorLayout: {
    width: 365,
    left: 25,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#e2e2e2",
    borderStyle: "solid",
    position: "absolute",
  },
  groupInnerLayout: {
    width: 283,
    height: 42,
    position: "absolute",
  },
  parentLayout: {
    height: 27,
    position: "absolute",
  },
  h1Typo: {
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    color: Color.darkDeep,
    position: "absolute",
  },
  backIconLayout: {
    width: 8,
    height: 14,
    top: 4,
    position: "absolute",
    overflow: "hidden",
  },
  h11Position: {
    width: 137,
    left: 0,
    top: 0,
    position: "absolute",
  },
  h11FlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  h2Clr: {
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
    position: "absolute",
  },
  h15Position: {
    width: 196,
    left: 0,
    top: 0,
    position: "absolute",
  },
  h22Layout: {
    height: 15,
    left: 0,
  },
  pngfuel12Layout: {
    height: 55,
    width: 31,
    position: "absolute",
  },
  cartWrapperLayout: {
    width: 26,
    position: "absolute",
  },
  store1ParentLayout: {
    width: 29,
    position: "absolute",
  },
  googleLayout: {
    height: 67,
    width: 364,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.mediumseagreen_100,
    borderRadius: Border.br_lgi,
  },
  googleChildLayout: {
    width: 134,
    position: "absolute",
  },
  bottomBarLayout: {
    width: 414,
    position: "absolute",
  },
  buttonPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  homePosition: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.hKGroteskRegular,
    marginTop: 0,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  cartTypo: {
    fontSize: FontSize.menu12pxS_size,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 24,
    top: 0,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    height: "13.18%",
    left: "0%",
    position: "absolute",
  },
  parentPosition: {
    top: 17,
    height: 42,
  },
  buttonLayout: {
    width: 313,
    left: 51,
    height: 67,
    position: "absolute",
  },
  backToHomeTypo: {
    top: "36.57%",
    fontSize: FontSize.buttone16pxS_size,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 18,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#000",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
    top: 0,
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
    backgroundColor: Color.black,
    position: "absolute",
  },
  battery: {
    right: 15,
    height: 11,
    width: 24,
    top: 17,
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
    color: Color.black,
    width: 60,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0,
    left: 0,
    top: "50%",
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
    width: "100%",
  },
  favorurite: {
    top: 56,
    left: 160,
    fontSize: FontSize.size_xl,
    color: Color.darkDeep,
    textAlign: "center",
    lineHeight: 18,
    position: "absolute",
  },
  errorChild: {
    top: 105,
  },
  errorItem: {
    top: 220,
  },
  errorInner: {
    top: 335,
  },
  lineView: {
    top: 450,
  },
  errorChild1: {
    top: 555,
  },
  errorChild2: {
    top: 660,
  },
  h1: {
    textAlign: "left",
    lineHeight: 27,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    left: 0,
    top: 0,
  },
  backArrowIcon: {
    left: 54,
    height: 14,
  },
  h1Parent: {
    top: 7,
    left: 221,
    width: 62,
  },
  h11: {
    width: 137,
    left: 0,
    top: 0,
    position: "absolute",
    fontSize: FontSize.size_base,
    color: Color.darkDeep,
    fontFamily: FontFamily.gilroyBoldRegular,
    lineHeight: 18,
    letterSpacing: 0,
  },
  h2: {
    top: 24,
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    left: 0,
  },
  h1Group: {
    height: 42,
  },
  groupParent: {
    height: 42,
    left: 0,
    top: 0,
  },
  groupView: {
    top: 143,
    height: 42,
    left: 106,
    width: 283,
  },
  errorInner1: {
    top: 258,
    height: 42,
    left: 106,
    width: 283,
  },
  h14: {
    textAlign: "right",
    lineHeight: 27,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    left: 0,
    top: 0,
  },
  backArrowIcon2: {
    left: 62,
    height: 14,
  },
  h1Parent2: {
    top: 8,
    left: 213,
    width: 70,
  },
  h15: {
    lineHeight: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.darkDeep,
    fontFamily: FontFamily.gilroyBoldRegular,
    letterSpacing: 0,
  },
  h22: {
    width: 72,
    top: 27,
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
    position: "absolute",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.size_sm,
  },
  h1Parent3: {
    height: 42,
  },
  errorInner2: {
    top: 372,
    height: 42,
    left: 106,
    width: 283,
  },
  errorInner3: {
    top: 488,
    height: 42,
    left: 106,
    width: 283,
  },
  errorInner4: {
    top: 593,
    height: 42,
    left: 106,
    width: 283,
  },
  pngfuel12Icon: {
    left: 0,
    top: 0,
  },
  pngfuel12Wrapper: {
    top: 136,
    left: 33,
  },
  pngfuel11Icon: {
    top: 253,
    left: 35,
    height: 52,
  },
  treeTopJuiceAppleGrape64oIcon: {
    top: 366,
    left: 20,
    width: 56,
    height: 56,
    position: "absolute",
  },
  pngfuel13Icon: {
    top: 481,
    left: 34,
    height: 53,
  },
  pngfuel14Icon: {
    top: 584,
    width: 30,
    height: 58,
    left: 33,
    position: "absolute",
  },
  groupChild: {
    height: 67,
    width: 364,
    position: "absolute",
    left: 0,
    top: 0,
  },
  googleInner: {
    left: 0,
    top: 0,
  },
  addAllTo: {
    color: Color.gray_100,
    fontSize: FontSize.buttone16pxS_size,
    width: 134,
    height: 14,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 18,
    left: 0,
    top: 0,
    position: "absolute",
  },
  addAllToCartWrapper: {
    height: 14,
    left: 0,
    top: 0,
  },
  googleChild: {
    left: 115,
    top: 27,
    height: 14,
  },
  google: {
    top: 712,
    left: 25,
    height: 67,
  },
  base: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    shadowColor: "rgba(230, 235, 243, 0.5)",
    shadowRadius: 37,
    elevation: 37,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: -5,
    },
    backgroundColor: Color.white,
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
    marginTop: 0,
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
  cart: {
    color: Color.darkDeep,
    top: 0,
  },
  cartWrapper: {
    top: 25,
    height: 15,
    left: 0,
  },
  vectorIcon: {
    height: "49.24%",
    width: "84.5%",
    right: "7.75%",
    bottom: "50.76%",
    left: "7.75%",
    top: "0%",
  },
  groupParent4: {
    top: 19,
    left: 180,
    height: 40,
  },
  store1Icon: {
    left: 3,
  },
  shop: {
    top: 27,
    color: Color.darkDeep,
  },
  store1Parent: {
    left: 31,
    height: 42,
    top: 17,
  },
  vectorIcon1: {
    width: "64.22%",
    left: "35.78%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    maxWidth: "100%",
    top: "0%",
  },
  groupItem: {
    bottom: "86.82%",
    right: "68.76%",
    width: "31.24%",
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    height: "13.18%",
    top: "0%",
  },
  groupInner: {
    width: "22.8%",
    top: "40.86%",
    right: "77.2%",
    bottom: "45.96%",
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    height: "13.18%",
  },
  rectangleView: {
    top: "81.72%",
    bottom: "5.1%",
    right: "68.76%",
    width: "31.24%",
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    height: "13.18%",
  },
  vectorParent: {
    height: "47.35%",
    width: "69.14%",
    right: "15.43%",
    bottom: "52.65%",
    left: "15.43%",
    top: "0%",
    position: "absolute",
  },
  explore: {
    top: 23,
    color: Color.darkDeep,
  },
  groupParent5: {
    height: "41.79%",
    width: "9.9%",
    top: "22%",
    right: "66.16%",
    bottom: "36.21%",
    left: "23.94%",
    position: "absolute",
  },
  bookmark1Icon: {
    left: 14,
  },
  favourite: {
    color: Color.mediumseagreen_100,
    top: 27,
  },
  bookmark1Parent: {
    left: 245,
    width: 53,
    height: 42,
    position: "absolute",
  },
  user1Icon: {
    left: 11,
  },
  user1Parent: {
    left: 338,
    width: 46,
    height: 42,
    position: "absolute",
  },
  bottomBar: {
    top: 804,
    left: -1,
    shadowColor: "rgba(85, 94, 88, 0.09)",
    shadowRadius: 15,
    elevation: 15,
    height: 92,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: -5,
    },
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    height: 5,
    backgroundColor: Color.black,
  },
  barsHomeIndicatorIphone: {
    top: 880,
    left: 133,
    width: 148,
    height: 16,
    opacity: 0.1,
    position: "absolute",
  },
  errorChild3: {
    left: 0,
    backgroundColor: Color.black,
    opacity: 0.4,
    top: 0,
    height: 896,
  },
  errorChild4: {
    top: 185,
    borderRadius: Border.br_lg,
    height: 602,
    width: 364,
    left: 25,
    position: "absolute",
    backgroundColor: Color.white,
  },
  buttonChild: {
    borderRadius: Border.br_lgi,
    left: "0%",
  },
  backToHome: {
    left: "31.5%",
    color: Color.darkDeep,
  },
  button: {
    top: 720,
  },
  buttonItem: {
    backgroundColor: Color.mediumseagreen_100,
    borderRadius: Border.br_lgi,
  },
  pleaseTryAgain: {
    left: "27.67%",
    color: Color.ghostwhite,
  },
  button1: {
    top: 653,
  },
  oopsOrderFailed: {
    top: 517,
    left: 84,
    fontSize: FontSize.size_9xl,
    textAlign: "center",
  },
  h25: {
    top: "63.8%",
    left: "22.45%",
    lineHeight: 21,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  image13Icon: {
    top: 246,
    left: 96,
    width: 222,
    height: 222,
    position: "absolute",
  },
  groupIcon: {
    height: "1.76%",
    width: "3.84%",
    top: "23.64%",
    right: "84.06%",
    bottom: "74.6%",
    left: "12.1%",
  },
  error: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Error1;
