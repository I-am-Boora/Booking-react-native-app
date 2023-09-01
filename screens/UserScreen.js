import { View, Text, Pressable, Alert } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const UserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerBackTitleStyle: { color: "white" },
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#264c86",
        height: 120,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      },
    });
  }, [navigation]);
  const finalStep = () => {
    if (!firstName || !lastName || !email || !phone) {
      Alert.alert("Invalid Details", "Please enter all details", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (firstName && lastName && email && phone) {
      navigation.navigate("Confarmation", {
        name: route.params.name,
        newPrice: route.params.newPrice,
        oldPrice: route.params.oldPrice,
        rating: route.params.rating,
        adults: route.params.adults,
        children: route.params.children,
        room: route.params.room,
        availaibleRooms: route.params.availaibleRooms,
        selectedDate: route.params.selectedDate,
        firstName: firstName,
        lastName: lastName,
      });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
          First Name
        </Text>
        <TextInput
          onChangeText={(text) => setFirstName(text)}
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
          Last Name
        </Text>
        <TextInput
          onChangeText={(text) => setLastName(text)}
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
          Phone Number
        </Text>
        <TextInput
          onChangeText={(text) => setPhone(text)}
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
          flexDirection: "row",
          alignItems: "center",
          //   justifyContent: "space-between",
          position: "absolute",
          bottom: 10,
          paddingHorizontal: 10,
          backgroundColor: "#f5f5f5",
          paddingVertical: 10,
          flex: 1,
        }}
      >
        <View style={{ width: "100%" }}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 16,
                paddingRight: 10,
                color: "red",
                textDecorationLine: "line-through",
                fontWeight: "600",
              }}
            >
              {route?.params?.oldPrice * route?.params?.adults}
            </Text>
            <Text style={{ fontWeight: "600", fontSize: 16 }}>
              Rs. {route?.params?.newPrice * route?.params?.adults}
            </Text>
          </View>
          <Text>
            You have saved {route.params.oldPrice - route.params.newPrice}{" "}
            rupees
          </Text>
        </View>
        <Pressable
          onPress={finalStep}
          style={{
            backgroundColor: "#264c86",
            borderRadius: 15,
            position: "absolute",
            width: "30%",
            right: 0,
            bottom: 0,
            height: 48,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#f5f5f5",
              paddingHorizontal: 10,
              paddingVertical: 5,
              fontSize: 18,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Final Step
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserScreen;
