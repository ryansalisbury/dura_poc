import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { Image, ImageSourcePropType, Pressable, View } from "react-native";

interface Props {
  thumbnail: ImageSourcePropType; // TODO: How are we storing images and content
  title: string;
  description: string;
  onPress: () => void;
}

const ActivityCard = ({ thumbnail, title, description, onPress }: Props) => {
  return (
    <View className="content-center w-full">
      <Pressable
        onPress={onPress}
        className="w-full px-4"
        style={{ elevation: 4 }}
      >
        <View className="w-full max-w-[420px] rounded-xl bg-white shadow-md shadow-black/20">
          <View className="rounded-xl overflow-hidden">
            <View className="h-[180px]">
              <Image
                source={thumbnail}
                className="absolute h-[300px] w-[400px] bottom-0 left-0"
                resizeMode="cover" // similar to contentFit="cover"
              />
            </View>

            <View className="p-3 bg-secondaryColour gap-1">
              <ThemedText className="text-base font-semibold">
                {title}
              </ThemedText>
              <ThemedText className="text-sm text-gray-600" numberOfLines={2}>
                {description}
              </ThemedText>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ActivityCard;
