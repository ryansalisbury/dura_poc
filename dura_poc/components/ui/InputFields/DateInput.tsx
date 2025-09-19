import { ThemedText } from "@/components/ThemedText";
import DateTimePicker from "@react-native-community/datetimepicker";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IconSymbol } from "../IconSymbol.ios";
interface Props {
  isVisible?: boolean;
  value?: Date;
  onChange: (date: Date) => void;
  onBlur?: () => void;
}

const DateInput = ({ value, onChange }: Props) => {
  const [date, setDate] = useState<Date>(new Date(2000, 0, 1));
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (_event: any, selectedDate?: Date) => {
    setIsVisible(Platform.OS === "ios");
    setDate(selectedDate!);
    if (selectedDate) onChange(selectedDate);
  };

  return (
    <View className="w-80">
      <Pressable
        className="border border-gray-500 bg-white rounded-lg px-4 py-3"
        onPress={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        <Text>{date.toLocaleDateString()}</Text>
      </Pressable>

      <Modal
        className="max-h-[100px]"
        visible={isVisible}
        animationType="fade"
        transparent
      >
        <View style={StyleSheet.absoluteFillObject}>
          <BlurView
            intensity={30}
            tint="dark"
            style={StyleSheet.absoluteFillObject}
          />
          {/* Optional: tap outside to close */}
          <Pressable
            onPress={() => setIsVisible(false)}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
        <View className=" w-full h-full justify-center items-center  backdrop-blur-md">
          <View className="bg-white shadow-md rounded-xl">
            <DateTimePicker
              value={value ?? new Date(2000, 0, 1)}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              maximumDate={new Date()}
              minimumDate={new Date(1900, 0, 1)}
              onChange={handleChange}
            />
            <Pressable
              className="items-center p-1"
              onPress={() => setIsVisible(false)}
            >
              <ThemedText>
                <IconSymbol
                  name={"x.circle.fill"}
                  color={"#2E7D32"}
                  size={40}
                />
              </ThemedText>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DateInput;
