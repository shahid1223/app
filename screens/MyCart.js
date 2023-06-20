import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const MyCart = () => {
  return (
    <View style={styles.myCart}>
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap4.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi4.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection4.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <Text style={[styles.myCart1, styles.shopClr]}>My Cart</Text>
      <View style={[styles.myCartChild, styles.cartChildBorder]} />
      <View style={[styles.myCartItem, styles.cartChildBorder]} />
      <View style={[styles.myCartInner, styles.cartChildBorder]} />
      <View style={[styles.lineView, styles.cartChildBorder]} />
      <View style={[styles.myCartChild1, styles.cartChildBorder]} />
      <View style={[styles.groupParent, styles.parentLayout1]}>
        <View
          style={[
            styles.f1ea7dcce3b5d06cd1b1418f9b9413Wrapper,
            styles.iconLayout1,
          ]}
        >
          <Image
            style={[
              styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon,
              styles.iconLayout1,
            ]}
            contentFit="cover"
            source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-32.png")}
          />
        </View>
        <View style={[styles.h1Parent, styles.parentLayout]}>
          <Text style={[styles.h1, styles.h1FlexBox]}>Bell Pepper Red</Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout2]}
            contentFit="cover"
            source={require("../assets/group-68624.png")}
          />
          <Text style={[styles.h11, styles.h11Typo]}>$4.99</Text>
          <Text style={[styles.h2, styles.h2Layout]}>1kg, Price</Text>
          <View style={styles.h1Group}>
            <Text style={[styles.h12, styles.h11Typo]}>1</Text>
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector26.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector27.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.pngfuel16Parent, styles.parentLayout1]}>
        <Image
          style={styles.pngfuel16Icon}
          contentFit="cover"
          source={require("../assets/pngfuel-162.png")}
        />
        <View style={[styles.h1Container, styles.parentLayout]}>
          <Text style={[styles.h1, styles.h1FlexBox]}>Egg Chicken Red</Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout2]}
            contentFit="cover"
            source={require("../assets/group-68625.png")}
          />
          <Text style={[styles.h11, styles.h11Typo]}>$1.99</Text>
          <Text style={[styles.h2, styles.h2Layout]}>4pcs, Price</Text>
          <View style={styles.h1Group}>
            <Text style={[styles.h12, styles.h11Typo]}>1</Text>
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector28.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector27.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.f1ea7dcce3b5d06cd1b1418f9b9413Parent,
          styles.parentLayout1,
        ]}
      >
        <Image
          style={styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon1}
          contentFit="cover"
          source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-33.png")}
        />
        <View style={[styles.h1Parent1, styles.parentLayout]}>
          <Text style={[styles.h1, styles.h1FlexBox]}>Organic Bananas</Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout2]}
            contentFit="cover"
            source={require("../assets/group-68626.png")}
          />
          <Text style={[styles.h17, styles.h11Typo]}>$3.00</Text>
          <Text style={[styles.h2, styles.h2Layout]}>12kg, Price</Text>
          <View style={styles.h1Group}>
            <Text style={[styles.h12, styles.h11Typo]}>1</Text>
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector29.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector30.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.pngfuel3Parent, styles.parentLayout1]}>
        <Image
          style={[styles.pngfuel3Icon, styles.h2Layout1]}
          contentFit="cover"
          source={require("../assets/pngfuel-31.png")}
        />
        <View style={[styles.h1Parent3, styles.parentLayout]}>
          <Text style={[styles.h1, styles.h1FlexBox]}>Ginger</Text>
          <Image
            style={[styles.groupChild, styles.groupChildLayout2]}
            contentFit="cover"
            source={require("../assets/group-68627.png")}
          />
          <Text style={[styles.h11, styles.h11Typo]}>$2.99</Text>
          <Text style={styles.h23}>250gm, Price</Text>
          <View style={styles.h1Group}>
            <Text style={[styles.h12, styles.h11Typo]}>1</Text>
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector31.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector32.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.google, styles.googleLayout]}>
        <View style={[styles.googleInner, styles.googleLayout]}>
          <View style={[styles.groupChild8, styles.googleLayout]} />
        </View>
        <View style={[styles.googleChild, styles.checkoutLayout]}>
          <View style={[styles.goToCheckoutWrapper, styles.checkoutLayout]}>
            <Text style={[styles.goToCheckout, styles.textClr]}>
              Go to Checkout
            </Text>
          </View>
        </View>
        <View style={[styles.frameView, styles.h1FlexBox]}>
          <View style={styles.wrapperLayout}>
            <View style={[styles.wrapper, styles.wrapperLayout]}>
              <Text style={[styles.text, styles.textTypo]}>$12.96</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.base} />
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
        <Text style={styles.courses}>Courses</Text>
        <Text style={[styles.profile, styles.homePosition]}>Profile</Text>
        <View style={[styles.groupContainer, styles.cartWrapperLayout]}>
          <View style={[styles.cartWrapper, styles.cartWrapperLayout]}>
            <Text style={[styles.cart, styles.textTypo]}>Cart</Text>
          </View>
          <Image
            style={[styles.vectorIcon8, styles.groupChildLayout2]}
            contentFit="cover"
            source={require("../assets/vector33.png")}
          />
        </View>
        <View style={[styles.store1Parent, styles.parentPosition]}>
          <Image
            style={[styles.store1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/store-15.png")}
          />
          <Text style={[styles.shop, styles.textTypo]}>Shop</Text>
        </View>
        <View style={styles.groupParent1}>
          <View style={styles.vectorParent}>
            <Image
              style={styles.vectorIcon9}
              contentFit="cover"
              source={require("../assets/vector34.png")}
            />
            <View style={[styles.groupChild9, styles.groupChildLayout]} />
            <View style={[styles.groupChild10, styles.groupChildLayout]} />
            <View style={[styles.groupChild11, styles.groupChildLayout]} />
          </View>
          <Text style={[styles.explore, styles.textTypo]}>Explore</Text>
        </View>
        <View style={[styles.bookmark1Parent, styles.parentPosition]}>
          <Image
            style={[styles.bookmark1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bookmark-15.png")}
          />
          <Text style={[styles.shop, styles.textTypo]}>Favourite</Text>
        </View>
        <View style={[styles.user1Parent, styles.parentPosition]}>
          <Image
            style={[styles.user1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-15.png")}
          />
          <Text style={[styles.shop, styles.textTypo]}>Account</Text>
        </View>
      </View>
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shopClr: {
    color: Color.darkDeep,
    textAlign: "center",
  },
  cartChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#e2e2e2",
    borderStyle: "solid",
    position: "absolute",
  },
  parentLayout1: {
    height: 97,
    position: "absolute",
  },
  iconLayout1: {
    height: 65,
    left: 0,
  },
  parentLayout: {
    width: 261,
    height: 97,
    top: 0,
    position: "absolute",
  },
  h1FlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  groupChildLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  h11Typo: {
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
  },
  h2Layout: {
    height: 15,
    left: 0,
  },
  rectangleLayout: {
    height: 46,
    width: 46,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_mid,
    height: 46,
    width: 46,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "31.39%",
    right: "31.39%",
    width: "37.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  h2Layout1: {
    width: 72,
    position: "absolute",
  },
  googleLayout: {
    height: 67,
    width: 364,
    position: "absolute",
  },
  checkoutLayout: {
    height: 14,
    width: 134,
    position: "absolute",
  },
  textClr: {
    color: Color.gray_100,
    textAlign: "left",
    lineHeight: 18,
    top: 0,
  },
  wrapperLayout: {
    width: 33,
    height: 18,
  },
  textTypo: {
    fontSize: FontSize.menu12pxS_size,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  homePosition: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.hKGroteskRegular,
    marginTop: 0,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  cartWrapperLayout: {
    width: 26,
    position: "absolute",
  },
  parentPosition: {
    height: 42,
    top: 17,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    top: 0,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    height: "13.18%",
    left: "0%",
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#000",
    width: 22,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
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
    fontSize: FontSize.size_sm,
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
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  myCart1: {
    top: 56,
    left: 170,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.gilroyBoldRegular,
    color: Color.darkDeep,
    lineHeight: 18,
    position: "absolute",
  },
  myCartChild: {
    top: 105,
    width: 415,
    height: 1,
    borderTopWidth: 1,
    left: 0,
  },
  myCartItem: {
    top: 732,
    width: 415,
    height: 1,
    borderTopWidth: 1,
    left: 0,
  },
  myCartInner: {
    top: 263,
    width: 365,
    left: 25,
    borderTopWidth: 1,
    height: 1,
  },
  lineView: {
    top: 419,
    width: 365,
    left: 25,
    borderTopWidth: 1,
    height: 1,
  },
  myCartChild1: {
    top: 576,
    width: 365,
    left: 25,
    borderTopWidth: 1,
    height: 1,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon: {
    width: 70,
    height: 65,
    position: "absolute",
    top: 0,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Wrapper: {
    top: 16,
    width: 70,
    height: 65,
    position: "absolute",
  },
  h1: {
    width: 137,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontSize: FontSize.size_base,
    color: Color.darkDeep,
    fontFamily: FontFamily.gilroyBoldRegular,
    lineHeight: 18,
    letterSpacing: 0,
    left: 0,
    top: 0,
  },
  groupChild: {
    height: "14.64%",
    width: "5.51%",
    top: "-0.1%",
    right: "0.12%",
    bottom: "85.46%",
    left: "94.36%",
  },
  h11: {
    top: 65,
    left: 217,
    width: 44,
    lineHeight: 27,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.buttone16pxS_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.darkDeep,
    letterSpacing: 0,
    position: "absolute",
  },
  h2: {
    width: 72,
    position: "absolute",
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
    height: 15,
    top: 23,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.size_sm,
  },
  h12: {
    left: 63,
    top: 19,
    textAlign: "left",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.darkDeep,
    lineHeight: 18,
    letterSpacing: 0,
    position: "absolute",
  },
  groupItem: {
    borderColor: "#e2e2e2",
    borderRadius: Border.br_mid,
  },
  vectorIcon: {
    height: "37.22%",
    top: "31.39%",
    bottom: "31.39%",
  },
  rectangleParent: {
    left: 88,
    top: 0,
  },
  groupInner: {
    borderColor: "#f0f0f0",
  },
  vectorIcon1: {
    height: "6.21%",
    top: "46.9%",
    bottom: "46.89%",
  },
  rectangleGroup: {
    top: 1,
    left: 0,
  },
  h1Group: {
    top: 50,
    width: 133,
    height: 47,
    left: 0,
    position: "absolute",
  },
  h1Parent: {
    left: 103,
  },
  groupParent: {
    top: 136,
    width: 364,
    height: 97,
    left: 25,
  },
  pngfuel16Icon: {
    top: 5,
    width: 87,
    height: 87,
    left: 0,
    position: "absolute",
  },
  h1Container: {
    left: 115,
  },
  pngfuel16Parent: {
    top: 293,
    width: 375,
    left: 14,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon1: {
    top: 21,
    width: 69,
    height: 55,
    left: 0,
    position: "absolute",
  },
  h17: {
    top: 51,
    left: 211,
    width: 49,
    lineHeight: 27,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.buttone16pxS_size,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.darkDeep,
    letterSpacing: 0,
    position: "absolute",
  },
  h1Parent1: {
    left: 102,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Parent: {
    top: 450,
    left: 26,
    width: 363,
  },
  pngfuel3Icon: {
    top: 14,
    height: 65,
    left: 0,
  },
  h23: {
    width: 83,
    height: 18,
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
    top: 23,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  h1Parent3: {
    left: 105,
  },
  pngfuel3Parent: {
    top: 607,
    left: 24,
    width: 365,
  },
  groupChild8: {
    borderRadius: Border.br_lgi,
    backgroundColor: Color.mediumseagreen_100,
    left: 0,
    top: 0,
  },
  googleInner: {
    left: 0,
    top: 0,
  },
  goToCheckout: {
    height: 14,
    width: 134,
    position: "absolute",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.buttone16pxS_size,
    color: Color.gray_100,
    left: 0,
  },
  goToCheckoutWrapper: {
    left: 0,
    top: 0,
  },
  googleChild: {
    top: 27,
    left: 115,
  },
  text: {
    color: Color.gray_100,
    textAlign: "left",
    lineHeight: 18,
    top: 0,
  },
  wrapper: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameView: {
    left: 297,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.seagreen,
    paddingHorizontal: Padding.p_8xs,
    paddingVertical: Padding.p_11xs,
    top: 23,
    overflow: "hidden",
  },
  google: {
    top: 712,
    left: 25,
  },
  base: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    shadowColor: "rgba(230, 235, 243, 0.5)",
    shadowRadius: 37,
    elevation: 37,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: -5,
    },
    position: "absolute",
    width: "100%",
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
    color: Color.mediumseagreen_100,
    textAlign: "center",
    top: 0,
  },
  cartWrapper: {
    top: 25,
    height: 15,
    left: 0,
  },
  vectorIcon8: {
    height: "49.24%",
    width: "84.5%",
    right: "7.75%",
    bottom: "50.76%",
    left: "7.75%",
    top: "0%",
  },
  groupContainer: {
    left: 180,
    height: 40,
    top: 19,
  },
  store1Icon: {
    left: 3,
  },
  shop: {
    top: 27,
    color: Color.darkDeep,
    textAlign: "center",
  },
  store1Parent: {
    left: 31,
    width: 29,
  },
  vectorIcon9: {
    width: "64.22%",
    left: "35.78%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild9: {
    bottom: "86.82%",
    right: "68.76%",
    width: "31.24%",
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    height: "13.18%",
    top: "0%",
  },
  groupChild10: {
    width: "22.8%",
    top: "40.86%",
    right: "77.2%",
    bottom: "45.96%",
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    height: "13.18%",
  },
  groupChild11: {
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
    textAlign: "center",
  },
  groupParent1: {
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
  bookmark1Parent: {
    left: 245,
    width: 53,
  },
  user1Icon: {
    left: 11,
  },
  user1Parent: {
    left: 338,
    width: 46,
    height: 42,
  },
  bottomBar: {
    top: 804,
    left: -1,
    shadowColor: "rgba(85, 94, 88, 0.09)",
    shadowRadius: 15,
    elevation: 15,
    width: 414,
    height: 92,
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: -5,
    },
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    height: 5,
    width: 134,
    backgroundColor: Color.black,
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
  myCart: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default MyCart;
