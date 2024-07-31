import React from "react";
import { View, Text } from "react-native";
import { Svg, Circle, G, Text as SVGText } from "react-native-svg";
import styles from "./styles";

const Gauge = ({ value, max, label }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / max) * circumference;

  return (
    <View style={styles.card}>
      <Svg width="120" height="120">
        <G rotation="-90" originX="60" originY="60">
          <Circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#eee"
            strokeWidth="10"
            fill="none"
          />
          <Circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#3b5998"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            fill="none"
          />
          <SVGText
            x="60"
            y="60"
            textAnchor="middle"
            dy=".3em"
            fontSize="18"
            fill="#333"
          >
            {value}
          </SVGText>
        </G>
      </Svg>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const Gauges = ({ temperature, humidity }) => {
  return (
    <View style={styles.container}>
      <Gauge value={temperature} max={100} label="Temperature" />
      <Gauge value={humidity} max={100} label="Humidity" />
    </View>
  );
};

export default Gauges;
