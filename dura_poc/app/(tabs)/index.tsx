import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { stubData } from "@/stub/content/HealthTips";

import ActivityCard from "@/components/ui/ActivityCard/ActivityCard";
import { ThemedText } from "@/components/ThemedText";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { router } from "expo-router";

const Index = () => {
  const { width } = Dimensions.get("window");
  const { firstName } = useContext(UserContext);

  return (
    <ScrollView
      className="flex-1 bg-primaryBackground"
      contentContainerClassName="flex flex-col gap-6 items-center pt-16 pb-24"
      showsVerticalScrollIndicator={false}
    >
      <ThemedText type="subtitle">Welcome Back {firstName}</ThemedText>

      <View className=" h-32 w-80 bg-gray-300 rounded">
        <Pressable
          className="h-full w-full"
          onPress={() => alert("navigate to Plan page")}
        >
          <ThemedText>Next Session Widget here</ThemedText>
          <ThemedText>Session tracker here</ThemedText>
        </Pressable>
      </View>

      {/* Example exercise info slides */}
      <View className="w-full">
        <ThemedText className="pl-8" type="subtitle">
          Mobility Exercises
        </ThemedText>
        <FlatList
          data={stubData}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
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
        />
      </View>

      {/* ✅ You’ll see this now */}
      <View className="items-center h-32 w-80 bg-gray-300 rounded">
        <Pressable
          className="h-full w-full"
          onPress={() => alert("navigate to Plan page")}
        >
          <ThemedText>Weekly planner Visuals here</ThemedText>
          <ThemedText>M T W T F S S</ThemedText>
        </Pressable>
      </View>

      {/* Example exercise info slides */}
      <View className="w-full">
        <ThemedText className="pl-8" type="subtitle">
          Mobility Exercises
        </ThemedText>
        <FlatList
          data={stubData}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          horizontal
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
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
        />
      </View>
    </ScrollView>
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
});

export default Index;
