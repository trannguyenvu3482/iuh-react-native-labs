import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import appleBtn from "../assets/apple.png";
import iconEye from "../assets/eye.png";
import faceBtn from "../assets/face.png";
import googleBtn from "../assets/google.png";
import iconLogo from "../assets/icon.png";
import emailLogo from "../assets/Vector.png";

const userData = [
  { email: "a@gmail.com", password: "123" },
  { email: "b@gmail.com", password: "123" },
];

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const result = userData.includes(
      (element) => email === element.email && password === element.password
    );

    if (result) {
      console.log("Success");
    } else {
      console.log("Failed");
    }
  };

  return (
    <SafeAreaView style={{ flexDirection: "column", paddingHorizontal: 24 }}>
      <View style={{ marginTop: 20 }}>
        <Text>Back</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={iconLogo} />
        <Text style={{ fontWeight: "bold", fontSize: "28px", marginTop: 12 }}>
          Hello Again!
        </Text>
        <Text style={{ fontSize: "14px", color: "#bbb" }}>
          Log into your account
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            border: "1px solid black",
            width: "100%",
            alignItems: "center",
            borderRadius: 14,
          }}
        >
          <Image style={{ marginHorizontal: 8 }} source={emailLogo} />
          <TextInput
            style={{ flex: 1, padding: 10 }}
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            border: "1px solid black",
            width: "100%",
            alignItems: "center",
            marginTop: 20,
            borderRadius: 14,
          }}
        >
          <Image style={{ marginHorizontal: 8 }} source={emailLogo} />
          <TextInput
            style={{ flex: 1, padding: 10 }}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Image style={{ marginHorizontal: 8 }} source={iconEye} />
        </View>
      </View>
      <TouchableOpacity style={{ marginTop: 10 }}>
        <Text style={{ fontSize: "14px", color: "purple", textAlign: "right" }}>
          Forgot password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          marginTop: 24,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
          borderRadius: 14,
        }}
      >
        <Text style={{ fontSize: "14px", color: "white" }}>Continue</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 30, textAlign: "center" }}>or</Text>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity>
          <Image style={{ marginHorizontal: 8 }} source={googleBtn} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ marginHorizontal: 8 }} source={faceBtn} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{ marginHorizontal: 8 }} source={appleBtn} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
