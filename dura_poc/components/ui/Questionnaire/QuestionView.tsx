import { ThemedText } from "@/components/ThemedText";
import { Question } from "@/types/Questionnaire";
import React from "react";
import { View } from "react-native";
interface Props {
  question: Question;
  isSelected: boolean;
}
const QuestionView: React.FC<Props> = ({ question, isSelected }) => {
  const optionsRender = question.options.map((option) => {
    return (
      <View
        key={option.id}
        className={`w-full max-w-[420px] rounded-xl bg-white shadow-md shadow-black/20 border-2 ${isSelected ? "bg-primaryColour text-white" : "border-transparent"}`}
      >
        <View className="rounded-xl items-center overflow-hidden">
          {option.label}
        </View>
      </View>
    );
  });

  return (
    <View className="w-full h-full">
      <ThemedText type="title">{question.question}</ThemedText>
      {optionsRender}
    </View>
  );
};

export default QuestionView;
