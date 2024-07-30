// App.js
import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import Auth from "./components/Auth";
import Gauges from "./components/Gauges";
import Charts from "./components/Charts";
import { auth, db } from "./components/firebaseConfig";
import styles from "./components/styles";

export default function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({ temperature: [], humidity: [] });

  useEffect(() => {
    if (user) {
      const dataRef = db.ref("sensorData");
      dataRef.on("value", (snapshot) => {
        const data = snapshot.val();
        const temperature = [];
        const humidity = [];
        for (let timestamp in data) {
          temperature.push(data[timestamp].temperature);
          humidity.push(data[timestamp].humidity);
        }
        setData({ temperature, humidity });
      });
    }
  }, [user]);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  return (
    <ScrollView>
      <View style={styles.topnav}>
        <Text>GWENOD ENERGETIQUE S.A.R.L</Text>
      </View>
      {user ? (
        <>
          <View style={styles.authenticationBar}>
            <Text>Utilisateur connecté: {user.email}</Text>
            <Button title="Déconnexion" onPress={handleLogout} />
          </View>
          <Gauges
            temperature={data.temperature[0]}
            humidity={data.humidity[0]}
          />
          <Charts data={data} />
        </>
      ) : (
        <Auth onLogin={setUser} />
      )}
    </ScrollView>
  );
}
