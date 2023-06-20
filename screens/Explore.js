import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Explore = () => {
  return (
    <View style={[styles.explore, styles.baseLayout]}>
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap7.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi7.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection7.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <Text style={styles.findProducts}>Find Products</Text>
      <Text style={styles.findProducts}>Find Products</Text>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.searchLayout]} />
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector41.png")}
          />
          <Text style={styles.searchStore}>Search Store</Text>
        </View>
      </View>
      <View style={[styles.beefBone, styles.beefBoneLayout]}>
        <View style={[styles.rectangleParent, styles.beefBoneLayout]}>
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
          <Image
            style={styles.pngfuel6Icon}
            contentFit="cover"
            source={require("../assets/pngfuel-6.png")}
          />
          <Text style={[styles.h1, styles.h1Typo]}>{`Frash Fruits
& Vegetable`}</Text>
        </View>
      </View>
      <View style={[styles.beefBone1, styles.beefPosition1]}>
        <View style={[styles.rectangleParent, styles.beefBoneLayout]}>
          <View style={[styles.groupItem, styles.groupChildShadowBox]} />
          <Text style={[styles.h11, styles.h1Typo]}>{`Cooking Oil
& Ghee`}</Text>
          <View style={[styles.pngfuel7Parent, styles.pngfuel7Layout]}>
            <Image
              style={styles.pngfuel7Icon}
              contentFit="cover"
              source={require("../assets/pngfuel-7.png")}
            />
            <Image
              style={[styles.pngfuel8Icon, styles.pngfuel7Layout]}
              contentFit="cover"
              source={require("../assets/pngfuel-8.png")}
            />
          </View>
          <View style={[styles.pngfuel7Group, styles.pngfuel7Layout]}>
            <Image
              style={styles.pngfuel7Icon}
              contentFit="cover"
              source={require("../assets/pngfuel-71.png")}
            />
            <Image
              style={[styles.pngfuel8Icon, styles.pngfuel7Layout]}
              contentFit="cover"
              source={require("../assets/pngfuel-81.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.beefBone2, styles.beefPosition1]}>
        <View style={[styles.rectangleParent, styles.beefBoneLayout]}>
          <View style={[styles.groupInner, styles.groupChildShadowBox]} />
          <Image
            style={styles.pngfuel6Icon1}
            contentFit="cover"
            source={require("../assets/pngfuel-61.png")}
          />
          <Text style={[styles.h12, styles.h12Typo]}>{`Bakery & Snacks`}</Text>
        </View>
      </View>
      <View style={[styles.beefBone3, styles.beefPosition1]}>
        <View style={[styles.rectangleParent, styles.beefBoneLayout]}>
          <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
          <Image
            style={[styles.pngfuel6Icon2, styles.pngfuel6IconPosition]}
            contentFit="cover"
          />
          <Text style={[styles.h13, styles.h12Typo]}>Beverages</Text>
        </View>
      </View>
      <View style={[styles.beefBone4, styles.beefPosition1]}>
        <View style={[styles.rectangleParent, styles.beefBoneLayout]}>
          <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
          <Image
            style={[styles.pngfuel6Icon3, styles.pngfuel6IconPosition]}
            contentFit="cover"
            source={require("../assets/pngfuel-62.png")}
          />
          <Text style={[styles.h13, styles.h12Typo]}>Beverages</Text>
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.ellipseIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-15.png")}
            />
            <View style={styles.groupChild2} />
            <View style={styles.groupChildPosition2} />
            <View style={styles.groupChildPosition1} />
          </View>
        </View>
      </View>
      <View style={[styles.beefBone5, styles.beefPosition]}>
        <View style={[styles.rectangleParent, styles.beefBoneLayout]}>
          <View style={[styles.groupChild5, styles.groupChildShadowBox]} />
          <Text style={[styles.h15, styles.h12Typo]}>{`Meat & Fish`}</Text>
        </View>
      </View>
      <View style={[styles.beefBone6, styles.beefPosition]}>
        <View style={[styles.rectangleParent, styles.beefBoneLayout]}>
          <View style={[styles.groupChild6, styles.groupChildShadowBox]} />
          <Text style={[styles.h16, styles.h12Typo]}>{`Dairy & Eggs`}</Text>
        </View>
      </View>
      <Image
        style={[styles.pngfuel6Icon4, styles.pngfuel6Icon4Layout]}
        contentFit="cover"
        source={require("../assets/pngfuel-63.png")}
      />
      <View style={[styles.pngfuelParent, styles.pngfuelIconLayout]}>
        <Image
          style={styles.pngfuelIcon}
          contentFit="cover"
          source={require("../assets/pngfuel.png")}
        />
        <Image
          style={[styles.pngfuelIcon1, styles.pngfuelIconLayout]}
          contentFit="cover"
          source={require("../assets/pngfuel1.png")}
        />
      </View>
      <View style={[styles.beefBone7, styles.beefPosition]}>
        <View style={[styles.rectangleParent, styles.beefBoneLayout]}>
          <View style={[styles.groupChild7, styles.groupChildShadowBox]} />
          <Image
            style={[styles.pngfuel6Icon3, styles.pngfuel6IconPosition]}
            contentFit="cover"
            source={require("../assets/pngfuel-62.png")}
          />
          <Text style={[styles.h16, styles.h12Typo]}>{`Dairy & Eggs`}</Text>
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.ellipseIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-15.png")}
            />
            <View style={styles.groupChild2} />
            <View style={styles.groupChildPosition2} />
            <View style={styles.groupChildPosition1} />
          </View>
        </View>
      </View>
      <Image
        style={[styles.pngfuel9Icon, styles.pngfuelIconLayout]}
        contentFit="cover"
        source={require("../assets/pngfuel-9.png")}
      />
      <View style={[styles.bottomBar, styles.groupChildShadowBox]}>
        <View style={[styles.base, styles.iconPosition]} />
        <Text style={styles.home}>Home</Text>
        <Text style={[styles.courses, styles.timeTypo]}>Courses</Text>
        <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <View style={[styles.cartWrapper, styles.groupParentLayout]}>
            <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
          </View>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector42.png")}
          />
        </View>
        <View style={[styles.store1Parent, styles.parentPosition]}>
          <Image
            style={[styles.store1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/store-16.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Shop</Text>
        </View>
        <View style={styles.groupContainer}>
          <View style={styles.vectorGroup}>
            <Image
              style={[styles.vectorIcon2, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/vector43.png")}
            />
            <View style={[styles.groupChild12, styles.groupChildLayout]} />
            <View style={[styles.groupChild13, styles.groupChildLayout]} />
            <View style={[styles.groupChild14, styles.groupChildLayout]} />
          </View>
          <Text style={[styles.explore1, styles.cartTypo]}>Explore</Text>
        </View>
        <View style={[styles.bookmark1Parent, styles.parentPosition]}>
          <Image
            style={[styles.bookmark1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bookmark-16.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Favourite</Text>
        </View>
        <View style={[styles.user1Parent, styles.parentPosition]}>
          <Image
            style={[styles.user1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-16.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Account</Text>
        </View>
      </View>
      <Text style={[styles.profile1, styles.profileTypo]}>Profile</Text>
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={[styles.homeIndicator, styles.pngfuel6Icon4Layout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseLayout: {
    width: "100%",
    backgroundColor: Color.white,
  },
  timeTypo: {
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  searchLayout: {
    height: 52,
    width: 364,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  beefBoneLayout: {
    height: 189,
    width: 175,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
  h1Typo: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    top: 130,
    color: Color.darkDeep,
    fontFamily: FontFamily.gilroyBoldRegular,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  beefPosition1: {
    left: 215,
    height: 189,
    width: 175,
    position: "absolute",
  },
  pngfuel7Layout: {
    height: 93,
    width: 93,
    position: "absolute",
  },
  h12Typo: {
    top: 141,
    lineHeight: 22,
    fontSize: FontSize.size_base,
    color: Color.darkDeep,
    fontFamily: FontFamily.gilroyBoldRegular,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  pngfuel6IconPosition: {
    width: 103,
    left: 35,
    position: "absolute",
  },
  iconPosition: {
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  beefPosition: {
    left: 26,
    height: 189,
    width: 175,
    position: "absolute",
  },
  pngfuel6Icon4Layout: {
    height: 5,
    position: "absolute",
  },
  pngfuelIconLayout: {
    width: 102,
    position: "absolute",
  },
  profileTypo: {
    textAlign: "right",
    left: "81.6%",
    width: "10.4%",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.hKGroteskRegular,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  groupParentLayout: {
    width: 26,
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
    backgroundColor: Color.mediumseagreen_100,
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
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "center",
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
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  findProducts: {
    top: 57,
    left: 144,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.gilroyBoldRegular,
    color: Color.darkDeep,
    lineHeight: 18,
    position: "absolute",
  },
  searchChild: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.whitesmoke_100,
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: "94.79%",
    width: "16.4%",
    right: "83.6%",
    bottom: "5.21%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  searchStore: {
    left: 28,
    color: Color.gray_200,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: 2,
    position: "absolute",
  },
  vectorParent: {
    height: "37.24%",
    width: "30.5%",
    top: "31.38%",
    right: "65.38%",
    bottom: "31.38%",
    left: "4.12%",
    position: "absolute",
  },
  search: {
    top: 105,
    left: 25,
  },
  groupChild: {
    backgroundColor: "rgba(83, 177, 117, 0.1)",
    borderColor: "rgba(83, 177, 117, 0.7)",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 189,
    width: 175,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  pngfuel6Icon: {
    top: 28,
    width: 111,
    height: 75,
    left: 31,
    position: "absolute",
  },
  h1: {
    left: 41,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  beefBone: {
    top: 177,
    left: 25,
  },
  groupItem: {
    backgroundColor: "rgba(248, 164, 76, 0.1)",
    borderColor: "rgba(248, 164, 76, 0.7)",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 189,
    width: 175,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  h11: {
    left: 43,
  },
  pngfuel7Icon: {
    width: 63,
    height: 63,
    left: 3,
    top: 20,
    position: "absolute",
  },
  pngfuel8Icon: {
    left: 0,
    top: 0,
  },
  pngfuel7Parent: {
    opacity: 0.3,
    top: 20,
    left: 41,
  },
  pngfuel7Group: {
    left: 41,
    top: 17,
    width: 93,
  },
  beefBone1: {
    top: 177,
  },
  groupInner: {
    backgroundColor: "rgba(211, 176, 224, 0.25)",
    borderColor: "#d3b0e0",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 189,
    width: 175,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  pngfuel6Icon1: {
    top: 31,
    width: 96,
    height: 71,
    left: 39,
    position: "absolute",
  },
  h12: {
    left: 25,
  },
  beefBone2: {
    top: 381,
  },
  rectangleView: {
    backgroundColor: "rgba(183, 223, 245, 0.25)",
    borderColor: "#b7dff5",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 189,
    width: 175,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  pngfuel6Icon2: {
    height: 76,
    top: 27,
  },
  h13: {
    left: 47,
  },
  beefBone3: {
    top: 585,
  },
  groupChild1: {
    backgroundColor: "rgba(215, 59, 119, 0.15)",
    borderColor: "rgba(215, 59, 119, 0.5)",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 189,
    width: 175,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  pngfuel6Icon3: {
    top: 30,
    height: 69,
  },
  ellipseIcon: {
    left: "0.05%",
    width: "99.95%",
    right: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild2: {
    top: "10%",
    right: "0.05%",
    bottom: "10%",
    borderWidth: 0.3,
    borderColor: "#8b91a0",
    borderRadius: Border.br_12xs,
    height: "80%",
    width: "99.95%",
    left: "0%",
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition2: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
    left: "89.95%",
    bottom: "20%",
    right: "-89.9%",
    borderWidth: 0.3,
    borderColor: "#8b91a0",
    borderRadius: Border.br_12xs,
    height: "80%",
    width: "99.95%",
    top: "0%",
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition1: {
    left: "94.95%",
    bottom: "5%",
    right: "-84.91%",
    top: "5%",
    width: "89.96%",
    height: "90%",
    transform: [
      {
        rotate: "90deg",
      },
    ],
    borderWidth: 0.3,
    borderColor: "#8b91a0",
    borderRadius: Border.br_12xs,
    borderStyle: "solid",
    position: "absolute",
  },
  ellipseParent: {
    height: "52.85%",
    width: "57.31%",
    top: "8.01%",
    right: "21.61%",
    bottom: "39.13%",
    left: "21.08%",
    position: "absolute",
  },
  beefBone4: {
    top: 789,
  },
  groupChild5: {
    backgroundColor: "rgba(247, 165, 147, 0.25)",
    borderColor: "#f7a593",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 189,
    width: 175,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  h15: {
    left: 43,
  },
  beefBone5: {
    top: 381,
  },
  groupChild6: {
    backgroundColor: "rgba(253, 229, 152, 0.25)",
    borderColor: "#fde598",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 189,
    width: 175,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  h16: {
    left: 39,
  },
  beefBone6: {
    top: 585,
  },
  pngfuel6Icon4: {
    top: 384,
    left: 150,
    width: 8,
  },
  pngfuelIcon: {
    top: -4,
    left: -5,
    width: 112,
    height: 78,
    position: "absolute",
  },
  pngfuelIcon1: {
    height: 68,
    left: 0,
    top: 0,
  },
  pngfuelParent: {
    top: 616,
    left: 62,
    width: 102,
    height: 69,
  },
  groupChild7: {
    backgroundColor: "rgba(131, 106, 246, 0.15)",
    borderColor: "rgba(131, 106, 246, 0.5)",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderRadius: Border.br_lg,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 189,
    width: 175,
    left: 0,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  beefBone7: {
    top: 789,
  },
  pngfuel9Icon: {
    top: 412,
    height: 73,
    left: 62,
    width: 102,
  },
  base: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    shadowColor: "rgba(230, 235, 243, 0.5)",
    shadowRadius: 37,
    elevation: 37,
    right: "0%",
    height: "100%",
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
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
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
  },
  profile: {
    marginTop: 0,
  },
  cart: {
    color: Color.darkDeep,
    fontSize: FontSize.menu12pxS_size,
    top: 0,
  },
  cartWrapper: {
    top: 25,
    height: 15,
    left: 0,
  },
  vectorIcon1: {
    height: "49.24%",
    width: "84.5%",
    right: "7.75%",
    bottom: "50.76%",
    left: "7.75%",
    top: "0%",
    position: "absolute",
  },
  groupParent: {
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
    fontSize: FontSize.menu12pxS_size,
  },
  store1Parent: {
    width: 29,
    left: 31,
  },
  vectorIcon2: {
    width: "64.22%",
    left: "35.78%",
    right: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild12: {
    bottom: "86.82%",
    right: "68.76%",
    width: "31.24%",
    backgroundColor: Color.mediumseagreen_100,
    borderRadius: Border.br_smi,
    height: "13.18%",
    top: "0%",
  },
  groupChild13: {
    width: "22.8%",
    top: "40.86%",
    right: "77.2%",
    bottom: "45.96%",
    backgroundColor: Color.mediumseagreen_100,
    borderRadius: Border.br_smi,
    height: "13.18%",
  },
  groupChild14: {
    top: "81.72%",
    bottom: "5.1%",
    right: "68.76%",
    width: "31.24%",
    backgroundColor: Color.mediumseagreen_100,
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
  explore1: {
    top: 23,
    color: Color.mediumseagreen_100,
  },
  groupContainer: {
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
  },
  bottomBar: {
    top: 804,
    shadowColor: "rgba(85, 94, 88, 0.09)",
    shadowRadius: 15,
    elevation: 15,
    width: 414,
    height: 92,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  profile1: {
    marginTop: 384.83,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
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
  explore: {
    flex: 1,
    height: 896,
    overflow: "hidden",
  },
});

export default Explore;
