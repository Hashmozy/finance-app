import { Tabs } from "expo-router";
import React from "react";
import { Dimensions, View } from "react-native";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const { width } = Dimensions.get("window");
const BASE_ICON_SIZE = width * 0.05;
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.gray,
          position: "absolute",
          bottom: 35,
          height: 65,
          alignItems: "center",
          borderRadius: 50,
          marginHorizontal: 100,
          paddingHorizontal: 10,
          paddingVertical: 8,
          paddingTop: 12,
          elevation: 5,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 10,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#bbb",
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? Colors.tintColor : "transparent",
              }}
            >
              <SimpleLineIcons
                name="pie-chart"
                size={BASE_ICON_SIZE}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? Colors.tintColor : "transparent",
              }}
            >
              <AntDesign name="swap" size={BASE_ICON_SIZE} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? Colors.tintColor : "transparent",
              }}
            >
              <FontAwesome name="user-o" size={BASE_ICON_SIZE} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
