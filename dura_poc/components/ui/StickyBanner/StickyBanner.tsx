import { ThemedText } from "@/components/ThemedText";
import { UserContext } from "@/contexts/UserContext/UserContext";
import { router } from "expo-router";
import React, { useContext, useMemo } from "react";
import { Pressable, View } from "react-native";
import { CalendarProvider, WeekCalendar } from "react-native-calendars";
import { IconSymbol } from "../IconSymbol";

const StickyBanner: React.FC = () => {
  const { firstName } = useContext(UserContext);

  const today = useMemo(() => {
    const d = new Date();
    const m = `${d.getMonth() + 1}`.padStart(2, "0");
    const day = `${d.getDate()}`.padStart(2, "0");
    return `${d.getFullYear()}-${m}-${day}`;
  }, []);

  return (
    // TODO make the Header/this bg white
    // TODO figure out how we will populate the calendar with test data

    <View className="w-full flex-none bg-white py-3">
      <View className="flex flex-col">
        <View className="flex-row items-center justify-between mx-6">
          <View className="rounded-full border border-b">
            <IconSymbol size={50} name="brain.head.profile" color={"#2E7D32"} />
          </View>

          <View className="flex flex-col gap-0 items-start">
            <ThemedText type="subtitle" className="text-black font-semibold">
              Welcome back {firstName}
            </ThemedText>

            <ThemedText type="subsubtitle" className=" py-1">
              STREAK COUNTER
            </ThemedText>
          </View>

          <Pressable
            className="flex-col gap-2"
            onPress={() => router.push("/(tabs)/Plan")}
          >
            <ThemedText className="text-black underline">View plan</ThemedText>
          </Pressable>
        </View>
        <CalendarProvider date={today}>
          <WeekCalendar
            firstDay={1}
            allowShadow={false}
            style={{
              backgroundColor: "#FFFFFF",
              borderWidth: 0,
              borderColor: "#FFFFFF",
              elevation: 0,
              shadowColor: "#FFFFFF",

              shadowOpacity: 0,
              shadowRadius: 0,
              shadowOffset: { width: 0, height: 0 },
            }}
            theme={{
              calendarBackground: "#FFFFFF",
              indicatorColor: "#2E7D32",
              selectedDayBackgroundColor: "#2E7D32",
              selectedDayTextColor: "#FFFFFF",
            }}
          />
        </CalendarProvider>
      </View>
    </View>
  );
};

export default StickyBanner;
