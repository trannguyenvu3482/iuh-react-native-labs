import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { data2, images } from "../constants/";

const CartItem = ({ item }) => {
  return (
    <TouchableOpacity className="flex-1  w-[155px] bg-gray-300 border">
      <Image source={item.img} />
      <View className="px-4 mt-2">
        <Text>Cáp chuyển từ Cổng USB sang PS2</Text>
      </View>
    </TouchableOpacity>
  );
};

const Screen1b = () => {
  const {
    iconBack,
    iconCart,
    iconHamburger,
    iconHome,
    iconReturn,
    iconMore,
    iconSearch,
  } = images;
  const navigate = useNavigation();

  return (
    <SafeAreaView className="flex-1 justify-between">
      <View className="header bg-[#1BA9FF] h-[42px] px-4 w-full flex items-center justify-between flex-row">
        <TouchableOpacity onPress={() => navigate.push("Screen1a")}>
          <Image source={iconBack} />
        </TouchableOpacity>
        <View className="w-[192px] my-1 bg-white flex-row py-1 px-2">
          <Image source={iconSearch} />
          <TextInput className="flex-1 ml-2" placeholder="Nhập vào sản phẩm" />
        </View>
        <Image source={iconCart} />
        <Image source={iconMore} />
      </View>
      <View className="main flex-1 bg-[#e5e5e5]">
        <FlatList
          className="flex-1 mt-8 mx-4"
          data={data2}
          renderItem={CartItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
      <View className="bottomNav bg-[#1BA9FF] h-[49px] px-4 flex items-center justify-between flex-row">
        <Image source={iconHamburger} />
        <TouchableOpacity>
          <Image source={iconHome} />
        </TouchableOpacity>
        <Image source={iconReturn} />
      </View>
    </SafeAreaView>
  );
};

export default Screen1b;
