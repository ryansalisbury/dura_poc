import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const scheme = colorScheme ?? "light";
  const theme = Colors[scheme];
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors["light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground, // if you keep this, it may override bgColor
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "#FFFFFF",
          },
          default: {
            backgroundColor: "#81C784",
          },
        }),
      }}
    >
      <Tabs.Screen
        name="Index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),

          headerStyle: { backgroundColor: "#F9FCF8" },
          headerTintColor: "#54A38E",
        }}
      />
      <Tabs.Screen
        name="Plan"
        options={{
          title: "Plan",
          headerStyle: { backgroundColor: "#F9FCF8" },
          headerTintColor: "#54A38E",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={28}
              name="chart.line.text.clipboard"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: "Account",
          headerStyle: { backgroundColor: "#F9FCF8" },
          headerTintColor: "#54A38E",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
