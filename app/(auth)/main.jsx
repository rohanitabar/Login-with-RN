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
import Category from "./category";

const Main = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <Category/>
        </SafeAreaView>
    )
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    direction: "rtl",
  },
});