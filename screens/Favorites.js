import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Favorites = () => {
  return (
    <View style={styles.favorites}>
      <View style={styles.statusBar}>
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
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <Text style={styles.favorurite}>Favorurite</Text>
      <View style={[styles.favoritesChild, styles.favoritesChildLayout]} />
      <View style={[styles.favoritesItem, styles.favoritesLayout]} />
      <View style={[styles.favoritesInner, styles.favoritesLayout]} />
      <View style={[styles.lineView, styles.favoritesLayout]} />
      <View style={[styles.favoritesChild1, styles.favoritesLayout]} />
      <View style={[styles.favoritesChild2, styles.favoritesChildLayout]} />
      <View style={[styles.groupView, styles.groupInnerLayout]}>
        <View style={[styles.groupParent, styles.groupInnerLayout]}>
          <View style={[styles.h1Parent, styles.parentLayout]}>
            <Text style={[styles.h1, styles.h1Typo]}>$1.50</Text>
            <Image
              style={[styles.backArrowIcon, styles.backIconLayout]}
              contentFit="cover"
              source={require("../assets/back-arrow10.png")}
            />
          </View>
          <View style={[styles.h1Group, styles.h11Position]}>
            <Text style={[styles.h11, styles.h11FlexBox]}>Sprite Can</Text>
            <Text style={[styles.h2, styles.h2Typo]}>325ml, Price</Text>
          </View>
        </View>
      </View>
      <View style={[styles.favoritesInner1, styles.groupInnerLayout]}>
        <View style={[styles.groupParent, styles.groupInnerLayout]}>
          <View style={[styles.h1Parent, styles.parentLayout]}>
            <Text style={[styles.h1, styles.h1Typo]}>$1.99</Text>
            <Image
              style={[styles.backArrowIcon, styles.backIconLayout]}
              contentFit="cover"
              source={require("../assets/back-arrow11.png")}
            />
          </View>
          <View style={[styles.h1Group, styles.h11Position]}>
            <Text style={[styles.h11, styles.h11FlexBox]}>Diet Coke</Text>
            <Text style={[styles.h2, styles.h2Typo]}>355ml, Price</Text>
          </View>
        </View>
      </View>
      <View style={[styles.favoritesInner2, styles.groupInnerLayout]}>
        <View style={[styles.groupParent, styles.groupInnerLayout]}>
          <View style={[styles.h1Parent2, styles.parentLayout]}>
            <Text style={[styles.h14, styles.h1Typo]}>$15.50</Text>
            <Image
              style={[styles.backArrowIcon2, styles.backIconLayout]}
              contentFit="cover"
              source={require("../assets/back-arrow12.png")}
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
      <View style={[styles.favoritesInner3, styles.groupInnerLayout]}>
        <View style={[styles.groupParent, styles.groupInnerLayout]}>
          <View style={[styles.h1Parent, styles.parentLayout]}>
            <Text style={[styles.h1, styles.h1Typo]}>$4.99</Text>
            <Image
              style={[styles.backArrowIcon, styles.backIconLayout]}
              contentFit="cover"
              source={require("../assets/back-arrow12.png")}
            />
          </View>
          <View style={[styles.h1Group, styles.h11Position]}>
            <Text style={[styles.h11, styles.h11FlexBox]}>Coca Cola Can</Text>
            <Text style={[styles.h2, styles.h2Typo]}>325ml, Price</Text>
          </View>
        </View>
      </View>
      <View style={[styles.favoritesInner4, styles.groupInnerLayout]}>
        <View style={[styles.groupParent, styles.groupInnerLayout]}>
          <View style={[styles.h1Parent, styles.parentLayout]}>
            <Text style={[styles.h1, styles.h1Typo]}>$4.99</Text>
            <Image
              style={[styles.backArrowIcon, styles.backIconLayout]}
              contentFit="cover"
              source={require("../assets/back-arrow12.png")}
            />
          </View>
          <View style={[styles.h1Group, styles.h11Position]}>
            <Text style={[styles.h11, styles.h11FlexBox]}>{`Pepsi Can `}</Text>
            <Text style={[styles.h2, styles.h2Typo]}>330ml, Price</Text>
          </View>
        </View>
      </View>
      <View style={[styles.pngfuel12Wrapper, styles.pngfuel12Layout]}>
        <Image
          style={[styles.pngfuel12Icon, styles.pngfuel12Layout]}
          contentFit="cover"
          source={require("../assets/pngfuel-121.png")}
        />
      </View>
      <Image
        style={[styles.pngfuel11Icon, styles.cartWrapperLayout]}
        contentFit="cover"
        source={require("../assets/pngfuel-111.png")}
      />
      <Image
        style={styles.treeTopJuiceAppleGrape64oIcon}
        contentFit="cover"
        source={require("../assets/treetopjuiceapplegrape64oz-11.png")}
      />
      <Image
        style={[styles.pngfuel13Icon, styles.store1ParentLayout]}
        contentFit="cover"
        source={require("../assets/pngfuel-131.png")}
      />
      <Image
        style={styles.pngfuel14Icon}
        contentFit="cover"
        source={require("../assets/pngfuel-141.png")}
      />
      <View style={[styles.google, styles.googleLayout]}>
        <View style={[styles.googleInner, styles.googleLayout]}>
          <View style={[styles.groupChild, styles.googleLayout]} />
        </View>
        <View style={[styles.googleChild, styles.addLayout]}>
          <View style={[styles.addAllToCartWrapper, styles.addLayout]}>
            <Text style={[styles.addAllTo, styles.addLayout]}>
              Add All To Cart
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.base} />
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
        <Text style={styles.courses}>Courses</Text>
        <Text style={[styles.profile, styles.homePosition]}>Profile</Text>
        <View style={[styles.groupParent4, styles.cartWrapperLayout]}>
          <View style={[styles.cartWrapper, styles.cartWrapperLayout]}>
            <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector24.png")}
          />
        </View>
        <View style={[styles.store1Parent, styles.store1ParentLayout]}>
          <Image
            style={[styles.store1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/store-14.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Shop</Text>
        </View>
        <View style={styles.groupParent5}>
          <View style={styles.vectorParent}>
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector25.png")}
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
            source={require("../assets/bookmark-14.png")}
          />
          <Text style={[styles.favourite, styles.cartTypo]}>Favourite</Text>
        </View>
        <View style={[styles.user1Parent, styles.parentPosition]}>
          <Image
            style={[styles.user1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-14.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Account</Text>
        </View>
      </View>
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={[styles.homeIndicator, styles.addLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    lineHeight: 18,
  },
  favoritesChildLayout: {
    height: 1,
    width: 415,
    borderTopWidth: 1,
    borderColor: "#e2e2e2",
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  favoritesLayout: {
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
    left: 0,
    top: 0,
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
  },
  h2Typo: {
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.size_sm,
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
  addLayout: {
    width: 134,
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
  cartTypo: {
    fontSize: FontSize.menu12pxS_size,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
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
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: "center",
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
  favorurite: {
    top: 56,
    left: 160,
    fontSize: FontSize.size_xl,
    color: Color.darkDeep,
    fontFamily: FontFamily.gilroyBoldRegular,
    textAlign: "center",
    lineHeight: 18,
    position: "absolute",
  },
  favoritesChild: {
    top: 105,
  },
  favoritesItem: {
    top: 220,
  },
  favoritesInner: {
    top: 335,
  },
  lineView: {
    top: 450,
  },
  favoritesChild1: {
    top: 555,
  },
  favoritesChild2: {
    top: 660,
  },
  h1: {
    textAlign: "left",
    lineHeight: 27,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    color: Color.darkDeep,
    letterSpacing: 0,
    position: "absolute",
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
    textAlign: "left",
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    color: Color.darkDeep,
    fontFamily: FontFamily.gilroyBoldRegular,
    letterSpacing: 0,
    lineHeight: 18,
  },
  h2: {
    top: 24,
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
  favoritesInner1: {
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
    color: Color.darkDeep,
    letterSpacing: 0,
    position: "absolute",
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
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    position: "absolute",
    alignItems: "center",
    display: "flex",
  },
  h1Parent3: {
    height: 42,
  },
  favoritesInner2: {
    top: 372,
    height: 42,
    left: 106,
    width: 283,
  },
  favoritesInner3: {
    top: 488,
    height: 42,
    left: 106,
    width: 283,
  },
  favoritesInner4: {
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
    borderRadius: Border.br_lgi,
    backgroundColor: Color.mediumseagreen_100,
    left: 0,
    top: 0,
  },
  googleInner: {
    left: 0,
    top: 0,
  },
  addAllTo: {
    fontSize: FontSize.buttone16pxS_size,
    color: Color.gray_100,
    height: 14,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    left: 0,
    top: 0,
    textAlign: "center",
    lineHeight: 18,
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
    width: 364,
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
    maxHeight: "100%",
    maxWidth: "100%",
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
  favorites: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Favorites;
