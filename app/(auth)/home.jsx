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

const Home = ()=>{
    return(
        <SafeAreaView>
            <Text>This is home page</Text>
        </SafeAreaView>
    )
}

export default Home;