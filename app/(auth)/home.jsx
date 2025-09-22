import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useState } from "react";
import Navigation from "./navigation";
import Header from "./header";
import Main from "./main";

const Home = ()=>{
    return(
        <View style={styles.container}>
            <Header/>
            <Main/>
            <Navigation/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    direction: "rtl",
    backgroundColor:'#fff'
  },
});