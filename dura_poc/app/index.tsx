import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/IconSymbol.ios";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

const LandingPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-primaryBackground">
      <View className="flex-1 px-6 pt-32 flex-col justify-between">
        <View className="items-center">
          <ThemedText type="title" className="text-8xl leading-[90px]">
            DURA
          </ThemedText>
        </View>

        <View>
          <ThemedText type="title" className="text-3xl text-center pb-4">
            Built by Physiotherapists.
          </ThemedText>
          <ThemedText type="subtitle" className="text-3xl  text-center">
            Designed for You
          </ThemedText>
        </View>

        <View>
          <ThemedText className="text-center  text-xl opacity-80 px-2">
            Your journey to move better, feel stronger, and build confidence
            starts here.
          </ThemedText>
        </View>

        <View className="items-center gap-y-4">
          <View className="w-full items-center gap-y-3 mt-2">
            <Button
              className="w-72 rounded-2xl py-3 bg-primaryColour"
              title="Sign Up"
              onPress={() => router.push("/Signup")}
            />
            <Button
              className="w-72 rounded-2xl py-3 border-primaryColour"
              title="Log In"
              onPress={() => router.push("/login")}
            />
          </View>
        </View>

        <View className="w-full items-center">
          <View className="w-full max-w-[480px] rounded-2xl shadow-black bg-secondaryColour p-4">
            <View className="items-center gap-y-3">
              <IconSymbol
                name={"exclamationmark.warninglight.fill"}
                color={"#1C1C1C"}
                size={40}
              />
              <ThemedText className="text-center text-xl font-bold">
                Your Safety Comes First
              </ThemedText>
              <ThemedText className="text-center opacity-80">
                Before accessing DURA, you’ll complete a brief safety screening
                to ensure these exercises are appropriate for your current
                health status.
              </ThemedText>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
