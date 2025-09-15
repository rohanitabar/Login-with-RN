import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

const WellcomePage = () => {
  const bgi = require("../assets/bgi.jpg");
  const [loading, error] = useFonts({
    Yekan: require("../assets/fonts//Yekan.ttf"),
    Poppins: require("../assets/fonts/Poppins/Poppins-Black.ttf"),
  });
  return (
    <View style={styles.container}>
      <ImageBackground source={bgi} style={styles.sec1}>
        <View style={styles.overlay}>
          <Text style={styles.tsec1}>{`آسان‌تر موزیک گوش کنید`}</Text>
        </View>
      </ImageBackground>
      <View style={styles.sec2}>
        <Text style={styles.title}>Musicfy</Text>
        <Text style={styles.tsec2}>موزیک مورد علاقتو راحت پیدا کن</Text>
        <TouchableOpacity style={styles.loginbtn} activeOpacity={.3}>
          <Text style={styles.loginText}>ورود</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 10 }} activeOpacity={.3}>
          <Text style={styles.signup}>
            حساب نداری؟
            <Text style={styles.signupLink}> ثبت نام کن </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    direction: "rtl",
  },
  sec1: {
    flex: 3,
    width: "100%",
    height:700,
  },
  tsec1: {
    color: "#e8e8e8",
    fontSize: 30,
    fontFamily: "Yekan",
  },
  sec2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffffff",
    width: "100%",
    height: 220,
    borderTopRightRadius: 50,
    zIndex: 1,
  },
   title: {
    color: "#000000",
    fontSize: 23,
    fontFamily: "Poppins",
  },
  tsec2: {
    color: "#8f8f8fff",
    fontSize: 18,
    fontFamily: "Yekan",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: "rgba(32, 32, 32, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loginbtn: {
    backgroundColor: "#0d54ecff",
    width:130,
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
  signup: {
    fontSize: 12,
    color: "#000",
    fontFamily: "Yekan",
  },

  signupLink: {
    color: "#0d54ec", 
    fontSize:14,
  },
});

export default WellcomePage;
