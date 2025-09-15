import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/IconSymbol.ios";
import { router } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const disclaimer = () => {
  const redFlagSymptoms = [
    { id: "0", text: "Loss of bladder or bowel control" },
    { id: "1", text: "Unexplained Weight loss" },
    { id: "2", text: "Fever or Night Sweats" },
    { id: "3", text: "Severe numbness or tingling in your legs" },
    { id: "4", text: "Recent Significant Trauma or Injury" },
    { id: "5", text: "Recent Significant Trauma or Injury" },
    { id: "6", text: "Pain that worsens at night or lying down" },
    { id: "7", text: "lying down" },
  ];
  return (
    <SafeAreaView>
      <View className="items-center flex flex-col gap-2">
        <IconSymbol
          name={"exclamationmark.warninglight.fill"}
          color={"#54A38E"}
          size={40}
        />
        <ThemedText className="text-center text-xl font-bold">
          Important Notice
        </ThemedText>
        <ThemedText className="text-center">
          If you have any of the following red flag symptoms, we strongly
          recommend consulting with a health care professional before
          proceeding. Your safety is our priority!
        </ThemedText>
        <FlatList
          data={redFlagSymptoms}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View className="py-3">
                <ThemedText className="text-center font-bold text-xl">
                  {item.text}
                </ThemedText>
              </View>
            );
          }}
        />
        <View className="py-1">
          <Button
            className="h-12 w-96"
            onPress={() => router.push("/Questionnaire")}
            title={"None of these apply to me"}
          />
        </View>
        <View className="py-1">
          <Button
            className="h-12 w-96"
            variant="error"
            title={"I do have one or more of these symptoms"}
            onPress={() => alert("DISPLAY ALERT MESSAGE - CANNOT PROCEED")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default disclaimer;
