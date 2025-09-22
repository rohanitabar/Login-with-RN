import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  { id: "1", title: "سنتی", image: require("../violin.png") },
  { id: "5", title: "محلی", image: require("../music-note.png") },
  { id: "2", title: "پاپ", image: require("../mic.png") },
  { id: "3", title: "رپ", image: require("../rap.png") },
  { id: "4", title: "ریمیکس", image: require("../dj.jpg") },
];

const Category = () => {
  // render each card
  const renderCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.cardImg} resizeMode="contain" />
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* FlatList in horizontal mode */}
      <FlatList
        data={categories}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        horizontal // make list horizontal
        showsHorizontalScrollIndicator={false} // hide scroll bar
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fffdfdff",
    borderRadius: 20,
    width: 120,
    padding: 10,
    height:150,
    alignItems: "center",
    marginRight: 15, // space between cards
    elevation: 4, // shadow (Android)
    shadowColor: "#000", // shadow (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardImg: {
    width: 100,
    height: 100,
  },
  cardTitle: {
    fontFamily: "Yekan",
    fontSize: 15,
    marginTop: 8,
  },
});
