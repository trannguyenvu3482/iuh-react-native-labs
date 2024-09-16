import { StyleSheet, Text, TextInput, View } from "react-native";
export default function Index() {
  return (
    <View
      style={styles.container}
      className="flex-1 p-5 flex-col bg-radial bg-contain object-cover"
    >
      <View className="p-[19px] rounded-lg w-full h-full bg-[#23235B]">
        <View className="p-3 flex justify-between h-full">
          <View>
            <Text className="text-[25px] font-bold text-center text-white uppercase">
              Password Generator
            </Text>
            <TextInput className="text-white bg-[#151537] text-2xl mt-8 px-2 py-1" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:
      "radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0) 87.36%)",
  },
});
