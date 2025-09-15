import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/ui/Button";
import DateInput from "@/components/ui/InputFields/DateInput";
import Input from "@/components/ui/InputFields/Input";
import { router } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signup = () => {
  return (
    <SafeAreaView className="flex-1 bg-primaryBackground">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="items-center gap-y-2">
            <ThemedText
              type="title"
              className="text-8xl font-semibold tracking-tight leading-[100px]"
            >
              DURA
            </ThemedText>
            <View>
              <ThemedText type="title" className="text-3xl text-center pb-4">
                Built by Physiotherapists.
              </ThemedText>
              <ThemedText type="subtitle" className="text-3xl  text-center">
                Designed for You
              </ThemedText>
            </View>
          </View>

          <View className="items-center gap-y-3 w-full pt-10">
            <Input className="w-80" placeholder="Name" autoCapitalize="none" />
            <DateInput />
            <Input
              className="w-80"
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              inputMode="email"
            />
            <Input className="w-80" placeholder="Password" secureTextEntry />
            <Button
              onPress={() => router.push("/disclaimer")}
              className="mt-2 py-3 rounded-2xl bg-primaryColour w-80"
              title="Sign Up"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default signup;
