import { Link } from "expo-router";
import React from "react";
import { Text, TextInput, View } from "react-native";
const Screen1C = () => {
  return (
    <View className="flex-1 items-center justify-around bg-gradient-to-b from-[#C7F4F6] via-80% via-[#D1F4F6] to-[#00CCF9] h-full px-5">
      <Text className="text-[60px] font-bold uppercase text-center">CODE</Text>
      <Text className="text-[20px] font-bold uppercase text-center">
        Verification
      </Text>
      <Text className="text-[15px] font-bold text-center">
        Enter ontime password sent on ++849092605798
      </Text>
      <View className="w-full h-[45px] flex flex-row justify-center">
        <TextInput
          className="border text-center w-[50px] h-[50px] text-2xl font-bold"
          maxLength={1}
        />
        <TextInput
          className="border text-center w-[50px] h-[50px] text-2xl font-bold"
          maxLength={1}
        />
        <TextInput
          className="border text-center w-[50px] h-[50px] text-2xl font-bold"
          maxLength={1}
        />
        <TextInput
          className="border text-center w-[50px] h-[50px] text-2xl font-bold"
          maxLength={1}
        />
        <TextInput
          className="border text-center w-[50px] h-[50px] text-2xl font-bold"
          maxLength={1}
        />
        <TextInput
          className="border text-center w-[50px] h-[50px] text-2xl font-bold"
          maxLength={1}
        />
      </View>
      <View className="flex flex-row justify-between w-full">
        <Link
          href="/screen1d"
          className="bg-[#E3C000] w-full h-[45px] flex justify-center items-center font-bold text-[18px] uppercase mb-[124px]"
        >
          VERIFY CODE
        </Link>
      </View>
    </View>
  );
};

export default Screen1C;
