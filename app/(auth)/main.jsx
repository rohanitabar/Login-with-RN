import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Platform,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Navigation from "./navigation";
import Header from "./header";
import Category from "./category";
import Favorite from "./favorite";
import ArtistCategories from "./bestSingers";

const Main = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* StatusBar */}
      <StatusBar barStyle="light-content" backgroundColor="#0d54ec" />

      <View style={styles.container}>
        {/* Header */}
        <Header />

        {/* Scrollable content */}
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: insets.bottom + 60 }, // فاصله از Navigation
          ]}
          showsVerticalScrollIndicator={false}
        >
          <Category />
          <Favorite />
          <ArtistCategories />
        </ScrollView>

        {/* Fixed Navigation */}
        <Navigation />
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width:"100%"
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 10,
  },
});
