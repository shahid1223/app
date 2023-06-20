import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Filters = () => {
  return (
    <View style={styles.filters}>
      <View style={styles.statusBar}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap5.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi5.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection5.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <Text style={styles.filters1}>Filters</Text>
      <Image
        style={styles.filtersChild}
        contentFit="cover"
        source={require("../assets/group-68462.png")}
      />
      <View style={styles.bottomBar}>
        <Text style={[styles.home, styles.homePosition]}>Home</Text>
        <Text style={[styles.profile, styles.homePosition]}>Profile</Text>
        <View style={[styles.rectangleParent, styles.groupParentPosition]}>
          <View style={[styles.groupChild, styles.childBg]} />
          <Image
            style={styles.excludeIcon}
            contentFit="cover"
            source={require("../assets/exclude.png")}
          />
          <Text style={[styles.eggs, styles.eggsPosition]}>Eggs</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.groupParentPosition]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={styles.individualCallection}>Individual Callection</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupParentPosition]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={styles.individualCallection}>{`Noodles & Pasta`}</Text>
        </View>
        <View style={[styles.groupView, styles.groupParentPosition]}>
          <View style={[styles.groupChild, styles.childBg]} />
          <Image
            style={styles.excludeIcon}
            contentFit="cover"
            source={require("../assets/exclude1.png")}
          />
          <Text style={[styles.cocola, styles.eggsPosition]}>Cocola</Text>
        </View>
        <View style={[styles.rectangleParent1, styles.groupParentPosition]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={styles.individualCallection}>{`Chips & Crisps`}</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupParentPosition]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={styles.individualCallection}>Ifad</Text>
        </View>
        <View style={[styles.rectangleParent3, styles.groupParentPosition]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={styles.individualCallection}>Fast Food</Text>
        </View>
        <View style={[styles.rectangleParent4, styles.groupParentPosition]}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={styles.individualCallection}>Kazi Farmas</Text>
        </View>
        <Text style={[styles.categories, styles.brandTypo]}>Categories</Text>
        <Text style={[styles.brand, styles.brandTypo]}>Brand</Text>
      </View>
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={styles.button}>
        <View style={[styles.buttonChild, styles.childBg]} />
        <Text style={[styles.applyFilter, styles.brandTypo]}>Apply Filter</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  capacityBg: {
    backgroundColor: Color.black,
    position: "absolute",
  },
  timeLayout: {
    lineHeight: 18,
    textAlign: "center",
  },
  homePosition: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.hKGroteskRegular,
    marginTop: 0.5,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  groupParentPosition: {
    height: 24,
    left: 25,
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.mediumseagreen_100,
    position: "absolute",
  },
  eggsPosition: {
    color: Color.mediumseagreen_100,
    fontFamily: FontFamily.gilroyMediumRegular,
    fontSize: FontSize.size_base,
    left: 36,
    top: 4,
    position: "absolute",
  },
  groupLayout: {
    borderWidth: 1.5,
    borderRadius: Border.br_5xs,
    height: 24,
    left: 0,
    borderStyle: "solid",
    top: 0,
    width: 24,
    position: "absolute",
  },
  brandTypo: {
    fontFamily: FontFamily.buttone16pxS,
    fontWeight: "600",
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
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.black,
    width: 60,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    lineHeight: 18,
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
  filters1: {
    top: 56,
    left: 179,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.gilroyBoldRegular,
    color: Color.darkDeep,
    textAlign: "center",
    lineHeight: 18,
    position: "absolute",
  },
  filtersChild: {
    height: "1.76%",
    width: "3.84%",
    top: "6.36%",
    right: "90.14%",
    bottom: "91.89%",
    left: "6.02%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  home: {
    width: "9.87%",
    left: "8%",
    textAlign: "left",
  },
  profile: {
    width: "10.4%",
    left: "81.6%",
    textAlign: "right",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.mediumseagreen_100,
    height: 24,
    left: 0,
    top: 0,
    width: 24,
  },
  excludeIcon: {
    width: 14,
    height: 10,
  },
  eggs: {
    textAlign: "center",
  },
  rectangleParent: {
    top: 84,
    width: 72,
  },
  groupItem: {
    borderColor: "#c2c2c2",
  },
  individualCallection: {
    fontFamily: FontFamily.gilroyMediumRegular,
    fontSize: FontSize.size_base,
    left: 36,
    textAlign: "left",
    color: Color.darkDeep,
    top: 4,
    position: "absolute",
  },
  rectangleGroup: {
    top: 334,
    width: 187,
  },
  groupInner: {
    borderColor: "#b1b1b1",
  },
  rectangleContainer: {
    top: 128,
    width: 157,
  },
  cocola: {
    textAlign: "left",
  },
  groupView: {
    top: 378,
    width: 90,
  },
  rectangleParent1: {
    top: 172,
    width: 142,
  },
  rectangleParent2: {
    top: 422,
    width: 65,
  },
  rectangleParent3: {
    top: 216,
    width: 110,
  },
  rectangleParent4: {
    top: 467,
    width: 125,
  },
  categories: {
    top: 30,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    left: 25,
    color: Color.darkDeep,
    textAlign: "center",
  },
  brand: {
    top: 280,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    left: 25,
    color: Color.darkDeep,
    textAlign: "left",
  },
  bottomBar: {
    top: 105,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.whitesmoke_100,
    width: 414,
    height: 791,
    left: 0,
    position: "absolute",
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
  buttonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_lgi,
    width: "100%",
  },
  applyFilter: {
    top: "36.57%",
    left: "37.08%",
    fontSize: FontSize.buttone16pxS_size,
    color: Color.ghostwhite,
    textAlign: "center",
    lineHeight: 18,
  },
  button: {
    top: 791,
    width: 364,
    height: 67,
    left: 25,
    position: "absolute",
  },
  filters: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default Filters;
