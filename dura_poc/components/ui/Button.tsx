import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  title: string;
  className?: string;
  onPress?: () => void;
  variant?: string;
  textClassName?: string;
  isDisabled?: boolean;
}

const Button = ({
  title,
  className,
  onPress,
  variant = "primary",
  isDisabled,
  textClassName,
}: Props) => {
  const base = `${className} items-center justify-center rounded-xl px-5 py-3 active:opacity-80`;
  const styles =
    variant === "primary"
      ? "bg-primaryColour"
      : variant === "error"
        ? "bg-error"
        : "border border-black";
  const text =
    variant === "primary" || variant === "error" ? "text-white" : "text-black";
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      className={`${base} ${styles}`}
    >
      <Text className={`${text}`}>{title}</Text>
    </Pressable>
  );
};

export default Button;
