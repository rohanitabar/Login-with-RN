import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const BackBtn = () => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.3}
        style={styles.backBtn}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back-sharp" size={26} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  backBtn: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 8,
    borderRadius: 50,
    marginRight: 10,
  },
});