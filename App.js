import React, { useState, useEffect } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import Auth from "./components/Auth";
import Gauges from "./components/Gauges";
import Charts from "./components/Charts";
import { auth, db } from "./components/firebaseConfig";
import styles from "./components/styles"; // Importing styles from styles.js

export default function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({ temperature: [], humidity: [] });

  useEffect(() => {
    console.log("App mounted");
    if (user) {
      const dataRef = db.ref("sensorData");
      dataRef.on("value", (snapshot) => {
        const data = snapshot.val();
        const temperature = [];
        const humidity = [];
        for (let timestamp in data) {
          const temp = data[timestamp].temperature;
          const hum = data[timestamp].humidity;
          if (isFinite(temp) && temp !== null) {
            temperature.push(temp);
          }
          if (isFinite(hum) && hum !== null) {
            humidity.push(hum);
          }
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
    <ScrollView style={styles.scrollView}>
      <View style={styles.topnav}>
        <Text style={styles.title}>GWENOD ENERGETIQUE S.A.R.L</Text>
      </View>
      {user ? (
        <>
          <View style={styles.authenticationBar}>
            <Text style={styles.userText}>
              Utilisateur connecté: {user.email}
            </Text>
            <Button title="Déconnexion" onPress={handleLogout} />
          </View>
          <Gauges
            temperature={data.temperature[0] || 0} // Valeur par défaut de 0 si null ou undefined
            humidity={data.humidity[0] || 0} // Valeur par défaut de 0 si null ou undefined
          />
          <Charts data={data} />
        </>
      ) : (
        <Auth onLogin={setUser} />
      )}
    </ScrollView>
  );
}
