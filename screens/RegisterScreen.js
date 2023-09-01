import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../Firebase_Data/firebaseConfig";
import { ScrollView } from "react-native-gesture-handler";
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const auth = FIREBASE_AUTH;
  const signUpHandle = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigation.navigate("Login");
    } catch {
      Alert.alert("Please Register Correctly !!");
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View
        style={{
          // flex: 1,
          marginTop: "40%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              // justifyContent: "center",
              // alignItems: "center",
              // marginTop: "40%",
              marginBottom: "10%",
            }}
          >
            <Text
              style={{ fontSize: 35, fontWeight: "bold", color: "#264c86" }}
            >
              Booking.<Text style={{ color: "#69d2e7" }}>Com</Text>
            </Text>
          </View>

          <View
            style={{
              width: "90%",
              height: 50,
              alignSelf: "center",
              marginLeft: 10,
              // marginBottom: 40,
            }}
          >
            <View
              style={{
                width: "90%",
                height: 50,
                alignSelf: "center",
                marginLeft: 10,
                marginBottom: 40,
              }}
            >
              <Text
                style={{
                  paddingVertical: 5,
                  fontSize: 18,
                  color: "#264c86",
                  paddingLeft: 5,
                }}
              >
                Name
              </Text>
              <TextInput
                onChangeText={(text) => setName(text)}
                value={name}
                style={{
                  borderWidth: 1,
                  borderRadius: 15,
                  height: 50,
                  borderColor: "grey",
                  paddingHorizontal: 20,
                  fontSize: 16,
                }}
              />
            </View>
            <View
              style={{
                width: "90%",
                height: 50,
                alignSelf: "center",
                marginLeft: 10,
                marginBottom: 40,
              }}
            >
              <Text
                style={{
                  paddingVertical: 5,
                  fontSize: 18,
                  color: "#264c86",
                  paddingLeft: 5,
                }}
              >
                Email
              </Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={{
                  borderWidth: 1,
                  borderRadius: 15,
                  height: 50,
                  borderColor: "grey",
                  paddingHorizontal: 20,
                  fontSize: 16,
                }}
              />
            </View>
            <View
              style={{
                width: "90%",
                height: 50,
                alignSelf: "center",
                marginLeft: 10,
                marginBottom: 40,
              }}
            >
              <Text
                style={{
                  paddingVertical: 5,
                  fontSize: 18,
                  color: "#264c86",
                  paddingLeft: 5,
                }}
              >
                Set Password
              </Text>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                value={password}
                style={{
                  borderWidth: 1,
                  borderRadius: 15,
                  height: 50,
                  borderColor: "grey",
                  paddingHorizontal: 20,
                  fontSize: 16,
                }}
              />
            </View>
            <Pressable
              onPress={signUpHandle}
              style={{
                backgroundColor: "#264c86",
                height: 50,
                marginVertical: 20,
                alignItems: "center",
                justifyContent: "center",
                width: "90%",
                borderRadius: 15,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "600",
                }}
              >
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
