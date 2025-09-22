import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackBtn from "../../components/backBtn";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import { ImageBackground } from "react-native";
import { BlurView } from "expo-blur";

const RegisterPage = () => {
  // Download img
  const bgi = require("../bgi2.jpg");
  // States
  const [focusField, setFocusField] = useState(null);
  const [isChecked, setChecked] = useState();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerWraper}>
        <BackBtn />
        <Text style={styles.pageTitle}>حسابت رو بساز</Text>
      </View>
      <ImageBackground source={bgi} style={styles.sec1}>
        <View style={styles.overlay}></View>
      </ImageBackground>
      <View style={styles.sec2}>
        {/* Signup form */}
        <BlurView style={styles.signupForm}>
          {/* Name */}
          <TextInput
            style={[styles.input, focusField === "name" && styles.inputFocused]}
            placeholder="نام و نام خانوادگی"
            placeholderTextColor={"#919191ff"}
            onFocus={() => setFocusField("name")}
            onBlur={() => setFocusField(null)}
          />

          {/* Email */}
          <TextInput
            style={[
              styles.input,
              focusField === "email" && styles.inputFocused,
            ]}
            placeholder="ایمیل"
            placeholderTextColor={"#919191ff"}
            onFocus={() => setFocusField("email")}
            onBlur={() => setFocusField(null)}
            keyboardType="email-address"
            textContentType="emailAddress"
          />

          {/* Password */}
          <TextInput
            style={[
              styles.input,
              focusField === "password" && styles.inputFocused,
            ]}
            placeholder="رمز عبور"
            placeholderTextColor={"#919191ff"}
            secureTextEntry
            onFocus={() => setFocusField("password")}
            onBlur={() => setFocusField(null)}
          />

          {/* Confirm Password */}
          <TextInput
            style={[
              styles.input,
              focusField === "confirm" && styles.inputFocused,
            ]}
            placeholder="تکرار رمز عبور"
            placeholderTextColor={"#919191ff"}
            secureTextEntry
            onFocus={() => setFocusField("confirm")}
            onBlur={() => setFocusField(null)}
          />
          <View style={styles.check}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#0d54ec" : undefined}
            />
            <Text style={styles.rules}> قوانین را مطالعه کرده و میپذیرم</Text>
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.signupBtn}
              activeOpacity={0.3}
              onPress={() => {
                if (isChecked) {
                  router.push("/home");
                } else {
                  ToastAndroid.show("اول قوانین رو بپذیر", ToastAndroid.SHORT);
                }
              }}
            >
              <Text style={styles.signupText}>ثبت نام</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // Section
  sec1: {
    flex: .6,
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(31, 31, 31, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  tsec1: {
    color: "#e8e8e8",
    fontSize: 30,
    fontFamily: "Yekan",
    textAlign: "center",
  },
  // Section 2
  sec2: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    zIndex: 1,
    padding: 10,
    height:370
  },
  // Header
  headerWraper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0d54ec",
    borderBottomLeftRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    zIndex: 1,
    width: "100%",
    position: "absolute",
    marginTop: 25,
  },
  pageTitle: {
    fontFamily: "Yekan",
    fontSize: 24,
    color: "#fff",
  },

  // Signup form
  signupForm: {
    flex: 1,
    marginTop: 20,
  },

  // Input
  input: {
    fontFamily: "Yekan",
    borderRadius: 2,
    borderBottomWidth: 2,
    borderColor: "#1a1a1a",
    textAlign: "center",
    width: "100%",
    marginBottom:5,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: "#0d54ec",
  },

  // Button
  signupBtn: {
    backgroundColor: "#0d54ecff",
    width: 130,
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Yekan",
  },
  // Read rules
  check: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    direction: "rtl",
    marginTop: 15,
  },
  rules: {
    fontFamily: "Yekan",
    fontSize: 15,
    marginRight: 5,
  },
});
