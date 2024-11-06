import { removeUser, setUsers } from "@/features/users/usersSlice";
import axios from "axios";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.users.users);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(data);
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View>
        <Text
          style={{
            backgroundColor: "#bbb",
            paddingHorizontal: 24,
            paddingVertical: 8,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          User management
        </Text>
      </View>

      {/* Table */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          padding: 24,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 8,
          }}
        >
          Users
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Username
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Actions
          </Text>
        </View>
        {users.map((user, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
              borderWidth: 1,
              padding: 8,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#333",
              }}
            >
              {user.username}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "blue",
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  marginRight: 8,
                }}
                onPress={() => {
                  console.log("EDIT");
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "red",
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  marginRight: 8,
                }}
                onPress={() => {
                  dispatch(removeUser(index));
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
