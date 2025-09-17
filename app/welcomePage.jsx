import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

const bgi = require("../assets/bgi.jpg");
const logo = require("../assets/Musicfy-logo.png");

const WellcomePage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgi} style={styles.sec1}>
        <View style={styles.overlay}>
          <Text style={styles.tsec1}>{`آسان‌تر موزیک گوش کنید`}</Text>
        </View>
      </ImageBackground>

      <View style={styles.sec2}>
        {/* لوگو و عنوان */}
        <View style={styles.logoRow}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>Musicfy</Text>
        </View>

        <Text style={styles.tsec2}>موزیک مورد علاقتو راحت پیدا کن</Text>

        {/* دکمه ورود */}
        <TouchableOpacity style={styles.loginbtn} activeOpacity={0.6}>
          <Text style={styles.loginText}>ورود</Text>
        </TouchableOpacity>

        {/* دکمه ثبت نام */}
        <TouchableOpacity style={styles.signupBtn} activeOpacity={0.6}>
          <Text style={styles.signup}>
            حساب نداری؟ <Text style={styles.signupLink}>ثبت نام کن</Text>
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
    backgroundColor: "#fff",
  },
  sec1: {
    flex: 3,
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
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

  sec2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 50,
    width: "100%",
    paddingVertical: 20,
  },

  logoRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  logo: {
    width: 70,
    height: 70,
    marginLeft: 10,
    borderRadius: 10,
  },
  title: {
    color: "#000",
    fontSize: 23,
    fontFamily: "Poppins",
  },

  tsec2: {
    color: "#8f8f8f",
    fontSize: 18,
    fontFamily: "Yekan",
    marginBottom: 15,
  },

  loginbtn: {
    backgroundColor: "#0d54ec",
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

  signupBtn: {
    marginTop: 10,
  },
  signup: {
    fontSize: 12,
    color: "#000",
    fontFamily: "Yekan",
  },
  signupLink: {
    color: "#0d54ec",
    fontSize: 14,
    fontFamily: "Yekan",
  },
});

export default WellcomePage;
