import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/IconSymbol";
import QuestionView from "@/components/ui/Questionnaire/QuestionView";
import TextCard from "@/components/ui/TextCard/TextCard";
import {
  FOLLOW_UP_QUESTIONS,
  GOAL_OPTIONS,
} from "@/stub/questionnaire/questions";
import { GoalKey, Question } from "@/types/Questionnaire";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Questionnaire: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<GoalKey | undefined>();
  const [followUpQuestions, setFollowUpQuestions] = useState<
    Question[] | undefined
  >(undefined);
  const [showNextQuestions, setShowNextQuestions] = useState<boolean>(false);
  const [questionCounter, setQuestionCounter] = useState(0);

  const initialQuestionsRender = GOAL_OPTIONS.map((goal, index) => {
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
      <View className="flex flex-col gap-8">
        {!showNextQuestions ? (
          <>
            <ThemedText type="title">Hello!</ThemedText>
            <ThemedText type="subtitle">What do you want to do?</ThemedText>
            {initialQuestionsRender}

            <View className="items-center">
              <Button
                isDisabled={!selectedGoal}
                title="NEXT"
                className="min-w-72"
                // onPress={() => router.push("/(tabs)/Index")}
                onPress={() => {
                  setShowNextQuestions(true);
                  if (selectedGoal) {
                    setFollowUpQuestions(FOLLOW_UP_QUESTIONS[selectedGoal]);
                  }
                }}
              />
              <Button
                isDisabled={!selectedGoal}
                title="NEXT"
                className="min-w-72"
                onPress={() => router.push("/(tabs)/Index")}
              />
            </View>
          </>
        ) : (
          followUpQuestions && (
            <View>
              <QuestionView
                questionCounter={questionCounter}
                setQuestionCounter={setQuestionCounter}
                questionnaireSize={followUpQuestions.length - 1}
                question={{
                  id: followUpQuestions[questionCounter].id,
                  question: followUpQuestions[questionCounter].question,
                  type: followUpQuestions[questionCounter].type,
                  options: followUpQuestions[questionCounter].options,
                }}
              />
            </View>
          )
        )}
      </View>
    </SafeAreaView>
  );
};

export default Questionnaire;
