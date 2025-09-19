import StyledTextField from "@/components/inputFields/StyledTextField/StyledTextField";
import { ThemedText } from "@/components/ThemedText";
import Button from "@/components/ui/Button";
import DateInput from "@/components/ui/InputFields/DateInput";
import { useUser } from "@/contexts/UserContext/UserContext";
import { User } from "@/types/User";
import { router } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type SignupForm = {
  firstName: string;
  lastName: string;
  DoB: Date;
  email: string;
  password: string;
  username: string;
};

const Signup: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      username: "",
    },
    mode: "onTouched",
  });

  const { user, setUser } = useUser();

  const handleSignupSubmit = (data: SignupForm) => {
    const userData: User = {
      id: "12345",
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.firstName,
      DoB: data.DoB,
      password: data.password,
      username: data.username,
    };
    setUser(userData);
    router.push("/Questionnaire");

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
          <View className="flex flex-col items-center gap-6">
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
          <View className="items-center">
            <View className="w-full max-w-[320px] items-center gap-6 pt-10">
              <StyledTextField
                control={control}
                name="firstName"
                placeholder="First name"
                autoCapitalize="words"
                autoCorrect={false}
                className="w-80"
                rules={{
                  required: "First name is required",
                  setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Letters only, no spaces",
                  },
                  maxLength: { value: 50, message: "Too long" },
                }}
                error={errors.firstName?.message}
              />
              <StyledTextField
                control={control}
                name="lastName"
                placeholder="Last name"
                autoCapitalize="words"
                autoCorrect={false}
                className="w-80"
                rules={{
                  required: "Last name is required",
                  setValueAs: (v) => (typeof v === "string" ? v.trim() : v),
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Letters only, no spaces",
                  },

                  maxLength: { value: 50, message: "Too long" },
                }}
                error={errors.lastName?.message}
              />

              <Controller<SignupForm>
                control={control}
                name="DoB"
                rules={{
                  required: "Date of birth is required",
                }}
                render={({
                  field: { value, onChange, onBlur },
                  fieldState: { error },
                }) => (
                  <View className="w-80">
                    <DateInput
                      value={(value as Date) ?? undefined}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    {error && (
                      <ThemedText className="text-red-500 font-semibold text-sm">
                        {error.message}
                      </ThemedText>
                    )}
                  </View>
                )}
              />

              <StyledTextField
                control={control}
                name="username"
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                className="w-80"
                rules={{
                  required: "Username is required",
                  setValueAs: (v) =>
                    typeof v === "string" ? v.trim().toLowerCase() : v,
                  minLength: { value: 3, message: "Min 3 characters" },
                  maxLength: { value: 20, message: "Max 20 characters" },
                  pattern: {
                    value: /^[a-z0-9_]+$/,
                    message: "Letters, numbers, underscores only",
                  },
                }}
                error={errors.username?.message}
              />

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
                className="w-80"
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
                className="w-80"
              />
              <Button
                onPress={handleSubmit(handleSignupSubmit)}
                className="mt-2 py-3 rounded-2xl bg-primaryColour w-80"
                title="Sign Up"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;
