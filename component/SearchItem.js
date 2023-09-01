import { View, Text, Pressable, FlatList, Image } from "react-native";
import React from "react";
// import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SearchItem = ({ data, input, setInput }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") {
              return null;
            }
            return (
              <Pressable
                onPress={() => {
                  setInput(item.place);
                  navigation.navigate("Home", { input: item.place });
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                  backgroundColor: "#264c86",
                  borderRadius: 15,
                  width: "90%",
                  height: 150,
                  marginVertical: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: 10,
                    borderRadius: 15,
                  }}
                >
                  <Image
                    source={{ uri: item.placeImage }}
                    style={{ width: 100, height: 100, borderRadius: 15 }}
                  />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#f2f2f2",
                      fontWeight: "bold",
                    }}
                  >
                    {item.place}
                  </Text>
                  <Text style={{ fontSize: 18, color: "#f1f1f1" }}>
                    {item.shortDescription}
                  </Text>
                  <Text style={{ fontSize: 18, color: "#f1f1f1" }}>
                    {item.properties.length}
                  </Text>
                </View>
              </Pressable>
            );
          }
        }}
        // keyExtractor={({ item }) => {
        //   console.log(item);
        // }}
      />
    </View>
  );
};

export default SearchItem;
