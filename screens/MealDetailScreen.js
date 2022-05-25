import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default MealDetailScreen;
