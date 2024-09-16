import { images, svg } from "@/constants";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const BOOK_PRICE = 141800;
export default function Index() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View className="flex-1 bg-[#C4C4C4] h-full flex justify-between">
      <View>
        <View className="view-top bg-white px-3 py-[14px]">
          <View className="flex flex-row gap-[25px]">
            <Image source={images.book} width={104} height={127} />
            <View className="flex h-[127px] flex-1">
              <Text className="text-[12px] font-bold">
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text className="text-[12px] font-bold mt-[14px]">
                Cung cấp bởi Tiki Trading
              </Text>
              <Text className="text-md font-bold text-red-600 mt-[11px]">
                {(BOOK_PRICE * quantity).toLocaleString()}đ
              </Text>
              <Text className="text-[12px] line-through font-bold text-[#808080] mt-[11px]">
                141.800đ
              </Text>
              <View className="flex flex-row justify-between mt-1.5">
                <View className="flex flex-row justify-center items-center gap-2">
                  <View>
                    <Pressable
                      onPress={decreaseQuantity}
                      className="w-[14px] h-[16px] bg-[#c4c4c4] flex items-center justify-center text-center font-bold"
                    >
                      <Text>-</Text>
                    </Pressable>
                  </View>
                  <Text>{quantity}</Text>
                  <View>
                    <Pressable
                      onPress={increaseQuantity}
                      className="w-[14px] h-[16px] bg-[#c4c4c4] flex items-center justify-center text-center font-bold"
                    >
                      <Text>+</Text>
                    </Pressable>
                  </View>
                </View>
                <TouchableOpacity className="text-[12px] text-[#134FEC] font-bold">
                  Mua sau
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="flex gap-4 flex-row mt-[21px]">
            <Text className="text-[12px] font-bold">Mã giảm giá đã lưu</Text>
            <TouchableOpacity className="text-[12px] text-[#134FEC] font-bold">
              Xem tại đây
            </TouchableOpacity>
          </View>
          <View className="flex gap-6 flex-row mt-[21px] mb-[27px]">
            <View className="input-box border border-[#808080] rounded-sm flex flex-row h-[45px] justify-center items-center flex-1">
              <View className="flex px-2 items-center justify-center object-contain">
                <Image className="object-contain" source={svg.yellowBlock} />
              </View>
              <TextInput
                className="font-bold h-full w-full"
                placeholder="Mã giảm giá"
              />
            </View>
            <TouchableOpacity className="bg-[#0A5EB7] font-bold flex justify-center items-center text-white rounded-sm flex-1 h-[45px] max-w-[100px] flex-grow">
              Áp dụng
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View className="view-gift flex flex-row bg-white mt-[14px] px-3 py-[15px] gap-2 items-center">
            <Text className="text-[11px] font-bold">
              Bạn có phiếu quà tặng từ Tiki/Got it/Urbox?
            </Text>
            <Text className="text-[11px] text-[#134FEC] font-bold">
              Nhập tại đây?
            </Text>
          </View>
          <View className="view-gift flex flex-row bg-white mt-[14px] px-3 py-[15px] gap-2 items-center justify-between">
            <Text className="text-base font-bold">Tạm tính</Text>
            <Text className="text-base font-bold text-red-600">
              {(BOOK_PRICE * quantity).toLocaleString()}đ
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View className="flex flex-row bg-white mt-[14px] px-3 py-[15px] gap-2 items-center justify-between">
          <Text className="text-base font-bold text-[#808080]">Thành tiền</Text>
          <Text className="text-base font-bold text-red-600">
            {(BOOK_PRICE * quantity).toLocaleString()}đ
          </Text>
        </View>
        <View className="flex flex-row bg-white px-3 py-[15px] gap-2 items-center justify-between">
          <TouchableOpacity className="text-white bg-[#E53935] font-bold w-full py-2 text-center uppercase">
            Tiến hành đặt hàng
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
