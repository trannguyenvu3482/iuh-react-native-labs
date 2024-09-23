import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import question from "../assets/question.png";
import star from "../assets/star.png";
import rightIcon from "../assets/Vector.png";
import { colors } from "../constants";

export default function Home() {
  const [color, setColor] = React.useState(colors.blue);

  const navigation = useNavigation();
  return (
    <View className="flex-[1] bg-white justify-between px-[22px]">
      <View className="flex-[1] w-full ">
        <View className="flex items-center">
          <Image source={color} width={301} />
        </View>
        <Text className="text-[15px]">
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View className="flex flex-row mt-[9px]">
          <View className="flex flex-row">
            <Image source={star} />
            <Image source={star} />
            <Image source={star} />
            <Image source={star} />
            <Image source={star} />
          </View>
          <Text className="ml-[23px] text-[15px]">(Xem 828 đánh giá)</Text>
        </View>
        <View className="mt-3 flex flex-row items-center">
          <Text className="font-bold text-[18px] mr-[44px]">1.790.000 đ</Text>
          <Text className="font-bold line-through text-[15px] opacity-[0.58]">
            1.790.000 đ
          </Text>
        </View>
        <View className="mt-4 flex flex-row items-center">
          <Text className="font-bold text-[12px] mr-[12px] text-[#FA0000]">
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image source={question} />
        </View>
        <TouchableOpacity className="flex-row w-full px-2 h-[34px] bg-white flex justify-between items-center rounded-lg mt-4 drop-shadow-md border">
          <View className=""></View>
          <Text className="text-[15px]">4 MÀU-CHỌN MÀU</Text>
          <Image source={rightIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ColorChoose", { color })}
        className="w-full h-[44px] bg-[#CA1536] flex justify-center items-center rounded-lg mb-4 drop-shadow-md border"
      >
        <Text className="text-white text-[20px] uppercase font-bold">
          Chọn mua
        </Text>
      </TouchableOpacity>
    </View>
  );
}
