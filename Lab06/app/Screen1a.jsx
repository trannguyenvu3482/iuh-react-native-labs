import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import iconCart from "../assets/cart.png";
import iconHome from "../assets/home.png";
import iconBack from "../assets/iconBack.png";
import iconReturn from "../assets/return.png";
const Screen1a = () => {
  return (
    <SafeAreaView className="flex-1 justify-between">
      <View className="header bg-[#1BA9FF] h-[42px] px-4 w-full flex items-center justify-between flex-row">
        <Image source={iconBack} />
        <Text className="text-white text-base">Chat</Text>
        <Image source={iconCart} />
      </View>
      <View className="main flex-1 bg-[#c4c4c4]"></View>
      <View className="bottomNav bg-[#1BA9FF] h-[49px] px-4 flex items-center justify-between flex-row">
        <Image source={iconBack} />
        <Image source={iconHome} />
        <Image source={iconReturn} />
      </View>
    </SafeAreaView>
  );
};

export default Screen1a;
