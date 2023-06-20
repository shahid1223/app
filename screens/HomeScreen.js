import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeScreen = () => {
  return (
    <View style={[styles.homeScreen, styles.baseBg]}>
      <View style={styles.groceries}>
        <Text style={[styles.groceries1, styles.groceries1Position]}>
          Groceries
        </Text>
        <Text style={styles.seeAll}>See all</Text>
        <View style={[styles.pulses, styles.pulsesLayout]}>
          <View style={[styles.pulsesChild, styles.childPosition1]} />
          <Text style={[styles.pulses1, styles.pulses1Typo]}>Pulses</Text>
          <Image
            style={[styles.pulsesPng8PngImagePulsesIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/4215936pulsespng8pngimagepulsespng409-409-1.png")}
          />
        </View>
        <View style={[styles.rice, styles.riceLayout]}>
          <View style={[styles.riceChild, styles.childBg]} />
          <Text style={[styles.pulses1, styles.pulses1Typo]}>Rice</Text>
          <Image
            style={[styles.downloadSackOfRicePng1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/882858-downloadsackofricepng-1.png")}
          />
        </View>
        <View style={[styles.beefBone, styles.groupChildLayout3]}>
          <View style={[styles.rectangleParent, styles.groupChildLayout3]}>
            <View style={[styles.groupChild, styles.groupChildBorder]} />
            <Text style={[styles.h1, styles.h1FlexBox]}>Beef Bone</Text>
            <Text style={[styles.h11, styles.h11Typo]}>$4.99</Text>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector60.png")}
              />
            </View>
            <Text style={[styles.h2, styles.h2Clr]}>1kg, Priceg</Text>
          </View>
          <Image
            style={[styles.pngfuel4Icon, styles.pngfuel1Position]}
            contentFit="cover"
            source={require("../assets/pngfuel-4.png")}
          />
        </View>
        <View style={[styles.chicken, styles.groupChildLayout3]}>
          <View style={[styles.rectangleParent, styles.groupChildLayout3]}>
            <View style={[styles.groupInner, styles.groupChildBorder]} />
            <Text style={[styles.h1, styles.h1FlexBox]}>Broiler Chicken</Text>
            <Text style={[styles.h11, styles.h11Typo]}>$4.99</Text>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector61.png")}
              />
            </View>
            <Text style={[styles.h2, styles.h2Clr]}>1kg, Priceg</Text>
          </View>
        </View>
        <Image
          style={styles.pngfuel5Icon}
          contentFit="cover"
          source={require("../assets/pngfuel-5.png")}
        />
        <View style={[styles.groupParent, styles.groupParentPosition1]}>
          <View style={[styles.rectangleParent, styles.groupChildLayout3]}>
            <View style={[styles.groupChild1, styles.groupChildBorder]} />
            <Text style={[styles.h1, styles.h1FlexBox]}>Organic Bananas</Text>
            <Text style={[styles.h11, styles.h11Typo]}>$4.99</Text>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector62.png")}
              />
            </View>
            <Text style={[styles.h2, styles.h2Clr]}>1kg, Priceg</Text>
          </View>
          <Image
            style={[
              styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon,
              styles.f1ea7dcce3b5d06cd1b1418f9b9413IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-35.png")}
          />
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.ellipseIcon, styles.childIconPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-151.png")}
            />
            <View style={styles.groupChild3} />
            <View style={styles.groupChildPosition2} />
            <View style={styles.groupChildPosition1} />
          </View>
        </View>
      </View>
      <Image
        style={[styles.homeScreenChild, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <View style={[styles.banner, styles.bannerLayout]}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="cover"
          source={require("../assets/mask-group6.png")}
        />
        <View style={[styles.maskGroup, styles.maskGroupLayout]}>
          <View style={[styles.maskGroup1, styles.maskGroupLayout]}>
            <View style={[styles.maskGroupChild, styles.maskGroupPosition]} />
          </View>
        </View>
        <View style={styles.rectangleParent3}>
          <View style={[styles.groupChild6, styles.childPosition]} />
          <View style={[styles.groupChild7, styles.groupChildLayout2]} />
          <View style={[styles.groupChild8, styles.groupChildLayout2]} />
        </View>
        <Image
          style={styles.maskGroupPosition}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <View style={[styles.freshVegetablesParent, styles.freshLayout]}>
          <Text style={[styles.freshVegetables, styles.freshLayout]}>
            Fresh Vegetables
          </Text>
          <Text style={[styles.getUpTo, styles.timeTypo]}>
            Get Up To 40% OFF
          </Text>
        </View>
        <Image
          style={[styles.icon, styles.pulsesLayout]}
          contentFit="cover"
          source={require("../assets/2771-1.png")}
        />
        <LinearGradient
          style={[styles.bannerChild, styles.bannerLayout]}
          locations={[1]}
          colors={["rgba(255, 255, 255, 0)"]}
        />
      </View>
      <View style={[styles.bestSelling, styles.bestSellingLayout]}>
        <View style={[styles.groupContainer, styles.groupChildLayout3]}>
          <View style={[styles.rectangleParent, styles.groupChildLayout3]}>
            <View style={[styles.groupChild9, styles.groupChildBorder]} />
            <Text style={[styles.h1, styles.h1FlexBox]}>Bell Pepper Red</Text>
            <Text style={[styles.h11, styles.h11Typo]}>$4.99</Text>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector63.png")}
              />
            </View>
            <Text style={[styles.h2, styles.h2Clr]}>1kg, Priceg</Text>
          </View>
          <Image
            style={styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon1}
            contentFit="cover"
            source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-36.png")}
          />
        </View>
        <View style={[styles.bestSellingInner, styles.applePosition]}>
          <View style={[styles.rectangleParent, styles.groupChildLayout3]}>
            <View style={[styles.groupChild11, styles.groupChildBorder]} />
            <Image
              style={styles.pngfuel3Icon}
              contentFit="cover"
              source={require("../assets/pngfuel-32.png")}
            />
            <Text style={[styles.h1, styles.h1FlexBox]}>Ginger</Text>
            <Text style={[styles.h11, styles.h11Typo]}>$4.99</Text>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector64.png")}
              />
            </View>
            <Text style={[styles.h24, styles.h2Clr]}>250gm, Priceg</Text>
          </View>
        </View>
        <View style={[styles.groupParent1, styles.groupParentPosition1]}>
          <View style={[styles.rectangleParent, styles.groupChildLayout3]}>
            <View style={[styles.groupChild13, styles.groupChildBorder]} />
            <Text style={[styles.h1, styles.h1FlexBox]}>Organic Bananas</Text>
            <Text style={[styles.h11, styles.h11Typo]}>$4.99</Text>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupItem, styles.groupItemLayout]} />
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector65.png")}
              />
            </View>
            <Text style={[styles.h2, styles.h2Clr]}>1kg, Priceg</Text>
          </View>
          <Image
            style={[
              styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon2,
              styles.f1ea7dcce3b5d06cd1b1418f9b9413IconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-37.png")}
          />
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.ellipseIcon, styles.childIconPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-152.png")}
            />
            <View style={styles.groupChild3} />
            <View style={styles.groupChildPosition2} />
            <View style={styles.groupChildPosition1} />
          </View>
        </View>
        <Text style={[styles.bestSelling1, styles.pulses1Typo]}>
          Best Selling
        </Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <View style={styles.dhakaBanassreParent}>
        <Text style={[styles.dhakaBanassre, styles.groupParent2Position]}>
          Dhaka, Banassre
        </Text>
        <Image
          style={styles.excludeIcon}
          contentFit="cover"
          source={require("../assets/exclude3.png")}
        />
      </View>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.searchLayout]} />
        <View style={styles.vectorParent}>
          <Image
            style={[styles.vectorIcon6, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector66.png")}
          />
          <Text style={[styles.searchStore, styles.h2Clr]}>Search Store</Text>
        </View>
      </View>
      <View style={[styles.exclusiveOffer, styles.exclusiveLayout]}>
        <Text style={[styles.bestSelling1, styles.pulses1Typo]}>
          Exclusive Offer
        </Text>
        <Text style={styles.seeAll}>See all</Text>
        <View style={[styles.exclusiveOfferInner, styles.exclusiveLayout]}>
          <View style={[styles.groupParent2, styles.groupParent2Position]}>
            <View style={[styles.rectangleParent, styles.groupChildLayout3]}>
              <View style={[styles.rectangleParent, styles.groupChildLayout3]}>
                <View style={[styles.groupChild19, styles.groupChildBorder]} />
                <Text style={[styles.h1, styles.h1FlexBox]}>
                  Organic Bananas
                </Text>
                <Text style={[styles.h11, styles.h11Typo]}>$4.99</Text>
                <View style={[styles.rectangleGroup, styles.groupLayout]}>
                  <View style={[styles.frameChild, styles.childIconPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/vector67.png")}
                  />
                </View>
                <Text style={[styles.h26, styles.h2Clr]}>7pcs, Priceg</Text>
              </View>
              <Image
                style={[
                  styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon3,
                  styles.f1ea7dcce3b5d06cd1b1418f9b9413IconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-38.png")}
              />
            </View>
            <View style={[styles.groupParent4, styles.groupParentPosition1]}>
              <View style={[styles.rectangleParent, styles.groupChildLayout3]}>
                <View style={[styles.groupChild20, styles.groupChildBorder]} />
                <Text style={[styles.h1, styles.h1FlexBox]}>
                  Organic Bananas
                </Text>
                <Text style={[styles.h11, styles.h11Typo]}>$4.99</Text>
                <View style={[styles.rectangleGroup, styles.groupLayout]}>
                  <View style={[styles.frameChild, styles.childIconPosition]} />
                  <Image
                    style={[styles.vectorIcon, styles.iconLayout1]}
                    contentFit="cover"
                    source={require("../assets/vector68.png")}
                  />
                </View>
                <Text style={[styles.h2, styles.h2Clr]}>1kg, Priceg</Text>
              </View>
              <Image
                style={[
                  styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon4,
                  styles.f1ea7dcce3b5d06cd1b1418f9b9413IconLayout,
                ]}
                contentFit="cover"
                source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-39.png")}
              />
            </View>
            <View style={[styles.apple, styles.applePosition]}>
              <View style={[styles.appleChild, styles.groupChildBorder]} />
              <Text style={[styles.h1, styles.h1FlexBox]}>Red Apple</Text>
              <Text style={[styles.h11, styles.h11Typo]}>$4.99</Text>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View style={[styles.frameChild, styles.childIconPosition]} />
                <Image
                  style={[styles.vectorIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/vector69.png")}
                />
              </View>
              <Text style={[styles.h2, styles.h2Clr]}>1kg, Priceg</Text>
              <View style={[styles.pngfuel1, styles.pngfuel1Position]} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.component1}>
        <View style={[styles.groupParent5, styles.groupParentPosition]}>
          <View style={[styles.rectangleParent15, styles.childIconPosition]}>
            <View style={[styles.groupChild21, styles.childIconPosition]} />
            <Text style={[styles.h118, styles.h118Position]}>
              Organic Bananas
            </Text>
            <Text style={[styles.h119, styles.h118Position]}>$4.99</Text>
            <View style={styles.rectangleParent16}>
              <View style={[styles.frameChild, styles.childIconPosition]} />
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector70.png")}
              />
            </View>
            <Text style={[styles.h29, styles.h29Position]}>7pcs, Priceg</Text>
          </View>
          <Image
            style={[
              styles.f1ea7dcce3b5d06cd1b1418f9b9413Icon5,
              styles.iconLayout1,
            ]}
            contentFit="cover"
            source={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413-310.png")}
          />
        </View>
        <View style={[styles.groupParent6, styles.groupParentPosition]}>
          <View style={[styles.rectangleParent15, styles.childIconPosition]}>
            <View style={[styles.groupChild23, styles.childIconPosition]} />
            <Text style={[styles.h118, styles.h118Position]}>Red Apple</Text>
            <Text style={[styles.h119, styles.h118Position]}>$4.99</Text>
            <View style={styles.rectangleParent16}>
              <View style={[styles.frameChild, styles.childIconPosition]} />
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector71.png")}
              />
            </View>
            <Text style={[styles.h210, styles.h29Position]}>1kg, Priceg</Text>
          </View>
          <View style={[styles.pngfuel11, styles.pngfuel11Position]} />
        </View>
        <View style={styles.apple1}>
          <View style={[styles.rectangleParent15, styles.childIconPosition]}>
            <View style={[styles.groupChild25, styles.childIconPosition]} />
            <Text style={[styles.h118, styles.h118Position]}>Red Apple</Text>
            <Text style={[styles.h119, styles.h118Position]}>$4.99</Text>
            <View style={styles.rectangleParent16}>
              <View style={[styles.frameChild, styles.childIconPosition]} />
              <Image
                style={[styles.vectorIcon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/vector72.png")}
              />
            </View>
            <Text style={[styles.h210, styles.h29Position]}>1kg, Priceg</Text>
          </View>
          <Image
            style={[styles.pngfuel1Icon, styles.pngfuel11Position]}
            contentFit="cover"
            source={require("../assets/pngfuel-1.png")}
          />
        </View>
      </View>
      <View style={[styles.navigation, styles.bottomBarPosition]}>
        <View style={[styles.navigation, styles.bottomBarPosition]}>
          <View style={[styles.navigationBar, styles.childIconPosition]}>
            <View style={[styles.statusBar, styles.timePosition]}>
              <View style={styles.battery}>
                <View style={[styles.border, styles.groupChildBorder]} />
                <Image
                  style={styles.capIcon}
                  contentFit="cover"
                  source={require("../assets/cap14.png")}
                />
                <View style={[styles.capacity, styles.capacityBg]} />
              </View>
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/wifi14.png")}
              />
              <Image
                style={styles.cellularConnectionIcon}
                contentFit="cover"
                source={require("../assets/cellular-connection14.png")}
              />
              <View style={styles.timeStyle}>
                <Text style={[styles.time, styles.timePosition]}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottomBar, styles.bottomBarPosition]}>
        <View style={[styles.base, styles.childIconPosition]} />
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
        <Text style={styles.courses}>Courses</Text>
        <Text style={[styles.profile, styles.homePosition]}>Profile</Text>
        <View style={[styles.groupParent7, styles.cartWrapperLayout]}>
          <View style={[styles.cartWrapper, styles.cartWrapperLayout]}>
            <Text style={[styles.cart, styles.cartTypo]}>Cart</Text>
          </View>
          <Image
            style={[styles.vectorIcon13, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector73.png")}
          />
        </View>
        <View style={[styles.store1Parent, styles.parentPosition]}>
          <Image
            style={[styles.store1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/store-17.png")}
          />
          <Text style={[styles.shop, styles.shopTypo]}>Shop</Text>
        </View>
        <View style={styles.groupParent8}>
          <View style={styles.vectorGroup}>
            <Image
              style={[styles.vectorIcon14, styles.childIconPosition]}
              contentFit="cover"
              source={require("../assets/vector74.png")}
            />
            <View style={[styles.groupChild27, styles.groupChildLayout]} />
            <View style={[styles.groupChild28, styles.groupChildLayout]} />
            <View style={[styles.groupChild29, styles.groupChildLayout]} />
          </View>
          <Text style={[styles.explore, styles.cartTypo]}>Explore</Text>
        </View>
        <View style={[styles.bookmark1Parent, styles.parentPosition]}>
          <Image
            style={[styles.bookmark1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/bookmark-18.png")}
          />
          <Text style={[styles.favourite, styles.shopTypo]}>Favourite</Text>
        </View>
        <View style={[styles.user1Parent, styles.parentPosition]}>
          <Image
            style={[styles.user1Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/user-17.png")}
          />
          <Text style={[styles.favourite, styles.shopTypo]}>Account</Text>
        </View>
      </View>
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseBg: {
    backgroundColor: Color.white,
    width: "100%",
  },
  groceries1Position: {
    color: Color.gray_300,
    left: 0,
    top: 0,
  },
  pulsesLayout: {
    height: 105,
    position: "absolute",
  },
  childPosition1: {
    opacity: 0.15,
    borderRadius: Border.br_lg,
    left: 0,
    top: 0,
  },
  pulses1Typo: {
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    top: 16,
    position: "absolute",
  },
  riceLayout: {
    width: 237,
    height: 105,
  },
  childBg: {
    backgroundColor: Color.mediumseagreen_100,
    position: "absolute",
  },
  groupChildLayout3: {
    width: 173,
    height: 249,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  h1FlexBox: {
    alignItems: "center",
    display: "flex",
    left: 15,
    color: Color.darkDeep,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  h11Typo: {
    fontSize: FontSize.buttone16pxS_size,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
  },
  groupLayout: {
    height: 46,
    width: 46,
    position: "absolute",
  },
  groupItemLayout: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.mediumseagreen_100,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  h2Clr: {
    color: Color.gray_200,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  pngfuel1Position: {
    left: 32,
    position: "absolute",
  },
  groupParentPosition1: {
    left: 377,
    height: 249,
    width: 173,
    position: "absolute",
  },
  f1ea7dcce3b5d06cd1b1418f9b9413IconLayout: {
    height: 79,
    width: 100,
    position: "absolute",
  },
  childIconPosition: {
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  bannerLayout: {
    height: 115,
    position: "absolute",
  },
  maskGroupLayout: {
    width: 367,
    height: 115,
    top: 0,
    position: "absolute",
  },
  maskGroupPosition: {
    height: 117,
    width: 369,
    left: -1,
    top: -1,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  groupChildLayout2: {
    opacity: 0.3,
    width: 5,
    backgroundColor: Color.gray_300,
    borderRadius: Border.br_mini,
    height: 5,
    top: 0,
    position: "absolute",
  },
  freshLayout: {
    width: 188,
    position: "absolute",
  },
  timeTypo: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  bestSellingLayout: {
    height: 298,
    left: 25,
  },
  applePosition: {
    left: 189,
    height: 249,
    width: 173,
    position: "absolute",
  },
  groupParent2Position: {
    top: 1,
    position: "absolute",
  },
  searchLayout: {
    height: 52,
    width: 364,
    position: "absolute",
  },
  exclusiveLayout: {
    width: 389,
    position: "absolute",
  },
  groupParentPosition: {
    display: "none",
    width: "31.5%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  h118Position: {
    left: "8.65%",
    alignItems: "center",
    display: "flex",
    color: Color.darkDeep,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  h29Position: {
    top: "61.55%",
    height: "5.99%",
    left: "8.65%",
    color: Color.gray_200,
    fontFamily: FontFamily.gilroyMediumRegular,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    lineHeight: 18,
    textAlign: "left",
    position: "absolute",
  },
  pngfuel11Position: {
    bottom: "61.27%",
    top: "13.56%",
    width: "59.68%",
    height: "25.17%",
    position: "absolute",
  },
  bottomBarPosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.black,
    position: "absolute",
  },
  homePosition: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.hKGroteskRegular,
    marginTop: 0,
    top: "50%",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  cartWrapperLayout: {
    width: 26,
    position: "absolute",
  },
  cartTypo: {
    fontSize: FontSize.menu12pxS_size,
    textAlign: "center",
    color: Color.darkDeep,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
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
    width: 24,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  shopTypo: {
    top: 27,
    fontSize: FontSize.menu12pxS_size,
    textAlign: "center",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    height: "13.18%",
    left: "0%",
    position: "absolute",
  },
  groceries1: {
    textAlign: "left",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    position: "absolute",
    fontSize: FontSize.size_5xl,
  },
  seeAll: {
    top: 5,
    left: 314,
    color: Color.mediumseagreen_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
    position: "absolute",
  },
  pulsesChild: {
    backgroundColor: "#f8a44c",
    height: 105,
    position: "absolute",
    width: 248,
  },
  pulses1: {
    top: 40,
    left: 104,
    color: Color.darkslategray_200,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  pulsesPng8PngImagePulsesIcon: {
    left: 17,
    height: 72,
    width: 72,
  },
  pulses: {
    width: 248,
    height: 105,
    top: 49,
    left: 0,
  },
  riceChild: {
    width: 237,
    height: 105,
    opacity: 0.15,
    borderRadius: Border.br_lg,
    left: 0,
    top: 0,
  },
  downloadSackOfRicePng1Icon: {
    left: 20,
    width: 70,
    height: 71,
  },
  rice: {
    left: 263,
    top: 49,
    position: "absolute",
  },
  groupChild: {
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
    left: 0,
    top: 0,
  },
  h1: {
    top: 130,
    width: 137,
    fontFamily: FontFamily.gilroyBoldRegular,
    fontSize: FontSize.size_base,
  },
  h11: {
    top: 205,
    width: 52,
    alignItems: "center",
    display: "flex",
    left: 15,
    color: Color.darkDeep,
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    height: 46,
    width: 46,
    position: "absolute",
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
    position: "absolute",
  },
  rectangleGroup: {
    top: 188,
    left: 114,
  },
  h2: {
    height: 15,
    fontFamily: FontFamily.gilroyMediumRegular,
    top: 153,
    color: Color.gray_200,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    lineHeight: 18,
    left: 15,
    textAlign: "left",
    width: 72,
  },
  rectangleParent: {
    height: 249,
    left: 0,
    top: 0,
  },
  pngfuel4Icon: {
    top: 31,
    width: 108,
    height: 67,
  },
  beefBone: {
    height: 249,
    top: 174,
    left: 0,
  },
  groupInner: {
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
    left: 0,
    top: 0,
  },
  chicken: {
    left: 188,
    height: 249,
    top: 174,
  },
  pngfuel5Icon: {
    top: 202,
    left: 219,
    width: 112,
    height: 75,
    position: "absolute",
  },
  groupChild1: {
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
    left: 0,
    top: 0,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon: {
    top: 1211,
    left: 535,
  },
  ellipseIcon: {
    left: "0.05%",
    width: "99.95%",
    bottom: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild3: {
    top: "10%",
    right: "0.05%",
    bottom: "10%",
    borderWidth: 0.3,
    borderColor: "#8b91a0",
    borderRadius: Border.br_12xs,
    height: "80%",
    left: "0%",
    width: "99.95%",
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
    top: "0%",
    width: "99.95%",
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
    height: "40.22%",
    width: "57.7%",
    top: "6.04%",
    right: "22.79%",
    bottom: "53.74%",
    left: "19.52%",
    position: "absolute",
  },
  groupParent: {
    top: 174,
  },
  groceries: {
    top: 1011,
    height: 423,
    width: 550,
    left: 25,
    position: "absolute",
  },
  homeScreenChild: {
    height: "1.32%",
    width: "80%",
    top: "52.94%",
    right: "16.67%",
    bottom: "45.74%",
    left: "3.34%",
    position: "absolute",
  },
  maskGroupIcon: {
    opacity: 0.85,
    width: 364,
    left: 1,
    height: 115,
    top: 0,
    position: "absolute",
  },
  maskGroupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: "rgba(255, 255, 255, 0.53)",
    borderColor: "#f2f3f2",
    borderWidth: 1,
    borderStyle: "solid",
  },
  maskGroup1: {
    left: 0,
  },
  maskGroup: {
    left: 1,
  },
  groupChild6: {
    width: 17,
    height: 5,
    backgroundColor: Color.mediumseagreen_100,
    position: "absolute",
  },
  groupChild7: {
    left: 24,
  },
  groupChild8: {
    left: 36,
  },
  rectangleParent3: {
    top: 103,
    left: 164,
    width: 41,
    height: 5,
    position: "absolute",
  },
  freshVegetables: {
    fontFamily: FontFamily.aclonicaRegular,
    height: 25,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    color: Color.gray_300,
    left: 0,
    top: 0,
  },
  getUpTo: {
    left: 30,
    fontFamily: FontFamily.airbnbCerealAppMedium,
    width: 126,
    height: 19,
    top: 25,
    color: Color.mediumseagreen_100,
    position: "absolute",
  },
  freshVegetablesParent: {
    top: 36,
    left: 146,
    height: 44,
  },
  icon: {
    top: 3,
    left: 6,
    width: 122,
  },
  bannerChild: {
    width: 204,
    backgroundColor: "transparent",
    left: 1,
    top: 0,
  },
  banner: {
    top: 211,
    width: 368,
    left: 24,
  },
  groupChild9: {
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
    left: 0,
    top: 0,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon1: {
    top: 22,
    left: 35,
    width: 97,
    height: 85,
    position: "absolute",
  },
  groupContainer: {
    height: 249,
    top: 49,
    left: 0,
  },
  groupChild11: {
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
    left: 0,
    top: 0,
  },
  pngfuel3Icon: {
    left: 42,
    width: 89,
    height: 80,
    top: 25,
    position: "absolute",
  },
  h24: {
    width: 93,
    height: 15,
    fontFamily: FontFamily.gilroyMediumRegular,
    top: 153,
    color: Color.gray_200,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    lineHeight: 18,
    left: 15,
    textAlign: "left",
  },
  bestSellingInner: {
    top: 49,
  },
  groupChild13: {
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
    left: 0,
    top: 0,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon2: {
    top: 758,
    left: 536,
  },
  groupParent1: {
    top: 49,
  },
  bestSelling1: {
    color: Color.darkDeep,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  bestSelling: {
    top: 683,
    width: 551,
    position: "absolute",
  },
  groupIcon: {
    height: "1.98%",
    width: "6.4%",
    top: "3.75%",
    right: "46.87%",
    bottom: "94.26%",
    left: "46.73%",
    position: "absolute",
  },
  dhakaBanassre: {
    left: 23,
    color: "#4c4f4d",
    textAlign: "center",
    fontSize: FontSize.buttone16pxS_size,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
  },
  excludeIcon: {
    width: 15,
    height: 18,
  },
  dhakaBanassreParent: {
    top: 97,
    left: 125,
    width: 163,
    height: 23,
    position: "absolute",
  },
  searchChild: {
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  vectorIcon6: {
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
    top: 2,
    textAlign: "center",
    color: Color.gray_200,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
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
    top: 139,
    left: 25,
  },
  groupChild19: {
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
    left: 0,
    top: 0,
  },
  frameChild: {
    left: "0%",
    height: "100%",
    bottom: "0%",
    borderRadius: Border.br_mid,
    backgroundColor: Color.mediumseagreen_100,
    width: "100%",
  },
  h26: {
    width: 79,
    height: 15,
    fontFamily: FontFamily.gilroyMediumRegular,
    top: 153,
    color: Color.gray_200,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    lineHeight: 18,
    left: 15,
    textAlign: "left",
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon3: {
    left: 34,
    top: 25,
  },
  groupChild20: {
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
    left: 0,
    top: 0,
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon4: {
    top: 26,
    left: 514,
  },
  groupParent4: {
    top: 0,
  },
  appleChild: {
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderRadius: Border.br_lg,
    height: 249,
    width: 173,
    position: "absolute",
    left: 0,
    top: 0,
  },
  pngfuel1: {
    top: 34,
    width: 103,
    height: 63,
  },
  apple: {
    top: 0,
  },
  groupParent2: {
    height: 249,
    left: 0,
    width: 550,
  },
  exclusiveOfferInner: {
    top: 48,
    height: 250,
    left: 0,
  },
  exclusiveOffer: {
    top: 356,
    height: 298,
    left: 25,
  },
  groupChild21: {
    left: "0%",
    height: "100%",
    bottom: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderRadius: Border.br_lg,
    width: "100%",
  },
  h118: {
    width: "79.06%",
    top: "52.29%",
    fontFamily: FontFamily.gilroyBoldRegular,
    fontSize: FontSize.size_base,
  },
  h119: {
    width: "30.08%",
    top: "82.35%",
    fontSize: FontSize.buttone16pxS_size,
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
  },
  rectangleParent16: {
    height: "18.38%",
    width: "26.35%",
    top: "75.59%",
    right: "8.08%",
    bottom: "6.04%",
    left: "65.57%",
    position: "absolute",
  },
  h29: {
    width: "45.29%",
  },
  rectangleParent15: {
    left: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
  },
  f1ea7dcce3b5d06cd1b1418f9b9413Icon5: {
    height: "31.96%",
    width: "57.63%",
    top: "10.16%",
    right: "-34.81%",
    bottom: "57.87%",
    left: "77.18%",
    position: "absolute",
  },
  groupParent5: {
    right: "68.5%",
    left: "0%",
  },
  groupChild23: {
    left: "0%",
    height: "100%",
    bottom: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderRadius: Border.br_lg,
    width: "100%",
  },
  h210: {
    width: "41.69%",
  },
  pngfuel11: {
    right: "21.78%",
    left: "18.54%",
  },
  groupParent6: {
    right: "34.24%",
    left: "34.26%",
  },
  groupChild25: {
    left: "0%",
    height: "100%",
    bottom: "0%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e2e2e2",
    elevation: 12,
    shadowRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    borderRadius: Border.br_lg,
    width: "100%",
  },
  pngfuel1Icon: {
    right: "27.55%",
    left: "12.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  apple1: {
    left: "68.5%",
    width: "31.5%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  component1: {
    top: 405,
    left: -163,
    height: 249,
    width: 550,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#000",
    width: 22,
    opacity: 0.35,
    height: 11,
    borderStyle: "solid",
    borderWidth: 1,
    top: 0,
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
  },
  battery: {
    right: 15,
    height: 11,
    width: 24,
    top: 17,
    position: "absolute",
  },
  wifiIcon: {
    height: 11,
    width: 17,
  },
  cellularConnectionIcon: {
    width: 19,
    height: 11,
  },
  time: {
    marginTop: -7.5,
    fontFamily: FontFamily.montserratMedium,
    color: Color.black,
    width: 60,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_sm,
    top: "50%",
    lineHeight: 18,
    letterSpacing: 0,
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
    marginTop: -44.13,
    height: 44,
    left: "0%",
    right: "0%",
    top: "50%",
    width: "100%",
  },
  navigationBar: {
    left: "0%",
    height: "100%",
    bottom: "0%",
    overflow: "hidden",
    width: "100%",
  },
  navigation: {
    height: 98,
    top: 0,
  },
  base: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    shadowColor: "rgba(230, 235, 243, 0.5)",
    shadowRadius: 37,
    elevation: 37,
    left: "0%",
    height: "100%",
    bottom: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
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
    top: "50%",
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  profile: {
    width: "10.4%",
    left: "81.6%",
    textAlign: "right",
  },
  cart: {
    top: 0,
  },
  cartWrapper: {
    top: 25,
    height: 15,
    left: 0,
  },
  vectorIcon13: {
    height: "49.24%",
    width: "84.5%",
    right: "7.75%",
    bottom: "50.76%",
    left: "7.75%",
    top: "0%",
    position: "absolute",
  },
  groupParent7: {
    top: 19,
    left: 180,
    height: 40,
  },
  store1Icon: {
    left: 3,
  },
  shop: {
    color: Color.mediumseagreen_100,
  },
  store1Parent: {
    left: 31,
    width: 29,
  },
  vectorIcon14: {
    width: "64.22%",
    left: "35.78%",
    height: "100%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChild27: {
    bottom: "86.82%",
    right: "68.76%",
    width: "31.24%",
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    height: "13.18%",
    top: "0%",
  },
  groupChild28: {
    width: "22.8%",
    top: "40.86%",
    right: "77.2%",
    bottom: "45.96%",
    backgroundColor: Color.darkDeep,
    borderRadius: Border.br_smi,
    height: "13.18%",
  },
  groupChild29: {
    top: "81.72%",
    bottom: "5.1%",
    right: "68.76%",
    width: "31.24%",
    backgroundColor: Color.darkDeep,
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
  },
  groupParent8: {
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
    color: Color.darkDeep,
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
    height: 92,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    overflow: "hidden",
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
  homeScreen: {
    flex: 1,
    height: 1553,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeScreen;
