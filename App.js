import React from "react";
import { View, StyleSheet } from "react-native";
import CurrentWeather from "./src/screens/currentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigatorContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigatorContainer>
      <View style={styles.container}>
        <CurrentWeather />
        {/* <UpcomingWeather/> */}
        {/* <City/> */}
      </View>
    </NavigatorContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
