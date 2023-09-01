import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "../Firebase_Data/firebaseConfig";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          FIREBASE_AUTH.signOut();
          navigation.replace("Login");
        }}
        style={{
          // flex: 1,
          // position: "absolute",
          backgroundColor: "#264c86",
          height: 50,
          // marginVertical: 20,
          // alignItems: "center",
          alignItems: "flex-end",
          justifyContent: "center",
          // width: "90%",
          paddingHorizontal: 10,
          borderRadius: 15,
          // alignSelf: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Sign Out
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
