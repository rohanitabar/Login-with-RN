import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

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
    <View style={styles.shadowWrapper}>
      <TouchableOpacity style={styles.card}>
        <Image
          source={item.image}
          style={styles.cardImg}
          resizeMode="contain"
        />
        <Text style={styles.cardTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
  shadowWrapper: {
    // سایه اندروید
    elevation: 5,
    // سایه iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    borderRadius: 20, // حتما با کارت هماهنگ باشه
    marginRight: 15,
    marginBottom: 2,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 120,
    padding: 10,
    height: 150,
    alignItems: "center",
  },
  cardImg: {
    width: 100,
    height: 100,
  },
  cardTitle: {
    fontFamily: "Yekan",
    fontSize: 15,
    marginTop: 8,
    textAlign: "center",
  },
});
