import { NetflixIcon } from "@/constants/icon";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Define the props interface
interface IndexProps {
  title: string;
}

export default function Index({ title }: IndexProps) {
  return <SafeAreaView className="flex-1 bg-[#1A1A1A]"></SafeAreaView>;
}
