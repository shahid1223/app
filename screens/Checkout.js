import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const Checkout = () => {
  return (
    <View style={styles.checkout}>
      <View style={[styles.statusBar, styles.timePosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection1.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
      <Text style={[styles.myCart, styles.h1Typo1]}>My Cart</Text>
      <View style={[styles.checkoutChild, styles.checkoutLayout1]} />
      <View style={[styles.checkoutItem, styles.checkoutLayout1]} />
      <View style={[styles.checkoutInner, styles.checkoutPosition]} />
      <View style={[styles.lineView, styles.checkoutPosition]} />
      <View style={[styles.checkoutChild1, styles.checkoutPosition]} />
      <View style={[styles.groupParent, styles.parentLayout2]}>
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
            source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-3.png")}
          />
        </View>
        <View style={[styles.h1Parent, styles.parentLayout1]}>
          <Text style={[styles.h1, styles.h1FlexBox]}>Bell Pepper Red</Text>
          <Image
            style={[styles.groupChild, styles.childCardLayout]}
            contentFit="cover"
            source={require("../assets/group-6862.png")}
          />
          <Text style={[styles.h11, styles.checkoutTypo]}>$4.99</Text>
          <Text style={[styles.h2, styles.h2Layout]}>1kg, Price</Text>
          <View style={styles.h1Group}>
            <Text style={[styles.h12, styles.checkoutTypo]}>1</Text>
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector9.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector10.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.pngfuel16Parent, styles.parentLayout2]}>
        <Image
          style={styles.pngfuel16Icon}
          contentFit="cover"
          source={require("../assets/pngfuel-161.png")}
        />
        <View style={[styles.h1Container, styles.parentLayout1]}>
          <Text style={[styles.h1, styles.h1FlexBox]}>Egg Chicken Red</Text>
          <Image
            style={[styles.groupChild, styles.childCardLayout]}
            contentFit="cover"
            source={require("../assets/group-68621.png")}
          />
          <Text style={[styles.h11, styles.checkoutTypo]}>$1.99</Text>
          <Text style={[styles.h2, styles.h2Layout]}>4pcs, Price</Text>
          <View style={styles.h1Group}>
            <Text style={[styles.h12, styles.checkoutTypo]}>1</Text>
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector11.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector12.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.f1ea7dcce3b5d06cd1b1418f9b9413Parent,
          styles.parentLayout2,
        ]}
      >
        <Image
          style={styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon1}
          contentFit="cover"
          source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-31.png")}
        />
        <View style={[styles.h1Parent1, styles.parentLayout1]}>
          <Text style={[styles.h1, styles.h1FlexBox]}>Organic Bananas</Text>
          <Image
            style={[styles.groupChild, styles.childCardLayout]}
            contentFit="cover"
            source={require("../assets/group-68622.png")}
          />
          <Text style={[styles.h17, styles.checkoutTypo]}>$3.00</Text>
          <Text style={[styles.h2, styles.h2Layout]}>12kg, Price</Text>
          <View style={styles.h1Group}>
            <Text style={[styles.h12, styles.checkoutTypo]}>1</Text>
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector13.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector14.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.pngfuel3Parent, styles.parentLayout2]}>
        <Image
          style={[styles.pngfuel3Icon, styles.h2Layout1]}
          contentFit="cover"
          source={require("../assets/pngfuel-3.png")}
        />
        <View style={[styles.h1Parent3, styles.parentLayout1]}>
          <Text style={[styles.h1, styles.h1FlexBox]}>Ginger</Text>
          <Image
            style={[styles.groupChild, styles.childCardLayout]}
            contentFit="cover"
            source={require("../assets/group-68623.png")}
          />
          <Text style={[styles.h11, styles.checkoutTypo]}>$2.99</Text>
          <Text style={styles.h23}>250gm, Price</Text>
          <View style={styles.h1Group}>
            <Text style={[styles.h12, styles.checkoutTypo]}>1</Text>
            <View style={[styles.rectangleParent, styles.rectangleLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector15.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Image
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
                contentFit="cover"
                source={require("../assets/vector16.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.google, styles.googleLayout]}>
        <View style={[styles.googleInner, styles.googleLayout]}>
          <View style={[styles.groupChild8, styles.childBg]} />
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
      <View style={[styles.checkoutChild2, styles.checkoutCardLayout]} />
      <View style={[styles.bottomBar, styles.baseShadowBox]}>
        <View style={[styles.base, styles.basePosition]} />
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
        <Text style={styles.courses}>Courses</Text>
        <Text style={[styles.profile, styles.profilePosition]}>Profile</Text>
        <View style={[styles.groupContainer, styles.cartWrapperLayout]}>
          <View style={[styles.cartWrapper, styles.cartWrapperLayout]}>
            <Text style={[styles.cart, styles.textTypo]}>Cart</Text>
          </View>
          <Image
            style={[styles.vectorIcon8, styles.childCardLayout]}
            contentFit="cover"
            source={require("../assets/vector17.png")}
          />
        </View>
        <View style={[styles.store1Parent, styles.parentPosition]}>
          <Image
            style={[styles.store1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/store-11.png")}
          />
          <Text style={[styles.shop, styles.shopTypo]}>Shop</Text>
        </View>
        <View style={styles.groupParent1}>
          <View style={styles.vectorParent}>
            <Image
              style={styles.vectorIcon9}
              contentFit="cover"
              source={require("../assets/vector18.png")}
            />
            <View style={[styles.groupChild9, styles.groupChildLayout]} />
            <View style={[styles.groupChild10, styles.groupChildLayout]} />
            <View style={[styles.groupChild11, styles.groupChildLayout]} />
          </View>
          <Text style={[styles.explore, styles.shopTypo]}>Explore</Text>
        </View>
        <View style={[styles.bookmark1Parent, styles.parentPosition]}>
          <Image
            style={[styles.bookmark1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bookmark-11.png")}
          />
          <Text style={[styles.shop, styles.shopTypo]}>Favourite</Text>
        </View>
        <View style={[styles.user1Parent, styles.parentPosition]}>
          <Image
            style={[styles.user1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-11.png")}
          />
          <Text style={[styles.shop, styles.shopTypo]}>Account</Text>
        </View>
      </View>
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.checkoutCard, styles.checkoutCardLayout]}>
        <Text style={[styles.home1, styles.home1Position]}>Home</Text>
        <Text style={[styles.profile1, styles.home1Position]}>Profile</Text>
        <Text style={[styles.delivery, styles.checkoutTypo]}>Delivery</Text>
        <Text style={[styles.pament, styles.checkoutTypo]}>Pament</Text>
        <Text style={[styles.promoCode, styles.checkoutTypo]}>Promo Code</Text>
        <Text style={[styles.totalCost, styles.checkoutTypo]}>Total Cost</Text>
        <View style={[styles.selectMethodParent, styles.parentLayout]}>
          <Text style={[styles.selectMethod, styles.checkoutTypo]}>
            Select Method
          </Text>
          <Image
            style={[styles.backArrowIcon, styles.backIconLayout]}
            contentFit="cover"
            source={require("../assets/back-arrow1.png")}
          />
        </View>
        <Image
          style={[styles.checkoutCardChild, styles.childCardLayout]}
          contentFit="cover"
          source={require("../assets/group-6868.png")}
        />
        <View style={[styles.pickDiscountParent, styles.parentLayout]}>
          <Text style={[styles.selectMethod, styles.checkoutTypo]}>
            Pick discount
          </Text>
          <Image
            style={[styles.backArrowIcon1, styles.backIconLayout]}
            contentFit="cover"
            source={require("../assets/back-arrow1.png")}
          />
        </View>
        <View style={[styles.parent, styles.parentLayout]}>
          <Text style={[styles.selectMethod, styles.checkoutTypo]}>$13.97</Text>
          <Image
            style={[styles.backArrowIcon2, styles.backIconLayout]}
            contentFit="cover"
            source={require("../assets/back-arrow1.png")}
          />
        </View>
        <Image
          style={[styles.checkoutCardItem, styles.childCardLayout]}
          contentFit="cover"
          source={require("../assets/group-6846.png")}
        />
        <Image
          style={[styles.checkoutCardInner, styles.checkoutCardLayout]}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
        <Image
          style={[styles.checkoutCardChild1, styles.checkoutCardLayout1]}
          contentFit="cover"
          source={require("../assets/vector-6.png")}
        />
        <Image
          style={[styles.checkoutCardChild2, styles.checkoutCardLayout1]}
          contentFit="cover"
          source={require("../assets/vector-6.png")}
        />
        <Image
          style={[styles.checkoutCardChild3, styles.checkoutCardLayout1]}
          contentFit="cover"
          source={require("../assets/vector-6.png")}
        />
        <Image
          style={[styles.checkoutCardChild4, styles.checkoutCardLayout1]}
          contentFit="cover"
          source={require("../assets/vector-6.png")}
        />
        <Text style={[styles.h24, styles.checkoutTypo]}>
          <Text style={styles.h2Txt}>
            <Text
              style={styles.byPlacingAn}
            >{`By placing an order you agree to our
`}</Text>
            <Text style={styles.terms}>Terms</Text>
            <Text style={styles.byPlacingAn}>{` And `}</Text>
            <Text style={styles.terms}>Conditions</Text>
          </Text>
        </Text>
        <Text style={[styles.checkout1, styles.checkoutTypo]}>Checkout</Text>
      </View>
      <View style={[styles.button, styles.googleLayout]}>
        <View style={[styles.buttonChild, styles.basePosition]} />
        <Text style={[styles.placeOrder, styles.checkoutTypo]}>
          Place Order
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  h1Typo1: {
    fontFamily: FontFamily.gilroyBoldRegular,
    lineHeight: 18,
  },
  checkoutLayout1: {
    width: 415,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#e2e2e2",
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  checkoutPosition: {
    borderTopWidth: 1,
    width: 365,
    left: 25,
    height: 1,
    borderColor: "#e2e2e2",
    borderStyle: "solid",
    position: "absolute",
  },
  parentLayout2: {
    height: 97,
    position: "absolute",
  },
  iconLayout1: {
    height: 65,
    left: 0,
  },
  parentLayout1: {
    width: 261,
    height: 97,
    top: 0,
    position: "absolute",
  },
  h1FlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  childCardLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  checkoutTypo: {
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
  childBg: {
    backgroundColor: Color.mediumseagreen_100,
    borderRadius: Border.br_lgi,
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
    top: 0,
    position: "absolute",
  },
  checkoutCardLayout: {
    width: 414,
    position: "absolute",
  },
  baseShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: -5,
    },
  },
  basePosition: {
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
  profilePosition: {
    left: "81.6%",
    width: "10.4%",
    textAlign: "right",
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
  shopTypo: {
    color: Color.gray_300,
    fontSize: FontSize.menu12pxS_size,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_smi,
    height: "13.18%",
    left: "0%",
    position: "absolute",
  },
  home1Position: {
    marginTop: 0.5,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.hKGroteskRegular,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  parentLayout: {
    height: 20,
    position: "absolute",
  },
  backIconLayout: {
    width: 8,
    height: 14,
    top: 2,
    position: "absolute",
    overflow: "hidden",
  },
  checkoutCardLayout1: {
    width: 364,
    left: 25,
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
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    backgroundColor: Color.black,
    top: 2,
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
  myCart: {
    top: 56,
    left: 170,
    fontSize: FontSize.size_xl,
    color: Color.darkDeep,
    textAlign: "center",
    position: "absolute",
  },
  checkoutChild: {
    top: 105,
    height: 1,
  },
  checkoutItem: {
    top: 732,
    height: 1,
  },
  checkoutInner: {
    top: 263,
    width: 365,
    left: 25,
    height: 1,
  },
  lineView: {
    top: 419,
    width: 365,
    left: 25,
    height: 1,
  },
  checkoutChild1: {
    top: 576,
    width: 365,
    left: 25,
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
    position: "absolute",
    fontSize: FontSize.size_base,
    color: Color.darkDeep,
    lineHeight: 18,
    letterSpacing: 0,
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
  goToCheckout: {
    height: 14,
    width: 134,
    position: "absolute",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.buttone16pxS_size,
    left: 0,
    top: 0,
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
  checkoutChild2: {
    left: 0,
    backgroundColor: Color.black,
    opacity: 0.4,
    top: 0,
    height: 896,
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
    left: "8%",
    width: "9.87%",
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
    textAlign: "right",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.hKGroteskRegular,
    marginTop: 0,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  cart: {
    color: Color.mediumseagreen_100,
    textAlign: "center",
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
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_smi,
    height: "13.18%",
    top: "0%",
  },
  groupChild10: {
    width: "22.8%",
    top: "40.86%",
    right: "77.2%",
    bottom: "45.96%",
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_smi,
    height: "13.18%",
  },
  groupChild11: {
    top: "81.72%",
    bottom: "5.1%",
    right: "68.76%",
    width: "31.24%",
    backgroundColor: Color.gray_300,
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
    height: 92,
    width: 414,
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
  home1: {
    left: "8%",
    width: "9.87%",
    textAlign: "left",
  },
  profile1: {
    textAlign: "right",
    left: "81.6%",
    width: "10.4%",
  },
  delivery: {
    top: 109,
    color: Color.gray_200,
    fontSize: FontSize.buttone16pxS_size,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
    left: 25,
  },
  pament: {
    top: 171,
    color: Color.gray_200,
    fontSize: FontSize.buttone16pxS_size,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
    left: 25,
  },
  promoCode: {
    top: 233,
    color: Color.gray_200,
    fontSize: FontSize.buttone16pxS_size,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
    left: 25,
  },
  totalCost: {
    top: 295,
    color: Color.gray_200,
    fontSize: FontSize.buttone16pxS_size,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
    left: 25,
  },
  selectMethod: {
    textAlign: "right",
    fontSize: FontSize.size_base,
    color: Color.darkDeep,
    left: 0,
    top: 0,
    position: "absolute",
  },
  backArrowIcon: {
    left: 123,
  },
  selectMethodParent: {
    top: 110,
    left: 258,
    width: 131,
  },
  checkoutCardChild: {
    height: "2.02%",
    width: "10.87%",
    top: "21.87%",
    right: "6.04%",
    bottom: "76.11%",
    left: "83.09%",
  },
  backArrowIcon1: {
    left: 113,
  },
  pickDiscountParent: {
    top: 234,
    left: 268,
    width: 121,
  },
  backArrowIcon2: {
    left: 58,
  },
  parent: {
    top: 296,
    left: 323,
    width: 66,
  },
  checkoutCardItem: {
    height: "1.99%",
    width: "3.84%",
    top: "4.63%",
    right: "6.01%",
    bottom: "93.38%",
    left: "90.14%",
  },
  checkoutCardInner: {
    top: 89,
    height: 1,
    left: 0,
  },
  checkoutCardChild1: {
    top: 151,
    height: 1,
    position: "absolute",
  },
  checkoutCardChild2: {
    top: 213,
    height: 1,
    position: "absolute",
  },
  checkoutCardChild3: {
    top: 275,
    height: 1,
    position: "absolute",
  },
  checkoutCardChild4: {
    top: 337,
    height: 1,
    position: "absolute",
  },
  byPlacingAn: {
    color: Color.gray_200,
  },
  terms: {
    color: Color.darkDeep,
  },
  h2Txt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  h24: {
    width: "86.71%",
    top: "45.13%",
    left: "6.04%",
    lineHeight: 21,
    alignItems: "center",
    position: "absolute",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  checkout1: {
    top: 30,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
    left: 25,
    color: Color.darkDeep,
  },
  checkoutCard: {
    top: 365,
    left: 1,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.whitesmoke_100,
    height: 791,
    overflow: "hidden",
  },
  buttonChild: {
    backgroundColor: Color.mediumseagreen_100,
    borderRadius: Border.br_lgi,
  },
  placeOrder: {
    top: "36.57%",
    left: "36.53%",
    color: Color.ghostwhite,
    fontSize: FontSize.buttone16pxS_size,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 18,
    position: "absolute",
  },
  button: {
    top: 791,
    left: 25,
  },
  checkout: {
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Checkout;
