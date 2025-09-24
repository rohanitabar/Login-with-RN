import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Main from "./main";

const Home = () => {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    direction:'rtl'
  },
});
