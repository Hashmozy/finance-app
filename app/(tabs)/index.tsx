import React from "react";
import { View, Text, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Define the props interface
interface IndexProps {
  title: string;
}

export default function Index({ title }: IndexProps) {
  return (
    <SafeAreaView className="flex-1 bg-[#fff]">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View className="bg-blue-[#fff] p-4 flex-1 items-center justify-center">
          <Text className="font-semibold text-2xl text-white">
            Okay this is it
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
