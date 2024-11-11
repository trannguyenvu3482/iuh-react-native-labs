import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import bikehome from "../assets/bikehome.png";
const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 20 }}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#f7e2cc",
            width: 358,
            height: 358,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Image source={bikehome} />
        </View>
        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 24, marginTop: 10 }}>POWER BIKE</Text>
          <Text style={{ fontSize: 24 }}>SHOP</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.replace("Home")}
        style={{
          width: 340,
          height: 61,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SplashScreen;
