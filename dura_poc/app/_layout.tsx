import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { UserProvider } from "@/contexts/UserContext/UserProvider";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <UserProvider>
          <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />

          <Stack.Screen
            name="login"
            options={{
              headerTitle: "Log In",
              headerShadowVisible: false,
              headerStyle: { backgroundColor: "#F9FCF8" },
              headerTintColor: "#54A38E",
              contentStyle: { backgroundColor: "#F9FCF8" },
            }}
          />

          <Stack.Screen
            name="signup"
            options={{
              headerTitle: "Sign Up",
              headerShadowVisible: false,
              headerStyle: { backgroundColor: "#F9FCF8" },
              headerTintColor: "#54A38E",
              contentStyle: { backgroundColor: "#F9FCF8" },
            }}
          />
          <Stack.Screen
            name="disclaimer"
            options={{
              headerTitle: "Safety Screening & Disclaimer",
              headerShadowVisible: false,
              headerStyle: { backgroundColor: "#F9FCF8" },
              headerTintColor: "#54A38E",
              contentStyle: { backgroundColor: "#F9FCF8" },
            }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </UserProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
