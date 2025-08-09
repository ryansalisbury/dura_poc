import React from "react";
import { useState } from "react";
import { View, Text, Pressable, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
interface Props {
  isVisible?: boolean;
}

const DateInput = ({ isVisible }: Props) => {
  const [date, setDate] = useState(new Date(2000, 0, 1));
  const [show, setShow] = useState(false);

  const onChange = (_event: any, selectedDate?: Date) => {
    setShow(Platform.OS === "ios");
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <View className="w-80">
      <Pressable
        className="border border-gray-500 bg-white rounded-lg px-4 py-3"
        onPress={() => setShow(true)}
        onBlur={() => setShow(false)}
      >
        <Text>{date.toLocaleDateString()}</Text>
      </Pressable>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          maximumDate={new Date()} // no future DOBs
          minimumDate={new Date(1900, 0, 1)}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateInput;
