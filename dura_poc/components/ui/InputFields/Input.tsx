import React from "react";
import { TextInput, View, Text, TextInputProps } from "react-native";
interface Props extends TextInputProps {
  label?: string;
  placeholder?: string;
  error?: string; // need to change any Typing
  secureTextEntry?: boolean;
  className?: string;
}
const Input = ({
  label,
  placeholder,
  error,
  secureTextEntry,
  className,
  keyboardType,
  ...props
}: Props) => {
  return (
    <View className={className}>
      {label && <Text className="text-gray-900 font-medium">{label}</Text>}
      <TextInput
        {...props}
        className={`border rounded-lg bg-white px-4 py-3 ${
          error ? "border-red-500" : "border-gray-500"
        }`}
        placeholder={placeholder}
        secureTextEntry={!!secureTextEntry}
        keyboardType={keyboardType}
      />
      {error && (
        <Text className="text-red-500 font-semibold text-sm">{error}</Text>
      )}
    </View>
  );
};

export default Input;
