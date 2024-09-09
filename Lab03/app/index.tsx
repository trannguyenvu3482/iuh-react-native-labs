import { images } from "@/constants";
import "@/style.css";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-around bg-[#00CCF9] h-full px-5">
      <Image
        source={images.eclipse}
        width={140}
        height={140}
        className="object-cover"
      />
      <Text className="text-[25px] font-bold uppercase text-center">
        Grow <br />
        your business
      </Text>
      <Text className="text-[15px] font-bold text-center">
        We will help you to grow your business using online server
      </Text>
      <View className="flex flex-row justify-between w-full">
        <Link
          href="/screen1a"
          className="bg-[#E3C000] rounded-[10px] w-[119px] h-[48px] flex justify-center items-center font-bold text-[20px] uppercase"
        >
          Login
        </Link>
        <TouchableOpacity className="bg-[#E3C000] rounded-[10px] w-[119px] h-[48px] flex justify-center items-center font-bold text-[20px] uppercase">
          Sign up
        </TouchableOpacity>
      </View>
    </View>
  );
}
