// components/ThemedText.tsx
import React from "react";
import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "subsubtitle";
  className?: string;
};

const variants: Record<NonNullable<ThemedTextProps["type"]>, string> = {
  default: "font-nunito primaryText text-base leading-6",
  defaultSemiBold:
    "font-nunito-semibold primaryText text-base leading-6 font-semibold",
  title: "font-poppins-semibold primaryText text-3xl leading-8 font-bold",
  subtitle: "font-poppins-bold primaryText text-xl leading-6 font-bold",
  subsubtitle: "font-poppins font-thin primaryText text-l leading-6 font-bold",
  link: "poppins primaryText underline text-base leading-7",
};

export function ThemedText({
  type = "default",
  className,
  ...rest
}: ThemedTextProps) {
  const base = variants[type];
  return <Text {...rest} className={`${base} ${className ?? ""}`} />;
}
