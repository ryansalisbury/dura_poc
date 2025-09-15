import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TextCard from "@/components/ui/TextCard/TextCard";
import { GOAL_OPTIONS } from "@/stub/questionnaire/questions";
import { GoalKey } from "@/types/Questionnaire";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Questionnaire: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<GoalKey | undefined>();

  const questionsDisplayed = GOAL_OPTIONS.map((goal, index) => {
    return (
      <Pressable onPress={() => setSelectedGoal(goal.key)} key={index}>
        <TextCard
          isSelected={selectedGoal === goal.key}
          title={goal.title}
          subtitle={goal.subtitle}
          icon={
            <IconSymbol name={"questionmark.app"} color={"#2E7D32"} size={30} />
          }
        />
      </Pressable>
    );
  });
  return (
    <SafeAreaView className="px-4">
      <View className="flex flex-col gap-4">
        <ThemedText type="title">Hello!</ThemedText>
        <ThemedText type="subtitle">What do you want to do?</ThemedText>
        {questionsDisplayed}
        <View className="items-center">
          <Button
            isDisabled={!selectedGoal}
            title="NEXT"
            className="min-w-72"
            onPress={() => router.push("/(tabs)/Index")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Questionnaire;
