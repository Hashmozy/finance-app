import React from "react";
import { View, Text } from "react-native";

// Define the props interface
interface ProfileProps {
  title: string;
}

export default function Profile({ title }: ProfileProps) {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}
