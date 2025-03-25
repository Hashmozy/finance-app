import React from "react";
import { View, Text } from "react-native";

// Define the props interface
interface TransactionsProps {
  title: string;
}

export default function Transactions({ title }: TransactionsProps) {
  return (
    <View>
      <Text>Transactions</Text>
    </View>
  );
}
