import { ThemedText } from "@/components/ThemedText";
import { Session } from "@/types/Session";
import React from "react";
import { View } from "react-native";

interface Props {
  session: Session;
  className?: string;
}

const SessionWidget: React.FC<Props> = ({ session, className }) => {
  return (
    <View className="bg-gray-100 h-full w-full">
      <ThemedText>DURA</ThemedText>
    </View>
  );
};

export default SessionWidget;
