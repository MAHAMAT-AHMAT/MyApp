// components/Charts.js
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const Charts = ({ data }) => {
  const temperatureData = data.temperature.filter((value) => isFinite(value));
  const humidityData = data.humidity.filter((value) => isFinite(value));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temperature and Humidity Data</Text>
      <LineChart
        data={{
          labels: temperatureData.map((_, index) => index.toString()),
          datasets: [
            {
              data: temperatureData.length ? temperatureData : [0], // Valeur par défaut de 0 si données vides
              color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
              strokeWidth: 2,
            },
            {
              data: humidityData.length ? humidityData : [0], // Valeur par défaut de 0 si données vides
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
              strokeWidth: 2,
            },
          ],
        }}
        width={screenWidth - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#fff",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Charts;
