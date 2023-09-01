import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import SearchItem from "../component/SearchItem";
import { data } from "../Booking_Data/data";
import { StatusBar } from "expo-status-bar";

const SearchScreen = () => {
  const [input, setInput] = useState("");

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          alignItems: "center",
          borderWidth: 1,
          alignSelf: "center",
          height: 48,
          borderRadius: 24,
          marginVertical: 20,
        }}
      >
        <TextInput
          onChangeText={(text) => setInput(text)}
          placeholder="Search Destination"
          style={{ flex: 1, paddingHorizontal: 10, fontSize: 15 }}
        />
        <Feather
          name="search"
          size={24}
          color="grey"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <SearchItem data={data} input={input} setInput={setInput} />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default SearchScreen;
