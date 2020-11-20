import React, { useState, useEffect } from "react";
import { View } from "react-native";
import {
  getCurrentPositionAsync,
  requestPermissionsAsync,
} from "expo-location";
import MapView, { Marker } from "react-native-maps";

import styles from "../../../assets/Css";
import api from "../../../services/api";

export default function Maps({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [data, setData] = useState([]);

  const latitude = -25.5169;
  const longitude = -54.5704216;
  const raio = 50; //km

  useEffect(() => {
    const getPosition = async () => {
      let { status } = await requestPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }
      let location = await getCurrentPositionAsync({});
      setLocation(location.coords);

      console.log(location);
    };
    getPosition();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get(
        `rest/estabelecimentos/latitude/${latitude}/longitude/${longitude}/raio/${raio}`
      );
      setData(data);
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: -25.5169,
          longitude: -54.5704216,
          latitudeDelta: 0.0952,
          longitudeDelta: 0.0951,
        }}
        showsUserLocation
      >
        {data.map((place) => {
          return (
            <Marker
              coordinate={{ latitude: place.lat, longitude: place.long }}
              title={place.nomeFantasia}
              description={place.turnoAtendimento}
              icon={{
                uri:
                  "https://img.icons8.com/fluent-systems-filled/50/000000/hospital-3.png",
              }}
            />
          );
        })}
      </MapView>
    </View>
  );
}
