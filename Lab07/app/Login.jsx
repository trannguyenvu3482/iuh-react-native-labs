import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

const Login = () => {
  const [input, setInput] = React.useState("");
  const navigate = useNavigation();

  const handleStart = () => {
    if (input == "") {
      Alert.alert("Lỗi", "Chưa nhập vào dữ liệu");
      return;
    }

    navigate.navigate("Home", {
      user: input,
    });
  };

  return (
    <SafeAreaView className="flex-1 flex-col items-center">
      <Image source={images.logo} />
      <Text className="text-[#8353E2] font-bold text-2xl mt-10">
        MANAGE YOUR TASK
      </Text>
      <View className="flex flex-row items-center mt-14 border rounded-xl w-[330px] h-[42px]">
        <Image className="ml-4" source={images.mail} />
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          className="ml-2 text-base"
          placeholder="Enter your name"
        />
      </View>
      <TouchableOpacity
        className="mt-10 rounded-md bg-[#00BDD6] w-[190px] h-[42px] items-center justify-center"
        onPress={handleStart}
      >
        <Text className="text-white text-base">
          GET STARTED <Text className="text-2xl">&rarr;</Text>{" "}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
