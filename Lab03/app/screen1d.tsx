import { images } from "@/constants";
import React from "react";
import { Image, Text, TextInput, View } from "react-native";
const Screen1D = () => {
  return (
    <View className="flex-1 items-center bg-[#d8efdf] h-full px-4">
      <Text className="uppercase font-bold text-2xl mt-10">Login</Text>

      <TextInput
        placeholder="Email"
        className="mt-20 bg-[#c4c4c4] bg-opacity-30 w-full text-lg py-3 px-6"
        inputMode="email"
      ></TextInput>
      <View className="w-full flex flex-row justify-center items-center mt-8">
        <TextInput
          placeholder="Password"
          className=" flex-1 bg-[#c4c4c4] bg-opacity-30 text-lg py-3 px-6"
          secureTextEntry={true}
        ></TextInput>
        <Image
          className="flex justify-center items-center h-full bg-[#c4c4c4] bg-opacity-30 pr-6"
          source={images.eye}
          width={38}
          height={52}
        />
      </View>
    </View>
  );
};

export default Screen1D;
