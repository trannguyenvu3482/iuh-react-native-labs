import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

const CartItem = ({ item }) => {
  return (
    <TouchableOpacity className="flex-1 flex-row w-full h-[80px] border-t border-b border-gray-300 p-1 justify-between">
      <Image
        className="mr-2 w-[74px] h-[74px]"
        src={item.image}
        width={74}
        height={74}
      />
      <View className="flex-1">
        <Text className="mt-1" numberOfLines={1}>
          {item.name}
        </Text>
        <Text className="mt-1">
          <Text className="text-gray-500">Shop</Text> {item.shopName}
        </Text>
      </View>
      <TouchableOpacity className="w-[88px] h-[38px] flex items-center justify-center bg-red-500 self-center mr-6">
        <Text className="text-white">Chat</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const Screen1a = () => {
  const { iconBack, iconCart, iconHamburger, iconHome, iconReturn } = images;
  const [data, setData] = React.useState([]);
  const navigate = useNavigation();

  const fetchData = async () => {
    const response = await fetch(
      "https://6421447c34d6cd4ebd6ecd50.mockapi.io/api/v1/items"
    );
    const data = await response.json();
    console.log(data);

    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-between">
      <View className="header bg-[#1BA9FF] h-[42px] px-4 w-full flex items-center justify-between flex-row">
        <Image source={iconBack} />
        <Text className="text-white text-base">Chat</Text>
        <Image source={iconCart} />
      </View>
      <View className="main flex-1 bg-[#e5e5e5]">
        <Text className="main-top py-4 px-8">
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
        </Text>
        <FlatList
          className="flex-1"
          data={data}
          renderItem={CartItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View className="bottomNav bg-[#1BA9FF] h-[49px] px-4 flex items-center justify-between flex-row">
        <Image source={iconHamburger} />
        <TouchableOpacity onPress={() => navigate.push("Screen1b")}>
          <Image source={iconHome} />
        </TouchableOpacity>
        <Image source={iconReturn} />
      </View>
    </SafeAreaView>
  );
};

export default Screen1a;
