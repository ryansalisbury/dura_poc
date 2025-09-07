import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "@/components/ui/InputFields/Input";
import Button from "@/components/ui/Button";

export default function Login() {
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
          <View className="flex-1 px-6 pt-6 pb-8 justify-between">
            <View className="items-center pt-2">
              <Text className="text-8xl font-semibold tracking-tight">
                DURA
              </Text>
            </View>

            <View className="items-center gap-y-6">
              <View>
                <Text className="text-3xl text-center">
                  Built by Physiotherapists.
                </Text>
                <Text className="text-3xl text-center">Designed for You</Text>
              </View>

              <View className="w-full max-w-[320px] gap-y-3">
                <Input placeholder="Email" autoCapitalize="none" />
                <Input placeholder="Password" secureTextEntry />
                <Button
                  onPress={() => alert("LOGIN BUTTON PRESSED")}
                  className="mt-2 py-3 rounded-2xl bg-primaryColour"
                  title="Log in"
                />
              </View>
            </View>

            {/* Row 3 — Optional footer / help */}
            <View className="items-center opacity-70">
              <Text className="text-center">Forgot your password?</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
