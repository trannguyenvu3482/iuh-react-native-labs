import { images } from "@/constants";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TextInput, View } from "react-native";
const Screen1B = () => {
  return (
    <View className="flex-1 items-center justify-around bg-gradient-to-b from-[#C7F4F6] via-80% via-[#D1F4F6] to-[#00CCF9] h-full px-5">
      <Image
        source={images.lock}
        width={140}
        height={140}
        className="object-cover"
      />
      <Text className="text-[25px] font-bold uppercase text-center">
        FORGET
        <br />
        PASSWORD
      </Text>
      <Text className="text-[15px] font-bold text-center">
        Provide your account’s email for which you want to reset your password
      </Text>
      <View className="w-full h-[45px] flex flex-row">
        <Image source={images.envelope} width={45} height={45} />
        <TextInput placeholder="Email" className=" bg-[#C4C4C4] py-3 flex-1" />
      </View>
      <View className="flex flex-row justify-between w-full">
        <Link
          href="/screen1c"
          className="bg-[#E3C000] w-full h-[45px] flex justify-center items-center font-bold text-[20px] uppercase mb-[124px]"
        >
          Next
        </Link>
      </View>
    </View>
  );
};

export default Screen1B;
