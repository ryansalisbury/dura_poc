import { Image } from "expo-image";
import { Platform, StyleSheet, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

const Plan = () => {
  return (
    <View className="bg-primaryBackground h-full items-center justify-center">
      <ThemedText type="title" className="PLAN PAGE">
        PLAN PAGE
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

export default Plan;
