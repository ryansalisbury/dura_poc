import { ThemedText } from "@/components/ThemedText";
import { Question } from "@/types/Questionnaire";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, View } from "react-native";
import Button from "../Button";
interface Props {
  question: Question;
  questionCounter: number;
  setQuestionCounter: React.Dispatch<React.SetStateAction<number>>;
  questionnaireSize: number;
}
const QuestionView: React.FC<Props> = ({
  question,
  questionnaireSize,
  questionCounter,
  setQuestionCounter,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>();
  const optionsRender = question.options.map((option) => {
    const iSelected = selectedOption === option.id;
    return (
      <Pressable
        key={option.id}
        onPress={() => setSelectedOption(option.id)}
        className={`self-center w-11/12 max-w-[420px] justify-center h-10 flex flex-col gap-6 rounded-xl  shadow-md ${iSelected ? "bg-primaryColour text-white  shadow-primaryColour" : "border-transparent bg-white shadow-black/20"}`}
      >
        <View className="rounded-xl  items-center overflow-hidden">
          <ThemedText
            className={`${iSelected ? "text-white" : ""}`}
            type="subsubtitle"
          >
            {option.label}
          </ThemedText>
        </View>
      </Pressable>
    );
  });

  return (
    <View className="w-full h-full flex flex-col gap-6">
      <ThemedText type="title">{question.question}</ThemedText>
      <View className="w-full items-center flex flex-col gap-6">
        {optionsRender}
        {questionCounter === questionnaireSize ? (
          <View className="flex flex-row w-full justify-between">
            <Button
              title="PREV"
              className=""
              onPress={() => {
                setQuestionCounter((prev) => prev - 1);
                setSelectedOption(undefined);
              }}
            />
            <Button
              title="FINISH"
              className=""
              isDisabled={!selectedOption}
              onPress={() => router.push("/(tabs)/Index")}
            />
          </View>
        ) : !questionCounter ? (
          <Button
            title="NEXT"
            className="min-w-72"
            isDisabled={!selectedOption}
            onPress={() => {
              setQuestionCounter((prev) => prev + 1);
              setSelectedOption(undefined);
            }}
          />
        ) : (
          <View className="flex flex-row w-full justify-between">
            <Button
              title="PREV"
              className=""
              onPress={() => {
                setQuestionCounter((prev) => prev - 1);
                setSelectedOption(undefined);
              }}
            />
            <Button
              title="NEXT"
              className=""
              isDisabled={!selectedOption}
              onPress={() => {
                setQuestionCounter((prev) => prev + 1);
                setSelectedOption(undefined);
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default QuestionView;
