import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

const AddToCarButton = () => {
  return (
    <View style={styles.addToCarButton}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector53.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 46,
    left: 0,
    top: 0,
    position: "absolute",
    height: 46,
  },
  groupChild: {
    borderRadius: Border.br_mid,
    backgroundColor: "#00b36f",
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
  addToCarButton: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 46,
  },
});

export default AddToCarButton;
