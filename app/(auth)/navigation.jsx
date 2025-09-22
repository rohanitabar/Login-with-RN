import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

const Navigation = () => {
  const [active, setActive] = useState("home");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backCon}>
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

          {/* Music Plus */}
          <TouchableOpacity
            style={styles.navBtn}
            activeOpacity={0.7}
            onPress={() => setActive("plus")}
          >
            <MaterialCommunityIcons
              name="star-four-points-outline"
              size={24}
              color={active === "plus" ? "#0d54ec" : "#555"}
            />
            <Text style={[styles.name, active === "plus" && styles.activeText]}>
              موزیک پلاس
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
              style={[
                styles.name,
                active === "categories" && styles.activeText,
              ]}
            >
              دسته ها
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
            <Text
              style={[styles.name, active === "history" && styles.activeText]}
            >
              شنیده شده
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  backCon: {
    alignItems: "center",
    padding: 10,
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
    fontSize: 10,
    marginTop: 3,
    color: "#555",
  },
  activeText: {
    color: "#0d54ec",
    fontSize: 14,
    textTransform:.5
  },
});
