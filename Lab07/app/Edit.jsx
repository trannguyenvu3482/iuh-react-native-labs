import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

export const Edit = ({ route }) => {
  const { isEdit, user, task, tasks, setTasks } = route.params;
  const [jobName, setJobName] = React.useState(isEdit ? task.title : "");
  const navigate = useNavigation();

  const handleSubmit = () => {
    if (isEdit) {
      const updatedTask = { ...task, title: jobName };
      const updatedTasks = tasks.map((item) =>
        item.id === task.id ? updatedTask : item
      );
      setTasks(updatedTasks);
    } else {
      const newTask = {
        id: tasks.length + 1,
        title: jobName,
        isCompleted: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
    navigate.navigate("Home", { user, tasks });
  };

  return (
    <SafeAreaView className="mx-7">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <Image source={images.avatar} />
          <View className="ml-4">
            <Text className="text-xl font-bold text-[#171A1F]">Hi {user}</Text>
            <Text className="text-[14px] font-bold text-[#171A1F] opacity-75">
              Have a great day ahead
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigate.navigate("Home", { user, tasks })}
        >
          <Image source={images.back} />
        </TouchableOpacity>
      </View>
      <Text className="text-center mt-14 uppercase text-3xl">
        {isEdit ? "Edit Your Job" : "Add Your Job"}
      </Text>
      <View className="flex flex-row items-center mt-14 border rounded-md w-[330px] h-[42px]">
        <Image className="ml-4" source={images.addjob} />
        <TextInput
          value={jobName}
          onChangeText={(text) => setJobName(text)}
          className="ml-2 text-base"
          placeholder="Input your job"
        />
      </View>
      <View className="items-center justify-center">
        <TouchableOpacity
          className="mt-10 rounded-md bg-[#00BDD6] w-[190px] h-[42px] items-center justify-center"
          onPress={handleSubmit}
        >
          <Text className="text-white text-base">
            FINISH <Text className="text-2xl">&rarr;</Text>{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
