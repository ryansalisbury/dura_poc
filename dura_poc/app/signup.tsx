import Button from "@/components/ui/Button";
import Input from "@/components/ui/InputFields/Input";
import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateInput from "@/components/ui/InputFields/DateInput";
import { router } from "expo-router";

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
            <Text className="text-8xl font-semibold tracking-tight">DURA</Text>
            <View>
              <Text className="text-3xl text-center">
                Built by Physiotherapists.
              </Text>
              <Text className="text-3xl text-center">Designed for You</Text>
            </View>
          </View>

          <View className="items-center gap-y-3 w-full pt-10">
            <Input className="w-80" placeholder="Name" autoCapitalize="none" />
            {/* <Input className="w-80" placeholder="Date of Birth" /> */}
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
              className="mt-2 py-3 rounded-2xl bg-primaryButton w-80"
              title="Sign Up"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default signup;
