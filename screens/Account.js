import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Account = () => {
  return (
    <View style={styles.account}>
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap3.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi3.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection3.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.accountChild}
        contentFit="cover"
        source={require("../assets/rectangle-82.png")}
      />
      <View style={[styles.afsarHossenParent, styles.parentLayout]}>
        <Text style={[styles.afsarHossen, styles.afsarHossenPosition]}>
          Afsar Hossen
        </Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector21.png")}
        />
        <Text style={[styles.imshuvo97gmailcom, styles.afsarHossenPosition]}>
          Imshuvo97@gmail.com
        </Text>
      </View>
      <View style={[styles.accountItem, styles.accountChildLayout1]} />
      <View style={[styles.accountInner, styles.accountChildLayout1]} />
      <View style={[styles.lineView, styles.accountChildLayout1]} />
      <View style={[styles.accountChild1, styles.accountChildLayout1]} />
      <View style={[styles.accountChild2, styles.accountChildLayout1]} />
      <View style={[styles.accountChild3, styles.accountChildLayout1]} />
      <View style={[styles.accountChild4, styles.accountChildLayout1]} />
      <View style={[styles.accountChild5, styles.accountChildLayout]} />
      <View style={[styles.accountChild6, styles.accountChildLayout]} />
      <View style={[styles.orders, styles.ordersLayout]}>
        <Text style={[styles.orders1, styles.logOutTypo]}>Orders</Text>
        <Image
          style={[styles.ordersIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/orders-icon.png")}
        />
        <Image
          style={[styles.backArrowIcon, styles.backIconLayout]}
          contentFit="cover"
          source={require("../assets/back-arrow6.png")}
        />
      </View>
      <View style={[styles.myDetails, styles.helpPosition]}>
        <Text style={[styles.myDetails1, styles.myDetails1Typo]}>
          My Details
        </Text>
        <Image
          style={[styles.myDetailsIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/my-details-icon.png")}
        />
        <Image
          style={[styles.backArrowIcon1, styles.backIconPosition]}
          contentFit="cover"
          source={require("../assets/back-arrow7.png")}
        />
      </View>
      <View style={[styles.deliveryAddress, styles.ordersLayout]}>
        <Text style={[styles.deliveryAddress1, styles.logOutTypo]}>
          Delivery Address
        </Text>
        <Image
          style={[styles.deliceryAddressIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/delicery-address.png")}
        />
        <Image
          style={[styles.backArrowIcon2, styles.backIconLayout]}
          contentFit="cover"
          source={require("../assets/back-arrow8.png")}
        />
      </View>
      <View style={[styles.paymentMethods, styles.helpPosition]}>
        <Text style={styles.myDetails1Typo}>Payment Methods</Text>
        <Image
          style={[styles.vectorIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector-icon.png")}
        />
        <Image
          style={[styles.backArrowIcon3, styles.backIconPosition]}
          contentFit="cover"
          source={require("../assets/back-arrow9.png")}
        />
      </View>
      <View style={styles.promoCord}>
        <Text style={[styles.promoCord1, styles.logOutTypo]}>Promo Cord</Text>
        <Image
          style={[styles.promoCordIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/promo-cord-icon.png")}
        />
        <Image
          style={[styles.backArrowIcon4, styles.backIconLayout]}
          contentFit="cover"
          source={require("../assets/back-arrow6.png")}
        />
      </View>
      <View style={[styles.notifecations, styles.ordersLayout]}>
        <Text
          style={[styles.deliveryAddress1, styles.logOutTypo]}
        >{`Notifecations `}</Text>
        <Image
          style={[styles.bellIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/bell-icon.png")}
        />
        <Image
          style={[styles.backArrowIcon, styles.backIconLayout]}
          contentFit="cover"
          source={require("../assets/back-arrow6.png")}
        />
      </View>
      <View style={[styles.help, styles.helpPosition]}>
        <Text style={styles.myDetails1Typo}>Help</Text>
        <Image
          style={[styles.helpIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/help-icon.png")}
        />
        <Image
          style={[styles.backArrowIcon6, styles.backIconPosition]}
          contentFit="cover"
          source={require("../assets/back-arrow6.png")}
        />
      </View>
      <View style={[styles.about, styles.helpPosition]}>
        <Text style={styles.myDetails1Typo}>{`About `}</Text>
        <Image
          style={[styles.aboutIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/about-icon.png")}
        />
        <Image
          style={[styles.backArrowIcon6, styles.backIconPosition]}
          contentFit="cover"
          source={require("../assets/back-arrow6.png")}
        />
      </View>
      <View style={[styles.google, styles.googleLayout]}>
        <View style={[styles.googleInner, styles.googleLayout]}>
          <View style={[styles.groupChild, styles.googleLayout]} />
        </View>
        <View style={[styles.googleChild, styles.logLayout]}>
          <View style={[styles.logOutWrapper, styles.logLayout]}>
            <Text style={[styles.logOut, styles.logLayout]}>Log Out</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bottomBar, styles.baseShadowBox]}>
        <View style={[styles.base, styles.basePosition]} />
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
        <Text style={styles.courses}>Courses</Text>
        <Text style={[styles.profile, styles.homePosition]}>Profile</Text>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <View style={[styles.cartWrapper, styles.groupParentLayout]}>
            <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
          </View>
          <Image
            style={[styles.vectorIcon2, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector22.png")}
          />
        </View>
        <View style={[styles.store1Parent, styles.parentLayout]}>
          <Image
            style={[styles.store1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/store-13.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Shop</Text>
        </View>
        <View style={styles.groupContainer}>
          <View style={styles.vectorParent}>
            <Image
              style={[styles.vectorIcon3, styles.basePosition]}
              contentFit="cover"
              source={require("../assets/vector23.png")}
            />
            <View style={[styles.groupItem, styles.groupLayout]} />
            <View style={[styles.groupInner, styles.groupLayout]} />
            <View style={[styles.rectangleView, styles.groupLayout]} />
          </View>
          <Text style={[styles.explore, styles.cartTypo]}>Explore</Text>
        </View>
        <View style={[styles.bookmark1Parent, styles.parentLayout]}>
          <Image
            style={[styles.bookmark1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bookmark-13.png")}
          />
          <Text style={[styles.shop, styles.cartTypo]}>Favourite</Text>
        </View>
        <View style={[styles.user1Parent, styles.parentLayout]}>
          <Image
            style={[styles.user1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-13.png")}
          />
          <Text style={[styles.account1, styles.cartTypo]}>Account</Text>
        </View>
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group-6892.png")}
      />
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={[styles.homeIndicator, styles.logLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    lineHeight: 18,
    left: 0,
  },
  parentLayout: {
    height: 42,
    position: "absolute",
  },
  afsarHossenPosition: {
    lineHeight: 18,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  accountChildLayout1: {
    height: 1,
    width: 415,
    borderTopWidth: 1,
    borderColor: "#e2e2e2",
    left: -1,
    borderStyle: "solid",
    position: "absolute",
  },
  accountChildLayout: {
    width: 366,
    left: 24,
    height: 1,
    borderTopWidth: 1,
    borderColor: "#e2e2e2",
    borderStyle: "solid",
    position: "absolute",
  },
  ordersLayout: {
    width: 362,
    left: 27,
    height: 22,
    position: "absolute",
  },
  logOutTypo: {
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.buttone16pxS_size,
    top: 0,
  },
  iconPosition1: {
    left: "-0.28%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  backIconLayout: {
    width: 8,
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  helpPosition: {
    width: 363,
    left: 26,
    position: "absolute",
  },
  myDetails1Typo: {
    left: 44,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.buttone16pxS_size,
    textAlign: "left",
    color: Color.darkDeep,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    right: "94.49%",
    width: "5.51%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  backIconPosition: {
    left: 355,
    width: 8,
    position: "absolute",
    overflow: "hidden",
  },
  googleLayout: {
    height: 67,
    width: 364,
    position: "absolute",
  },
  logLayout: {
    width: 134,
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
    bottom: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
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
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.black,
    width: 60,
    fontSize: FontSize.size_sm,
    textAlign: "center",
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
  accountChild: {
    top: 70,
    borderRadius: 27,
    width: 63,
    height: 64,
    left: 25,
    position: "absolute",
  },
  afsarHossen: {
    top: 1,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.gilroyBoldRegular,
    textAlign: "left",
    color: Color.darkDeep,
  },
  vectorIcon: {
    height: "35.71%",
    width: "9.14%",
    right: "11.49%",
    bottom: "64.29%",
    left: "79.36%",
    top: "0%",
    position: "absolute",
  },
  imshuvo97gmailcom: {
    top: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.gilroyRegularRegular,
    color: Color.gray_200,
    textAlign: "left",
  },
  afsarHossenParent: {
    top: 80,
    left: 109,
    width: 164,
  },
  accountItem: {
    top: 164,
  },
  accountInner: {
    top: 226,
  },
  lineView: {
    top: 412,
  },
  accountChild1: {
    top: 474,
  },
  accountChild2: {
    top: 536,
  },
  accountChild3: {
    top: 598,
  },
  accountChild4: {
    top: 660,
  },
  accountChild5: {
    top: 288,
  },
  accountChild6: {
    top: 350,
  },
  orders1: {
    left: 38,
    textAlign: "left",
    color: Color.darkDeep,
    position: "absolute",
  },
  ordersIcon: {
    width: "5.52%",
    top: "-4.55%",
    right: "94.76%",
    bottom: "4.55%",
    height: "100%",
    left: "-0.28%",
  },
  backArrowIcon: {
    left: 354,
    height: 14,
    top: 3,
  },
  orders: {
    top: 184,
    height: 22,
  },
  myDetails1: {
    width: 86,
    height: 21,
  },
  myDetailsIcon: {
    height: "71.06%",
    top: "14.47%",
    bottom: "14.47%",
    left: "0%",
  },
  backArrowIcon1: {
    height: 13,
    top: 3,
  },
  myDetails: {
    top: 254,
    height: 21,
  },
  deliveryAddress1: {
    left: 43,
    textAlign: "left",
    color: Color.darkDeep,
    position: "absolute",
  },
  deliceryAddressIcon: {
    height: "100.78%",
    width: "5.2%",
    top: "-0.39%",
    right: "95.08%",
    bottom: "-0.39%",
  },
  backArrowIcon2: {
    left: 353,
    height: 14,
    top: 4,
  },
  deliveryAddress: {
    top: 308,
    height: 22,
  },
  vectorIcon1: {
    height: "61.13%",
    top: "19.44%",
    bottom: "19.44%",
    left: "0%",
  },
  backArrowIcon3: {
    height: 14,
    top: 4,
  },
  paymentMethods: {
    top: 370,
    height: 22,
  },
  promoCord1: {
    left: 46,
    textAlign: "left",
    color: Color.darkDeep,
    position: "absolute",
  },
  promoCordIcon: {
    height: "97.39%",
    width: "6.23%",
    top: "-0.29%",
    right: "93.79%",
    bottom: "2.9%",
    left: "-0.02%",
    position: "absolute",
  },
  backArrowIcon4: {
    left: 356,
    height: 14,
    top: 3,
  },
  promoCord: {
    top: 432,
    width: 365,
    height: 22,
    left: 24,
    position: "absolute",
  },
  bellIcon: {
    height: "90.91%",
    width: "4.96%",
    top: "4.55%",
    right: "95.04%",
    left: "0%",
    bottom: "4.55%",
    position: "absolute",
  },
  notifecations: {
    top: 494,
    height: 22,
  },
  helpIcon: {
    height: "89.71%",
    bottom: "10.29%",
    left: "0%",
    top: "0%",
  },
  backArrowIcon6: {
    height: 14,
    top: 3,
  },
  help: {
    top: 556,
    height: 22,
  },
  aboutIcon: {
    height: "90.61%",
    bottom: "9.39%",
    left: "0%",
    top: "0%",
  },
  about: {
    top: 618,
    height: 22,
  },
  groupChild: {
    borderRadius: Border.br_lgi,
    backgroundColor: Color.whitesmoke_100,
    left: 0,
    top: 0,
  },
  googleInner: {
    left: 0,
    top: 0,
  },
  logOut: {
    color: Color.mediumseagreen_100,
    height: 14,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    fontSize: FontSize.buttone16pxS_size,
    top: 0,
    textAlign: "center",
    lineHeight: 18,
    left: 0,
  },
  logOutWrapper: {
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
    left: "0%",
    width: "100%",
    backgroundColor: Color.white,
    bottom: "0%",
    right: "0%",
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
  vectorIcon2: {
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
  },
  store1Parent: {
    left: 31,
    width: 29,
    top: 17,
    height: 42,
  },
  vectorIcon3: {
    width: "64.22%",
    left: "35.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
    top: 17,
    height: 42,
  },
  user1Icon: {
    left: 11,
  },
  account1: {
    color: Color.mediumseagreen_100,
    top: 27,
  },
  user1Parent: {
    left: 338,
    width: 46,
    top: 17,
    height: 42,
  },
  bottomBar: {
    top: 804,
    shadowColor: "rgba(85, 94, 88, 0.09)",
    shadowRadius: 15,
    elevation: 15,
    width: 414,
    height: 92,
    left: -1,
    shadowOffset: {
      width: 2,
      height: -5,
    },
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    height: "2.23%",
    width: "4.83%",
    top: "82.13%",
    right: "83.39%",
    bottom: "15.64%",
    left: "11.78%",
    position: "absolute",
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
  account: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Account;
