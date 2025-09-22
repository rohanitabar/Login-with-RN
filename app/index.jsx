import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";

export default function App() {
  // Download img
  const bgi = require("../assets/bgi.jpg"); // backImg for sec 1
  const logo = require("../assets/Musicfy-logo.png"); // Logo img
  // Fonts
  const [fontLoaded] = useFonts({
    Yekan: require("../assets/fonts/Yekan.ttf"), // Persian font
    Poppins: require("../assets/fonts/Poppins/Poppins-Black.ttf"), // English font
  });
  if (!fontLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#0d54ecff" />

      {/* Section 1 */}
      <ImageBackground source={bgi} style={styles.sec1}>
        <View style={styles.overlay}>
          <Text style={styles.tsec1}>آسان‌تر موزیک گوش کنید</Text>
        </View>
      </ImageBackground>

      {/* Section 2 */}
      <View style={styles.sec2}>
        <View style={styles.logCon}>
          {/* Logo section */}
          <Image source={logo} style={styles.logo}></Image>
          <Text style={styles.title}>Musicfy</Text>
        </View>
        <Text style={styles.tsec2}>موزیک مورد علاقتو راحت پیدا کن</Text>
        <TouchableOpacity
          style={styles.loginBtn}
          activeOpacity={0.3}
          onPress={() => router.push("/login")}
        >
          {/* Login */}
          <Text style={styles.loginText}>ورود</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.1}
          style={styles.googleAcount}
          onPress={() => {
            router.push("/home");
          }}
        >
          {/* Login with google account */}
          <AntDesign name="google" size={24} color="black" />
          <Text style={styles.googleText}>ورود با اکانت گوگل</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 10 }}
          activeOpacity={0.3}
          onPress={() => router.push("/register")}
        >
          <Text style={styles.signup}>
            حساب نداری؟
            <Text style={styles.signupLink}> ثبت نام کن </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    direction: "rtl",
    backgroundColor: "#000",
  },
  // Section 1
  sec1: {
    flex: .75, 
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(32, 32, 32, 0.5)",
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
    height: 300,
    backgroundColor: "#fff",
    borderTopRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    padding: 10,
  },

  // Logo
  logCon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: 10,
  },
  // Title
  title: {
    color: "#000000",
    fontSize: 23,
    fontFamily: "Poppins",
  },
  // Text in section 2
  tsec2: {
    color: "#8f8f8f",
    fontSize: 18,
    fontFamily: "Yekan",
    marginTop: 5,
  },

  // Login btn
  loginBtn: {
    backgroundColor: "#0d54ecff",
    width: 130,
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Yekan",
  },
  // SignIn
  signup: {
    fontSize: 12,
    color: "#000",
    fontFamily: "Yekan",
  },

  signupLink: {
    color: "#0d54ec",
    fontSize: 14,
  },

  // Login with google
  googleAcount: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  googleText: {
    fontFamily: "Yekan",
    marginRight: 5,
    fontSize: 15,
  },
});
