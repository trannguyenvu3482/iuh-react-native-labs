import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Checkbox } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

const initialTasks = [
  {
    id: 1,
    title: "Task 1",
  },
  {
    id: 2,
    title: "Task 2",
  },
];

const Home = ({ route }) => {
  const { user, tasks: prevTasks } = route.params || {};
  const [searchInput, setSearchInput] = React.useState("");
  const [tasks, setTasks] = React.useState(prevTasks || initialTasks);
  const [filteredTasks, setFilteredTasks] = React.useState(tasks);
  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearchInput(text);

    if (text == "") {
      return;
    }

    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredTasks(filteredTasks);
  };

  React.useEffect(() => {
    setFilteredTasks(
      searchInput === ""
        ? tasks
        : tasks.filter((task) => task.title.includes(searchInput))
    );
  }, [tasks, searchInput]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // do something
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView className="mx-7">
      <View className="flex flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
          onChangeText={(text) => handleSearch(text)}
          className="ml-2 text-base"
          placeholder="Search"
        />
      </View>
      <View className="mt-8">
        {filteredTasks.length === 0 && (
          <Text className="text-2xl font-bold text-center">No task found</Text>
        )}
        {filteredTasks.map((task) => (
          <View
            className="flex-row items-center justify-between bg-[#DEE1E6] rounded-xl py-2 px-4 my-2"
            key={task.id}
          >
            <View className="flex-row items-center">
              <Checkbox status={"checked"} />
              <Text className="text-base font-bold">{task.title}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Edit", {
                  isEdit: true,
                  task,
                  user,
                  setTasks,
                  tasks,
                })
              }
            >
              <Image className="ml-4" source={images.edit} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View className="justify-center items-center">
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Edit", {
              isEdit: false,
              user,
              setTasks,
              tasks,
            })
          }
          className="flex-row items-center justify-center bg-[#00BDD6] rounded-full mt-4 w-[70px] h-[70px]"
        >
          <Image source={images.add} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
