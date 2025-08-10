import { View, Text, FlatList } from "react-native";
import React from "react";
import { IconSymbol } from "@/components/ui/IconSymbol.ios";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/ui/Button";

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
      <View className="items-center">
        <IconSymbol
          name={"exclamationmark.warninglight.fill"}
          color={"#54A38E"}
          size={40}
        />
        <Text className="text-center text-xl font-bold">Important Notice</Text>
        <Text className="text-center">
          If you have any of the following red flag symptoms, we strongly
          recommend consulting with a health care professional before
          proceeding. Your safety is our priority!
        </Text>
        <FlatList
          data={redFlagSymptoms}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View className="py-3">
                <Text className="text-center font-bold text-xl">
                  {item.text}
                </Text>
              </View>
            );
          }}
        />
        <View className="py-1">
          <Button className="h-12 w-96" title={"None of these apply to me"} />
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
