import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Yekan: require("../assets/fonts/Yekan.ttf"),
    Poppins: require("../assets/fonts/Poppins/Poppins-Black.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>در حال بارگذاری فونت‌ها...</Text>;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
