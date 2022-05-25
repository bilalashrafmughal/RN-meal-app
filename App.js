import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [dataLoaded, setDataLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!dataLoaded) {
    return (
      <View style={styles.loaderWrapper}>
        <Text style={styles.loadingText}> Loading... </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Meal App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "open-sans-bold",
    color: "red",
  },

  // Loader Styles
  loaderWrapper: {
    flex: 1,
    height: "100%",
    backgroundColor: "#051033",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "white",
    fontSize: 18,
    fontFamily: "open-sans",
  },
});
