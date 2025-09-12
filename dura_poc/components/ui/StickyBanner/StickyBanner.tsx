import { ThemedText } from "@/components/ThemedText";
import { UserContext } from "@/contexts/UserContext/UserContext";
import React, { useContext, useMemo } from "react";
import { Pressable, View } from "react-native";
import { CalendarProvider, WeekCalendar } from "react-native-calendars";

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
      <Pressable
        className="flex-col gap-2"
        onPress={() => alert("navigate to Plan page")}
      >
        <View className="flex-row items-center justify-between">
          <ThemedText className="text-black font-semibold">
            Welcome back {firstName}
          </ThemedText>
          <ThemedText className="text-black underline">View plan</ThemedText>
        </View>

        <CalendarProvider date={today}>
          <WeekCalendar
            firstDay={1}
            style={{
              backgroundColor: "#FFFFFF",
              borderWidth: 0,
              borderColor: "transparent",
              elevation: 0,
              shadowColor: "transparent",
              shadowOpacity: 0,
              shadowRadius: 0,
              shadowOffset: { width: 0, height: 0 },
            }}
            theme={{
              calendarBackground: "#FFFFFF",
            }}
          />
        </CalendarProvider>
      </Pressable>
    </View>
  );
};

export default StickyBanner;
