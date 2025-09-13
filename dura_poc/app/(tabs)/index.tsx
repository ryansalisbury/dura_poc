import { ThemedText } from "@/components/ThemedText";
import ActivityCard from "@/components/ui/ActivityCard/ActivityCard";
import SessionWidget from "@/components/ui/SessionWidget/SessionWidget";
import StickyBanner from "@/components/ui/StickyBanner/StickyBanner";
import { stubData } from "@/stub/content/HealthTips";
import { session1 } from "@/stub/sessions/session1/session1";
import React from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const { width } = Dimensions.get("window");
  // const { firstName } = useContext(UserContext);

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <ScrollView
        stickyHeaderIndices={[0]}
        className="flex-1 bg-white"
        contentContainerClassName="flex flex-col  gap-6 items-stretch pb-24"
        showsVerticalScrollIndicator={false}
      >
        {/* Sticky banner header */}
        <StickyBanner />
        <View className="items-center">
          <ThemedText className="pl-8" type="title">
            Your Next Session
          </ThemedText>
          <View className="h-[20vh] w-[80vw]">
            <SessionWidget session={session1} />
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
        </View>
      </ScrollView>
    </SafeAreaView>
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
