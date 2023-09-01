import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
// import { firebaseAuth } from "../Firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../Firebase_Data/firebaseConfig";
// import { FIREBASE_AUTH } from "../Firebase_Data/'FirebaseConfig";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;
  const loginHandle = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigation.replace("Main");
    } catch (error) {
      Alert.alert("Email and Password do not exist ");
    }
    // .then((userCredential) => {
    //   // Signed in
    //   const user = userCredential.user;
    //   console.log(user.email);
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    // });

    // signInWithEmailAndPassword(
    //   (auth, email, password)
    //     .then((userCredentials) => {
    //       const user = userCredentials.user;
    //       console.log(user);
    //     })
    //     .catch((error) => console.log(error))
    // );
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40%",
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
                Password
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
              onPress={loginHandle}
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
                Login
              </Text>
            </Pressable>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={{ textAlign: "center", fontSize: 16 }}>
                Don't have any account ?
              </Text>
              <Text style={{ color: "#264c86", fontSize: 16 }}> Register</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
