import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
const QrCodeScreen = () => {
  const date = new Date();
  console.log(date);
  const route = useRoute();
  console.log(route.params);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/hotel.png")}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
            <Text style={{ fontWeight: 600, fontSize: 22 }}>
              {route?.params.booking.name}
            </Text>
          </View>
          <View>
            <View
              style={{
                backgroundColor: "#e8f5e9",
                paddingHorizontal: 10,
                paddingVertical: 3,
                borderRadius: 15,
              }}
            >
              <Text style={{ color: "#66bb6a", fontWeight: "bold" }}>
                Booked
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
          <FontAwesome
            name="user"
            size={20}
            color="black"
            style={{ paddingRight: 20, color: "grey" }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "black",
              paddingRight: 5,
            }}
          >
            {route.params.booking.firstName}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 700, color: "black" }}>
            {route.params.booking.lastName}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ paddingRight: 30 }}>
            <Text style={{ fontSize: 16, fontWeight: 500, color: "grey" }}>
              check-in
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 600, color: "black" }}>
              {route?.params?.booking?.selectedDate?.startDate}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: 500, color: "grey" }}>
              check-out
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 600, color: "black" }}>
              {route?.params?.booking?.selectedDate?.endDate}
            </Text>
          </View>
        </View>
        <Text style={{ marginTop: 40, marginBottom: 15, color: "grey" }}>
          Please show this QR code to collect your Keys for Room
        </Text>
        <Image
          source={require("../assets/qrcode.jpg")}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
        <View style={{ color: "blue", width: 23, height: 12, flex: 1 }} />
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Ionicons
            name="md-location-sharp"
            size={20}
            color="grey"
            style={{ paddingRight: 20 }}
          />

          <View>
            <Text
              style={{
                fontSize: 16,
                color: "grey",
                fontWeight: 500,
                marginBottom: 8,
              }}
            >
              Location
            </Text>
            <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
              Banglore
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <FontAwesome5
            name="bed"
            size={20}
            color="grey"
            style={{ paddingRight: 20 }}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "grey",
                fontWeight: 500,
                marginBottom: 8,
              }}
            >
              Room and Guest
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                {`${route.params.booking.room} room ${route.params.booking.adults} adult`}
              </Text>
              {route.params.booking.children && (
                <Text
                  style={{
                    fontSize: 18,
                    color: "black",
                    fontWeight: 700,
                    paddingLeft: 5,
                  }}
                >
                  {route.params.booking.children} children
                </Text>
              )}
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <MaterialCommunityIcons
            name="web-cancel"
            size={24}
            color="black"
            style={{ paddingRight: 20 }}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "grey",
                fontWeight: 500,
                marginBottom: 8,
              }}
            >
              Cancellation
            </Text>
            <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
              Refundable
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <MaterialIcons
            name="payment"
            size={24}
            color="black"
            style={{ paddingRight: 20 }}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "grey",
                fontWeight: 500,
                marginBottom: 8,
              }}
            >
              Payment
            </Text>
            <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
              Pay at the property
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 60,
          }}
        >
          <Text style={{ color: "grey", marginTop: 30 }}>
            For any queries please reach out to
            <Text style={{ color: "#42a5f5" }}> help@booking.com</Text>
          </Text>
        </View>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default QrCodeScreen;
