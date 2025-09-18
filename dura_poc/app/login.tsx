import StyledTextField from "@/components/inputFields/StyledTextField/StyledTextField";
import Button from "@/components/ui/Button";
import React from "react";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type LoginForm = { email: string; password: string };

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: { email: "", password: "" },
    mode: "onTouched",
  });

  const handleLoginSubmit = (data: LoginForm) => {
    // TODO submit form data to backend
    console.log(data);
  };
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
                <StyledTextField
                  control={control}
                  name="email"
                  placeholder="Email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  }}
                  error={errors.email?.message}
                />
                <StyledTextField
                  control={control}
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                  autoComplete="password"
                  textContentType="password"
                  rules={{
                    required: "Password is required",
                    minLength: { value: 6, message: "Min 6 characters" },
                  }}
                  error={errors.password?.message}
                />
                <Button
                  onPress={handleSubmit(handleLoginSubmit)}
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
