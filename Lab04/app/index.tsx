import "@/style.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 p-5">
      <Text className="text-base font-bold">
        Lab 04 - Trần Nguyên Vũ - 21088201
      </Text>
      <Link className="text-blue-500" href="/screenTikiOK">
        Screen Tiki OK
      </Link>
      <Link className="text-blue-500" href="/screenPassword">
        Screen Password
      </Link>
    </View>
  );
}
