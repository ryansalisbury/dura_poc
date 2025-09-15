import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";
interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  isSelected?: boolean;
}
const TextCard: React.FC<Props> = ({ title, subtitle, icon, isSelected }) => {
  return (
    <View className="content-center w-full">
      <View className="w-full" style={{ elevation: 4 }}>
        <View
          className={`w-full max-w-[420px] rounded-xl bg-white shadow-md shadow-black/20 border-2 ${isSelected ? "border-primaryColour" : "border-transparent"}`}
        >
          <View className="rounded-xl overflow-hidden">
            <View className="flex flex-row items-center gap-2 p-1">
              <View className="items-center ml-1">{icon}</View>
              <View className="flex-1 min-w-0 p-3 bg-secondaryColour">
                <ThemedText
                  type="subtitle"
                  className="text-primaryText font-semibold"
                >
                  {title}
                </ThemedText>
                <ThemedText
                  className="text-sm text-primaryText"
                  type="subsubtitle"
                >
                  {subtitle}
                </ThemedText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TextCard;
