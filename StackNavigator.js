import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SavedScreen from "./screens/SavedScreen";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import PlaceScreen from "./screens/PlaceScreen";
import MapScreen from "./screens/MapScreen";
import PropertyInfoScreen from "./screens/PropertyInfoScreen";
import RoomsScreen from "./screens/RoomsScreen";
import UserScreen from "./screens/UserScreen";
import ConfarmationScreen from "./screens/ConfarmationScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { FIREBASE_AUTH } from "./Firebase_Data/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import QrCodeScreen from "./screens/QrCodeScreen";

// import auth from '@react-native-firebase/auth';

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const [user, setUser] = useState();
  function BottomTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarStyle: { height: 50, paddingVertical: 5 },
            tabBarLabelStyle: { paddingBottom: 5 },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#264c86" />
              ) : (
                <Feather name="home" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            headerShown: false,
            tabBarLabelStyle: { paddingBottom: 5 },
            tabBarStyle: { height: 50, paddingVertical: 5 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="#264c86" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            tabBarLabel: "Booking",
            headerShown: false,
            tabBarStyle: { height: 50, paddingVertical: 5 },
            tabBarLabelStyle: { paddingBottom: 5 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="ios-notifications" size={24} color="#264c86" />
              ) : (
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarStyle: { height: 50, paddingVertical: 5 },
            tabBarLabelStyle: { paddingBottom: 5 },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="ios-person-sharp" size={24} color="#264c86" />
              ) : (
                <Ionicons name="md-person-outline" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      {user ? (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={BottomTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Places"
              component={PlaceScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Map"
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Info" component={PropertyInfoScreen} />
            <Stack.Screen name="Rooms" component={RoomsScreen} />
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="Confarmation" component={ConfarmationScreen} />
            <Stack.Screen
              name="QrCode"
              component={QrCodeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default StackNavigator;
