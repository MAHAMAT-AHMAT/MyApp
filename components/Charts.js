// components/Charts.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HighchartsReactNative from "highcharts-react-native";

const Charts = ({ data }) => {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Sensor Data",
    },
    series: [
      {
        name: "Temperature",
        data: data.temperature,
      },
      {
        name: "Humidity",
        data: data.humidity,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text>Charts</Text>
      <HighchartsReactNative
        styles={styles.chart}
        options={options}
        modules={["highcharts-more"]}
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
  chart: {
    height: 300,
  },
});

export default Charts;
