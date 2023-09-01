import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import TitleBar from "../component/TitleBar";
import DatePicker from "react-native-date-ranges";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
import { data } from "../Booking_Data/data";

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [isModalVisible, setModalVisible] = useState(false);

  const [selectedDate, setSelectedDate] = useState();
  const [roomAndGuestVisible, setRoomAndGuestVisible] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(0);
  const [childrens, setChildren] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerTitleAlign: "center",

      headerStyle: {
        backgroundColor: "#264c86",
        height: 120,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      },
    });
  }, []);

  const deviceWidth = Dimensions.get("window").width;
  const roomIncrement = () => {
    setRooms(rooms + 1);
  };
  const roomDecrement = () => {
    if (rooms <= 1) {
      setRooms(1);
    } else {
      setRooms(rooms - 1);
    }
  };
  const adultIncrement = () => {
    setAdults(adults + 1);
  };
  const adultDecrement = () => {
    if (adults <= 0) {
      setAdults(0);
    } else {
      setAdults(adults - 1);
    }
  };
  const childrenIncrement = () => {
    setChildren(childrens + 1);
  };
  const childrenDecrement = () => {
    if (childrens <= 0) {
      setChildren(1);
    } else {
      setChildren(childrens - 1);
    }
  };

  const customButton = (onConfirm) => {
    return (
      <Button
        title="Submit"
        onPress={onConfirm}
        style={{
          flex: 1,

          height: "48",
          color: "black",
        }}
      />
    );
  };

  const searchPlaces = (place) => {
    if (!route?.params || !selectedDate) {
      Alert.alert("Invalid Detail", "Please enter valid information", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    if (route?.params && selectedDate) {
      navigation.navigate("Places", {
        room: rooms,
        children: childrens,
        adults: adults,
        selectedDate: selectedDate,
        place: place,
      });
    }
  };
  return (
    <>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <StatusBar style="light" />
        <View>
          <TitleBar />
        </View>

        <View
          style={{
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <View
            style={{
              width: "90%",
              padding: 15,
              backgroundColor: "#264c86",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              paddingVertical: 20,
              marginTop: 5,

              marginHorizontal: 10,
            }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("Search");
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                // flex: 1,
                borderWidth: 2,
                borderColor: "#f2f2f2",
                marginHorizontal: 10,
                marginBottom: 10,
                height: 48,
                borderRadius: 15,
              }}
            >
              <Feather
                name="search"
                size={24}
                color="#f2f2f2"
                style={{ paddingHorizontal: 5 }}
              />
              <TextInput
                placeholder={
                  route?.params
                    ? route?.params?.input
                    : "Enter your Destination"
                }
                style={{ flex: 1, fontSize: 16, color: "#f2f2f2" }}
                placeholderTextColor={"#f2f2f2"}
              />
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                // flex: 1,
                marginBottom: 10,
                borderWidth: 2,
                borderColor: "#f2f2f2",
                marginHorizontal: 10,
                height: 48,
                borderRadius: 15,
              }}
            >
              <Feather
                name="calendar"
                size={24}
                color="#f2f2f2"
                style={{ paddingHorizontal: 5 }}
              />
              <DatePicker
                style={{
                  height: 48,
                  borderRadius: 0,
                  borderWidth: 0,
                  flex: 1,
                  color: "#f2f2f2",
                }}
                customStyle={{
                  placeholderText: {
                    fontSize: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    textAlign: "left",
                    marginRight: "auto",
                    placeholderTextColor: "#f2f2f2",
                  },
                  placeholderTextColor: "#f2f2f2",

                  headerStyle: { backgroundColor: "#264c86" },
                  contentText: {
                    fontSize: 12,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "auto",
                    color: "#f2f2f2",
                  },
                }}
                selectedBgColor={"#264c86"}
                allowFontScaling={false}
                // customButton={(onConfirm) => {
                //   customButton(onConfirm);
                // }}
                onConfirm={(startDate, endDate) =>
                  setSelectedDate(startDate, endDate)
                }
                placeholder={"Select Date"}
                mode={"range"}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                setModalVisible(!isModalVisible);
              }}
              style={{
                flexDirection: "row",
                alignItems: "center",
                // flex: 1,
                borderWidth: 2,
                borderColor: "#f2f2f2",
                marginHorizontal: 10,
                height: 48,
                marginBottom: 10,
                borderRadius: 15,
              }}
            >
              <Ionicons
                name="person-outline"
                size={24}
                color="#f2f2f2"
                style={{ paddingHorizontal: 5 }}
              />
              <TextInput
                placeholder={
                  isModalVisible
                    ? "Select Rooms and Guests"
                    : `${rooms} room    ${adults} adults  ${childrens} children`
                }
                style={{ flex: 1, color: "grey", fontSize: 18 }}
                placeholderTextColor={"#f2f2f2"}
                caretHidden={true}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                searchPlaces(route?.params?.input);
              }}
              style={{
                backgroundColor: "#f2f2f2",
                height: 48,
                alignItems: "center",
                justifyContent: "center",
                width: "95%",
                borderRadius: 15,
              }}
            >
              <Text style={{ color: "black", fontSize: 20, fontWeight: "600" }}>
                Search
              </Text>
            </Pressable>
          </View>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            paddingHorizontal: 10,
            marginVertical: 20,
            color: "#264c86",
          }}
        >
          Travel More Spend Less
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 5,
            alignSelf: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#264c86",
              width: 200,
              height: 150,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              marginRight: 5,
              elevation: 5,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
              Genius
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "white",
                textAlign: "center",
                paddingTop: 5,
                paddingHorizontal: 5,
              }}
            >
              You are at Genuis level 1 in our loyality program.
            </Text>
          </View>
          <View
            style={{
              //   backgroundColor: "#f2f2f2",
              width: 200,
              height: 150,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              borderColor: "#264c86",
              borderWidth: 2,
              flex: 1,
              marginBottom: 10,
              elevation: 2,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", color: "black" }}>
              15% Discounts
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                color: "grey",
                textAlign: "center",
                paddingTop: 5,
                paddingHorizontal: 5,
              }}
            >
              Complete 5 stays to unlock Genius level 2.
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <Text style={{ fontSize: 35, fontWeight: "bold", color: "#264c86" }}>
            Booking.<Text style={{ color: "#69d2e7" }}>Com</Text>
          </Text>
        </View>
      </View>
      <Modal
        isVisible={isModalVisible}
        backdropOpacity={0.5}
        avoidKeyboard={true}
        onBackButtonPress={() => {
          setModalVisible(false);
        }}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        deviceWidth={deviceWidth}
      >
        <View
          style={{
            position: "absolute",
            // width: deviceWidth,
            flex: 1,
            // justifyContent: "center",
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            backgroundColor: "white",
            height: 300,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              textAlign: "center",
              paddingVertical: 10,
            }}
          >
            Rooms & Guests
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
              backgroundColor: "#e0e0e0",
              marginHorizontal: 10,
              borderRadius: 15,
              marginVertical: 5,
              height: 48,
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "400" }}>Rooms</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={roomDecrement}>
                <AntDesign name="minuscircleo" size={20} color="black" />
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 18,
                  paddingHorizontal: 15,
                  fontWeight: "500",
                }}
              >
                {rooms}
              </Text>
              <TouchableOpacity onPress={roomIncrement}>
                <AntDesign name="pluscircleo" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
              backgroundColor: "#e0e0e0",
              marginHorizontal: 10,
              borderRadius: 15,
              marginVertical: 5,
              height: 48,
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "400" }}>Adults</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={adultDecrement}>
                <AntDesign name="minuscircleo" size={20} color="black" />
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 18,
                  paddingHorizontal: 15,
                  fontWeight: "500",
                }}
              >
                {adults}
              </Text>
              <TouchableOpacity onPress={adultIncrement}>
                <AntDesign name="pluscircleo" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
              backgroundColor: "#e0e0e0",
              marginHorizontal: 10,
              borderRadius: 15,
              marginVertical: 5,
              height: 48,
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "400" }}>Childrens</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={childrenDecrement}>
                <AntDesign name="minuscircleo" size={20} color="black" />
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 18,
                  paddingHorizontal: 15,
                  fontWeight: "500",
                }}
              >
                {childrens}
              </Text>
              <TouchableOpacity onPress={childrenIncrement}>
                <AntDesign name="pluscircleo" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <Pressable
            style={{
              alignItems: "center",
              justifyContent: "center",

              paddingHorizontal: 20,
              alignItems: "center",
              backgroundColor: "#264c86",
              marginHorizontal: 10,
              borderRadius: 15,
              marginVertical: 5,
              height: 48,
            }}
            onPress={() => setModalVisible(false)}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#f2f2f2",
              }}
            >
              OK
            </Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
