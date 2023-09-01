import { View, Text, Pressable } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
const MapScreen = () => {
  const route = useRoute();
  const mapview = useRef(null);
  const coordinates = [];
  const details = route.params.searchResult.map((item) =>
    item.properties?.map((prop) => {
      coordinates.push({
        latitude: Number(prop.latitude),
        longitude: Number(prop.longitude),
      });
    })
  );
  useEffect(() => {
    mapview.current.fitToCoordinates(coordinates, {
      edgePadding: {
        top: 190,
        left: 190,
        bottom: 190,
        right: 190,
      },
    });
  });

  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      ref={mapview}
      style={{ width: "100%", height: "100%" }}
    >
      {route?.params?.searchResult.map((item) =>
        item.properties.map((property) => (
          <Marker
            key={property.id}
            title={property.name}
            coordinate={{
              latitude: Number(property.latitude),
              longitude: Number(property.longitude),
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#264c86",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>Rs {property.newPrice}</Text>
            </Pressable>
          </Marker>
        ))
      )}
    </MapView>
  );
};

export default MapScreen;
