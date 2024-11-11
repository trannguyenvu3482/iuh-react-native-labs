import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import heart from "../assets/heart.png";

const Description = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 10,
        paddingBottom: 40,
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
    >
      <View>
        <Image
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 358,
            height: 358,
          }}
          source={item.image}
          contentFit="contain"
        />
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontSize: 20, marginTop: 10 }}>$ {item.price}</Text>
          <Text style={{ marginTop: 20, fontSize: 20 }}>Description</Text>
          <Text style={{ fontSize: 20, color: "#757575" }}>
            It is a very important form of writing as we write almost everything
            in paragraphs, be it an answer, essay, story, emails, etc.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity>
          <Image
            style={{ width: 30, height: 30 }}
            source={heart}
            contentFit="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("Home")}
          style={{
            width: 269,
            height: 54,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Add to Card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Description;
