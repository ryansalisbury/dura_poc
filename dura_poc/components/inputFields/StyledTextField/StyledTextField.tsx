import React from "react";
import {
  Controller,
  Control,
  FieldValues,
  FieldPath,
  RegisterOptions,
} from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface Props<TFieldValues extends FieldValues = FieldValues>
  extends TextInputProps {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  rules?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
  className?: string;
  label?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
}
const StyledTextField = <TFieldValues extends FieldValues = FieldValues>({
  control,
  name,
  rules,
  className,
  label,
  secureTextEntry,
  error,
  placeholder,
  keyboardType,
  ...props
}: Props<TFieldValues>) => {
  return (
    <View className={className}>
      {label && <Text className="text-gray-900 font-medium">{label}</Text>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            {...props}
            className={`border rounded-lg bg-white px-4 py-3 ${
              error ? "border-red-500" : "border-gray-500"
            }`}
            placeholder={placeholder}
            secureTextEntry={!!secureTextEntry}
            keyboardType={keyboardType}
          />
        )}
      />
      {error && (
        <Text className="text-red-500 font-semibold text-sm">{error}</Text>
      )}
    </View>
  );
};

export default StyledTextField;
