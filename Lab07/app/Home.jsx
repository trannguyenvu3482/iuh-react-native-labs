import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import TaskContext from "../context/taskContext";
import UserContext from "../context/userContext";

const Home = () => {
  const { user } = React.useContext(UserContext);
  const {
    tasks,
    handleAddTask,
    handleUpdateTask,
    handleDeleteTask,
    handleGetTask,
    handleToggleTask,
  } = React.useContext(TaskContext);
  const [searchInput, setSearchInput] = React.useState("");

  return (
    <SafeAreaView className="mx-7">
      <View className="flex flex-row items-center justify-between">
        <TouchableOpacity>
          <Image source={images.back} />
        </TouchableOpacity>
        <View className="flex flex-row items-center">
          <Image source={images.avatar} />
          <View className="ml-4">
            <Text className="text-xl font-bold text-[#171A1F]">Hi {user}</Text>
            <Text className="text-[14px] font-bold text-[#171A1F] opacity-75">
              Have a great day ahead
            </Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row items-center mt-14 border rounded-md w-[330px] h-[42px]">
        <Image className="ml-4" source={images.search} />
        <TextInput
          value={searchInput}
          onChangeText={(text) => setSearchInput(text)}
          className="ml-2 text-base"
          placeholder="Search"
        />
      </View>
      <View className="mt-8">
        {tasks.map((task) => (
          <TouchableOpacity
            className="flex-row items-center justify-between bg-[#DEE1E6] rounded-xl py-2  px-4 my-2"
            onPress={() => handleToggleTask(task.id)}
            key={task.id}
          >
            <View className="flex-row items-center">
              <Checkbox status={task.isCompleted ? "checked" : "unchecked"} />
              <Text className="text-base font-bold">{task.title}</Text>
            </View>
            <TouchableOpacity>
              <Image className="ml-4" source={images.edit} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Home;
