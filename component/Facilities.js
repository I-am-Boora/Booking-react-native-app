import { View, Text } from "react-native";
import React from "react";
import { services } from "../Booking_Data/data";

const Facilities = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          marginTop: 10,
          marginLeft: 10,
        }}
      >
        Most Popular Facilities
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          marginTop: 10,
          marginLeft: 10,
          justifyContent: "center",
        }}
      >
        {services.map((service) => (
          <View
            style={{
              backgroundColor: "#264c86",
              paddingHorizontal: 10,
              paddingVertical: 3,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#f2f2f2", fontSize: 15 }}>
              {service.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Facilities;
