import { Text, View, StyleSheet, TouchableOpacity, Image,TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
const Header = () => {
  const logo = require("../../assets/Musicfy-logo.png"); // Logo img

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerCon}>
        <View style={styles.header}>
          {/* Logo + Title */}
          <View style={styles.logoCon}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>Musicfy</Text>
          </View>

          {/* Icons */}
          <View style={styles.iconCon}>
            <TouchableOpacity activeOpacity={0.6}>
              <FontAwesome
                name="bell-o"
                size={22}
                color="white"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <FontAwesome
                name="user-o"
                size={22}
                color="white"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="جستجو..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity>
          <Ionicons name="search" size={20} color="#888" style={styles.iconSearch} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    direction: "rtl",
  },
  headerCon: {
    width: "100%",
  },
  header: {
    backgroundColor: "#0d54ec",
    width: "100%",
    height: 70,
    borderBottomRightRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,

    // shadow iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // shadow Android
    elevation: 6,
  },
  logoCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins",
    marginRight: 10,
  },
  iconCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginHorizontal:10,
    marginTop:10,
    height: 45,

    // shadow iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    // shadow Android
    elevation: 4,
  },
  iconSearch: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Yekan",
    color: "#000",
  },
});
