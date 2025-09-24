import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState("home");

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        {/* Home */}
        <TouchableOpacity
          style={styles.navBtn}
          activeOpacity={0.7}
          onPress={() => setActive("home")}
        >
          <Octicons
            name="home"
            size={24}
            color={active === "home" ? "#0d54ec" : "#555"}
          />
          <Text style={[styles.name, active === "home" && styles.activeText]}>
            خانه
          </Text>
        </TouchableOpacity>

        {/* Favorites */}
        <TouchableOpacity
          style={styles.navBtn}
          activeOpacity={0.7}
          onPress={() => setActive("favorites")}
        >
          <FontAwesome5
            name="heart"
            size={24}
            color={active === "favorites" ? "#0d54ec" : "#555"}
          />
          <Text
            style={[styles.name, active === "favorites" && styles.activeText]}
          >
            مورد پسند
          </Text>
        </TouchableOpacity>

        {/* Categories */}
        <TouchableOpacity
          style={styles.navBtn}
          activeOpacity={0.7}
          onPress={() => setActive("categories")}
        >
          <MaterialCommunityIcons
            name="folder-music-outline"
            size={24}
            color={active === "categories" ? "#0d54ec" : "#555"}
          />
          <Text
            style={[styles.name, active === "categories" && styles.activeText]}
          >
            دسته‌ها
          </Text>
        </TouchableOpacity>

        {/* History */}
        <TouchableOpacity
          style={styles.navBtn}
          activeOpacity={0.7}
          onPress={() => setActive("history")}
        >
          <Ionicons
            name="musical-notes-outline"
            size={24}
            color={active === "history" ? "#0d54ec" : "#555"}
          />
          <Text style={[styles.name, active === "history" && styles.activeText]}>
            شنیده‌شده
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  back: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    width: "95%",
    height: 70,

    // shadow iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    // shadow Android
    elevation: 6,
  },
  navBtn: {
    flex: 1,
    alignItems: "center",
  },
  name: {
    fontFamily: "Yekan",
    fontSize: 11,
    marginTop: 3,
    color: "#555",
  },
  activeText: {
    color: "#0d54ec",
    fontSize: 15,
  },
});
