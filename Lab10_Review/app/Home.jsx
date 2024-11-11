import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import heartbtn from "../assets/heartbtn.png";
const SplashScreen = () => {
  const navigate = useNavigation();

  const [currentType, setCurrentType] = useState("All");
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://6731a7497aaf2a9aff1165e9.mockapi.io/bikes"
      );
      console.log(data);
      setBikes(data);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 20,
      }}
    >
      <ScrollView>
        <Text style={{ fontSize: 20, color: "red", fontWeight: "bold" }}>
          The world's Best Bike
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <TouchableOpacity
            onPress={() => setCurrentType("All")}
            style={[
              {
                width: 99,
                height: 32,
                borderWidth: 1,
                borderColor: "#E9414187",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              },
              currentType === "All" && {
                borderColor: "#E94141",
                borderWidth: 2,
              },
            ]}
          >
            <Text style={{ color: "black" }}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCurrentType("Roadbike")}
            style={[
              {
                width: 99,
                height: 32,
                borderWidth: 1,
                borderColor: "#E9414187",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              },
              currentType === "Roadbike" && {
                borderColor: "#E94141",
                borderWidth: 2,
              },
            ]}
          >
            <Text style={{ color: "black" }}>Roadbike</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setCurrentType("Mountain")}
            style={[
              {
                width: 99,
                height: 32,
                borderWidth: 1,
                borderColor: "#E9414187",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              },
              currentType === "Mountain" && {
                borderColor: "#E94141",
                borderWidth: 2,
              },
            ]}
          >
            <Text style={{ color: "black" }}>Mountain</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <FlatList
            style={{ gap: 20 }}
            columnWrapperStyle={{ gap: 20 }}
            data={
              currentType === "All"
                ? bikes
                : bikes.filter((item) => item.type === currentType)
            }
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigate.navigate("Description", { item })}
                  style={{
                    width: 167,
                    height: 220,
                    backgroundColor: "#f7e2cc",
                    alignItems: "center",
                    borderRadius: 16,
                    marginBottom: 20,
                    padding: 10,
                  }}
                >
                  <TouchableOpacity style={{ alignSelf: "flex-start" }}>
                    <Image
                      style={{ width: 24, height: 24 }}
                      source={heartbtn}
                      contentFit="contain"
                    />
                  </TouchableOpacity>
                  <Image
                    source={item.image}
                    style={{ width: "70%", height: "60%" }}
                    contentFit="contain"
                  />
                  <Text style={{ color: "#333", fontSize: 18 }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 18 }}>
                    <Text style={{ color: "#c9976b" }}>$</Text> {item.price}
                  </Text>
                </TouchableOpacity>
              );
            }}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;
