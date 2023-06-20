import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Search = () => {
  return (
    <View style={[styles.search, styles.baseLayout]}>
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <Image
        style={[styles.backArrowIcon, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/back-arrow.png")}
      />
      <Image
        style={[styles.searchChild, styles.searchChildLayout]}
        contentFit="cover"
        source={require("../assets/group-6839.png")}
      />
      <View style={[styles.search1, styles.searchLayout]}>
        <View style={[styles.searchItem, styles.searchLayout]} />
        <Image
          style={[styles.searchInner, styles.searchInnerLayout]}
          contentFit="cover"
          source={require("../assets/group-6847.png")}
        />
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={styles.egg}>Egg</Text>
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.h1, styles.h1FlexBox]}>Mayonnais Eggless</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$4.99</Text>
          <View style={styles.rectangleGroup}>
            <View style={styles.groupItem} />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <Text style={[styles.h2, styles.h2Typo]}>325ml, Price</Text>
        </View>
        <Image
          style={[styles.americanGardenMayonnaiseEggIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/americangardenmayonnaiseeggless473ml-1.png")}
        />
        <Image
          style={[
            styles.americanGardenMayonnaiseEggIcon1,
            styles.bottomBarLayout,
          ]}
          contentFit="cover"
          source={require("../assets/americangardenmayonnaiseeggless473ml-2.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.h12, styles.h1FlexBox]}>Egg Noodles</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$4.99</Text>
          <View style={styles.rectangleGroup}>
            <View style={styles.groupItem} />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
          <Text style={[styles.h21, styles.h2Typo]}>330ml, Price</Text>
        </View>
        <Image
          style={[
            styles.rp247903920053554627L1Icon,
            styles.eggNoodle11Position,
          ]}
          contentFit="cover"
          source={require("../assets/rp-24790392-0053554627-l-1.png")}
        />
        <Image
          style={styles.rp247903920053554627L2Icon}
          contentFit="cover"
          source={require("../assets/rp-24790392-0053554627-l-2.png")}
        />
      </View>
      <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      <View style={[styles.barsHomeIndicatorIphone, styles.searchInnerLayout]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={[styles.groupParent1, styles.groupParent1Position]}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.h12, styles.h1FlexBox]}>Egg Chicken Red</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$1.99</Text>
          <View style={styles.rectangleGroup}>
            <View style={styles.groupItem} />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
          </View>
          <Text style={[styles.h2, styles.h2Typo]}>4pcs, Price</Text>
        </View>
        <Image
          style={styles.pngfuel15Icon}
          contentFit="cover"
          source={require("../assets/pngfuel-15.png")}
        />
        <Image
          style={styles.pngfuel16Icon}
          contentFit="cover"
          source={require("../assets/pngfuel-16.png")}
        />
      </View>
      <View style={[styles.groupParent2, styles.groupParentPosition]}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={styles.h16}>{`Egg Pasta `}</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$15.99</Text>
          <View style={styles.rectangleGroup}>
            <View style={styles.groupItem} />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector4.png")}
            />
          </View>
          <Text style={[styles.h23, styles.h2Typo]}>30gm, Price</Text>
        </View>
        <View style={[styles.hiclipart1Parent, styles.hiclipart2IconLayout]}>
          <Image
            style={styles.hiclipart1Icon}
            contentFit="cover"
            source={require("../assets/hiclipart-1.png")}
          />
          <Image
            style={[styles.hiclipart2Icon, styles.hiclipart2IconLayout]}
            contentFit="cover"
            source={require("../assets/hiclipart-2.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent3, styles.groupParentPosition]}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={styles.h16}>Egg Noodles</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$15.99</Text>
          <View style={styles.rectangleGroup}>
            <View style={styles.groupItem} />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector5.png")}
            />
          </View>
          <Text style={[styles.h23, styles.h2Typo]}>2L, Price</Text>
        </View>
        <Image
          style={[styles.eggNoodle11, styles.eggNoodle11Position]}
          contentFit="cover"
          source={require("../assets/eggnoodle-1-1.png")}
        />
        <Image
          style={styles.eggNoodle12}
          contentFit="cover"
          source={require("../assets/eggnoodle-1-2.png")}
        />
      </View>
      <View style={[styles.searchInner1, styles.groupParent1Position]}>
        <View style={[styles.rectangleParent, styles.groupParentLayout]}>
          <View style={styles.groupChildShadowBox} />
          <Text style={[styles.h110, styles.h1FlexBox]}>Egg Chicken White</Text>
          <Text style={[styles.h11, styles.h1FlexBox]}>$1.50</Text>
          <View style={styles.rectangleGroup}>
            <View style={styles.groupItem} />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
          <Text style={[styles.h25, styles.h2Typo]}>180g, Price</Text>
          <Image
            style={[styles.pngfuel17Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/pngfuel-17.png")}
          />
          <Image
            style={styles.pngfuel18Icon}
            contentFit="cover"
            source={require("../assets/pngfuel-18.png")}
          />
        </View>
      </View>
      <View style={[styles.bottomBar, styles.bottomBarLayout]}>
        <View style={[styles.base, styles.basePosition]} />
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
        <Text style={[styles.courses, styles.homePosition]}>Courses</Text>
        <Text style={[styles.profile1, styles.homePosition]}>Profile</Text>
        <View style={[styles.groupParent4, styles.cartWrapperLayout]}>
          <View style={[styles.cartWrapper, styles.cartWrapperLayout]}>
            <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
          </View>
          <Image
            style={[styles.vectorIcon7, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
        </View>
        <View style={[styles.store1Parent, styles.parentPosition]}>
          <Image
            style={[styles.store1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/store-1.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Shop</Text>
        </View>
        <View style={styles.groupParent5}>
          <View style={styles.vectorGroup}>
            <Image
              style={[styles.vectorIcon8, styles.basePosition]}
              contentFit="cover"
              source={require("../assets/vector8.png")}
            />
            <View style={[styles.groupChild9, styles.groupChildLayout]} />
            <View style={[styles.groupChild10, styles.groupChildLayout]} />
            <View style={[styles.groupChild11, styles.groupChildLayout]} />
          </View>
          <Text style={styles.explore}>Explore</Text>
        </View>
        <View style={[styles.bookmark1Parent, styles.parentPosition]}>
          <Image
            style={[styles.bookmark1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bookmark-1.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Favourite</Text>
        </View>
        <View style={[styles.user1Parent, styles.parentPosition]}>
          <Image
            style={[styles.user1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-1.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Account</Text>
        </View>
      </View>
      <View style={[styles.barsHomeIndicatorIphone, styles.searchInnerLayout]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseLayout: {
    width: "100%",
    backgroundColor: Color.white,
  },
  capacityBg: {
    backgroundColor: Color.black,
    position: "absolute",
  },
  searchChildLayout: {
    height: 18,
    position: "absolute",
  },
  searchLayout: {
    height: 52,
    width: 325,
    position: "absolute",
  },
  searchInnerLayout: {
    height: 16,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupParentLayout: {
    height: 249,
    width: 173,
    position: "absolute",
  },
  h1FlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.darkDeep,
    left: 15,
    textAlign: "left",
    lineHeight: 18,
    letterSpacing: 0,
    position: "absolute",
  },
  h2Typo: {
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
    height: 15,
    alignItems: "center",
    display: "flex",
    left: 15,
    textAlign: "left",
    lineHeight: 18,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconPosition: {
    top: 42,
    position: "absolute",
  },
  bottomBarLayout: {
    height: 92,
    position: "absolute",
  },
  eggNoodle11Position: {
    top: 35,
    position: "absolute",
  },
  profileTypo: {
    textAlign: "right",
    left: "81.6%",
    width: "10.4%",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.hKGroteskRegular,
  },
  groupParent1Position: {
    top: 130,
    height: 249,
    width: 173,
    position: "absolute",
  },
  groupParentPosition: {
    top: 394,
    height: 249,
    width: 173,
    position: "absolute",
  },
  hiclipart2IconLayout: {
    height: 97,
    width: 72,
    position: "absolute",
  },
  basePosition: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  homePosition: {
    marginTop: 0,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  cartWrapperLayout: {
    width: 26,
    position: "absolute",
  },
  cartTypo: {
    color: Color.gray_300,
    fontSize: FontSize.menu12pxS_size,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
    left: 0,
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
    borderRadius: Border.br_smi,
    height: "13.18%",
    backgroundColor: Color.mediumseagreen_100,
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
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    top: 2,
    backgroundColor: Color.black,
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
  backArrowIcon: {
    top: 57,
    width: 10,
    left: 25,
    overflow: "hidden",
  },
  searchChild: {
    top: 66,
    left: 369,
    width: 17,
  },
  searchItem: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.whitesmoke_100,
    left: 0,
    top: 0,
  },
  searchInner: {
    left: 296,
    width: 16,
    top: 18,
  },
  vectorIcon: {
    height: "94.79%",
    width: "15.87%",
    right: "84.13%",
    bottom: "5.21%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  egg: {
    left: 28,
    color: "#181b19",
    width: 86,
    textAlign: "left",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    top: 2,
    position: "absolute",
  },
  vectorParent: {
    height: "37.24%",
    width: "34.85%",
    top: "31.38%",
    right: "60.6%",
    bottom: "31.38%",
    left: "4.56%",
    position: "absolute",
  },
  search1: {
    top: 49,
    left: 25,
  },
  groupChildShadowBox: {
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 249,
    width: 173,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  h1: {
    width: 158,
    fontFamily: FontFamily.gilroyBoldRegular,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    top: 130,
  },
  h11: {
    top: 205,
    fontSize: FontSize.buttone16pxS_size,
    width: 52,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
  },
  groupItem: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.mediumseagreen_100,
    height: 46,
    width: 46,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIcon1: {
    height: "37.22%",
    width: "37.22%",
    top: "31.39%",
    right: "31.39%",
    bottom: "31.39%",
    left: "31.39%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 188,
    left: 114,
    height: 46,
    width: 46,
    position: "absolute",
  },
  h2: {
    width: 78,
    height: 15,
    top: 153,
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  americanGardenMayonnaiseEggIcon: {
    left: 59,
    width: 54,
    height: 72,
  },
  americanGardenMayonnaiseEggIcon1: {
    left: 61,
    width: 51,
    top: 18,
  },
  groupParent: {
    left: 24,
    top: 658,
    width: 173,
  },
  h12: {
    width: 137,
    fontFamily: FontFamily.gilroyBoldRegular,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    top: 130,
  },
  h21: {
    width: 81,
    height: 15,
    top: 153,
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
  },
  rp247903920053554627L1Icon: {
    left: 32,
    width: 109,
    height: 70,
  },
  rp247903920053554627L2Icon: {
    top: 37,
    left: 36,
    width: 101,
    height: 65,
    position: "absolute",
  },
  groupContainer: {
    left: 212,
    top: 658,
    width: 173,
  },
  profile: {
    marginTop: 384.83,
    fontSize: FontSize.size_sm,
    textAlign: "right",
    left: "81.6%",
    width: "10.4%",
    top: "50%",
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
    opacity: 0.1,
  },
  pngfuel15Icon: {
    top: 60,
    left: 48,
    width: 79,
    height: 55,
    position: "absolute",
  },
  pngfuel16Icon: {
    top: 11,
    width: 122,
    height: 122,
    left: 24,
    position: "absolute",
  },
  groupParent1: {
    left: 24,
  },
  h16: {
    top: 140,
    lineHeight: 20,
    color: Color.darkDeep,
    left: 15,
    fontFamily: FontFamily.gilroyBoldRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  h23: {
    top: 172,
    width: 89,
    height: 15,
  },
  hiclipart1Icon: {
    top: 28,
    left: -1,
    width: 75,
    height: 75,
    position: "absolute",
  },
  hiclipart2Icon: {
    left: 0,
    top: 0,
  },
  hiclipart1Parent: {
    top: 20,
    left: 50,
  },
  groupParent2: {
    left: 24,
  },
  eggNoodle11: {
    left: 55,
    width: 63,
    height: 81,
  },
  eggNoodle12: {
    left: 56,
    width: 61,
    height: 94,
    top: 17,
    position: "absolute",
  },
  groupParent3: {
    left: 212,
  },
  h110: {
    width: 153,
    fontFamily: FontFamily.gilroyBoldRegular,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    top: 130,
  },
  h25: {
    width: 82,
    height: 15,
    top: 153,
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
  },
  pngfuel17Icon: {
    left: 43,
    width: 90,
    height: 77,
    opacity: 0.7,
  },
  pngfuel18Icon: {
    left: 22,
    width: 129,
    height: 86,
    top: 25,
    position: "absolute",
  },
  searchInner1: {
    left: 212,
  },
  base: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    shadowColor: "rgba(230, 235, 243, 0.5)",
    shadowRadius: 37,
    elevation: 37,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    left: "0%",
    width: "100%",
    backgroundColor: Color.white,
  },
  home: {
    width: "9.87%",
    left: "8%",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.hKGroteskRegular,
    marginTop: 0,
    textAlign: "left",
  },
  courses: {
    width: "13.87%",
    left: "43.07%",
    fontWeight: "700",
    fontFamily: FontFamily.hKGroteskBold,
    color: Color.mediumslateblue_100,
    textAlign: "center",
  },
  profile1: {
    textAlign: "right",
    left: "81.6%",
    width: "10.4%",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.hKGroteskRegular,
  },
  cart: {
    top: 0,
  },
  cartWrapper: {
    top: 25,
    height: 15,
    left: 0,
  },
  vectorIcon7: {
    height: "49.24%",
    width: "84.5%",
    right: "7.75%",
    bottom: "50.76%",
    left: "7.75%",
    top: "0%",
    position: "absolute",
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
  },
  store1Parent: {
    left: 31,
    width: 29,
  },
  vectorIcon8: {
    width: "64.22%",
    left: "35.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild9: {
    bottom: "86.82%",
    right: "68.76%",
    width: "31.24%",
    borderRadius: Border.br_smi,
    height: "13.18%",
    top: "0%",
  },
  groupChild10: {
    width: "22.8%",
    top: "40.86%",
    right: "77.2%",
    bottom: "45.96%",
    borderRadius: Border.br_smi,
    height: "13.18%",
  },
  groupChild11: {
    top: "81.72%",
    bottom: "5.1%",
    right: "68.76%",
    width: "31.24%",
    borderRadius: Border.br_smi,
    height: "13.18%",
  },
  vectorGroup: {
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
    color: Color.mediumseagreen_100,
    fontSize: FontSize.menu12pxS_size,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
    left: 0,
    position: "absolute",
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
    shadowColor: "rgba(85, 94, 88, 0.09)",
    shadowRadius: 15,
    elevation: 15,
    width: 414,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    left: 0,
    overflow: "hidden",
  },
  search: {
    flex: 1,
    height: 896,
    overflow: "hidden",
  },
});

export default Search;
