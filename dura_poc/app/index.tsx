import React from "react";
import { View, Text } from "react-native";
import "../global.css";
import Button from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/IconSymbol.ios";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
// import { IconSymbol } from "@/components/ui/IconSymbol";

const LandingPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-primaryBackground">
      <View className="flex-1 px-6 pt-36 flex-col justify-between">
        <View className="items-center">
          <Text className="text-8xl font-semibold tracking-tight">DURA</Text>
        </View>

        <View>
          <Text className="text-3xl text-center">
            Built by Physiotherapists.
          </Text>
          <Text className="text-3xl text-center">Designed for You</Text>
        </View>

        <View>
          <Text className="text-center text-xl opacity-80 px-2">
            Your journey to move better, feel stronger, and build confidence
            starts here.
          </Text>
        </View>

        <View className="items-center gap-y-4">
          <View className="w-full items-center gap-y-3 mt-2">
            <Button
              className="w-72 rounded-2xl py-3 bg-primaryButton"
              title="Sign Up"
              onPress={() => router.push("/signup")}
            />
            <Button
              className="w-72 rounded-2xl py-3 borderprimaryButton"
              title="Log In"
              onPress={() => router.push("/login")}
            />
          </View>
        </View>

        <View className="w-full items-center">
          <View className="w-full max-w-[480px] rounded-2xl border border-gray-300 bg-white p-4">
            <View className="items-center gap-y-3">
              <IconSymbol
                name={"exclamationmark.warninglight.fill"}
                color={"#54A38E"}
                size={40}
              />
              <Text className="text-center text-xl font-bold">
                Your Safety Comes First
              </Text>
              <Text className="text-center opacity-80">
                Before accessing DURA, you’ll complete a brief safety screening
                to ensure these exercises are appropriate for your current
                health status.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;
