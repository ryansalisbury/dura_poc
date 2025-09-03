import { FlatList, StyleSheet, View, Text, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import { stubData } from "@/stub/content/HealthTips";

import ActivityCard from "@/components/ui/ActivityCard/ActivityCard";

const Index = () => {
  const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <FlatList
        data={stubData}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <View style={{ width, padding: 16 }}>
            <ActivityCard
              thumbnail={item.thumbnail}
              title={item.title}
              description={item.description}
              onPress={() => alert(`Navigate to ${item.title}`)}
            />
          </View>
        )}
        pagingEnabled
        horizontal
        bounces={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: 400,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
});

export default Index;
