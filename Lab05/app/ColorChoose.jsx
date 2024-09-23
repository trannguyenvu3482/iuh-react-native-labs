import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import vsBlueImg from "../assets/vs_blue.png";

const ColorChoose = ({ route }) => {
  return (
    <SafeAreaView className="flex-[1] bg-[#C4C4C4]">
      <View className="top bg-white flex flex-row pb-3">
        <Image className="w-[112px] h-[132px]" source={vsBlueImg} />
        <View className="flex-[1]">
          <Text className="mt-4 text-[15px] w-[170px]">
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <View className="flex-[1] justify-between mt-2">
            <Text className="text-[15px]">
              Màu: <Text className="font-bold">đỏ</Text>
            </Text>
            <Text className="text-[15px]">
              Cung cấp bởi <Text className="font-bold">Tiki Trading</Text>
            </Text>
            <Text className="text-[15px] font-bold">1.790.000 đ</Text>
          </View>
        </View>
      </View>
      <View className="flex-[1] bottom bg-[#C4C4C4] px-[17px]">
        <Text className="text-lg my-3">Chọn một màu bên dưới:</Text>
        <View className="flex items-center gap-4">
          <TouchableOpacity className="w-24 h-24 bg-[#C5F1FB]"></TouchableOpacity>
          <TouchableOpacity className="w-24 h-24 bg-[#F30D0D]"></TouchableOpacity>
          <TouchableOpacity className="w-24 h-24 bg-black"></TouchableOpacity>
          <TouchableOpacity className="w-24 h-24 bg-[#234896]"></TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity className="flex items-center justify-center h-[44px] bg-[#1952E294] mb-4 mx-4 rounded-xl border border-[#CA1536] shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.25)]">
        <Text className="text-[20px] text-white font-bold">XONG</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ColorChoose;
