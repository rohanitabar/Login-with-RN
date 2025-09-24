import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import Singer from "./singers.json";

const ArtistCategories = () => {
  return (
    <View style={styles.container}>
      {Singer.map((cat) => (
        <View key={cat.id} style={styles.category}>
          <Text style={styles.genre}>{cat.genre}</Text>
          <FlatList
            horizontal
            data={cat.artists}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ))}
    </View>
  );
};

export default ArtistCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
    width: "100%",
  },
  category: {
    marginBottom: 25,
  },
  genre: {
    fontSize: 20,
    marginBottom: 10,
    color: "#222",
    fontFamily: "Yekan",
  },
  card: {
    marginRight: 15,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  name: {
    fontSize: 14,
    textAlign: "center",
    color: "#333",
    fontFamily: "Yekan",
  },
});
