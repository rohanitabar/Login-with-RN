import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Favorite = () => {
  const tracks = [
    {
      id: "1",
      title: "فوبیا",
      artist: "آرمین زارعی",
      cover: {
        uri: "https://birseda.net/wp-content/uploads/2021/07/Amir-Enghelab-Fobia.jpg",
      },
      source: "sevilmusics.com",
      plays: 0,
    },
    {
      id: "2",
      title: "تو قول دادیا",
      artist: "معین زد",
      cover: {
        uri: "https://systemmusic.ir/wp-content/uploads/2023/09/moein-z-zibaye-zeshte-man.jpg",
      },
      source: "rozmusic.com",
      plays: 0,
    },
    {
      id: "3",
      title: "ستاره میشی",
      artist: "بهنام بانی",
      cover: {
        uri: "https://rozmusic.com/wp-content/uploads/2025/05/Behnam-Bani-Setareh-Mishi.jpg",
      },
      source: "rozmusic.com",
      plays: 0,
    },
    {
      id: "4",
      title: "یا هیچکی یا تو",
      artist: "برزین",
      cover: {
        uri: "https://rozmusic.com/wp-content/uploads/2025/09/Barzin-Ya-Hichki-Ya-To.jpg",
      },
      source: "upmusics.com",
      plays: 0,
    },
    {
      id: "5",
      title: "پای چی موندم ",
      artist: "حسین عتیقی",
      cover: {
        uri: "https://rozmusic.com/wp-content/uploads/2025/09/Hosein-Atighi-Paye-Chi-Mondam-New-Version.jpg",
      },
      source: "rozmusic.com",
      plays: 0,
    },
    {
      id: "6",
      title: "علی حبک",
      artist: "صادق پورمنصوری",
      cover: {
        uri: "https://rozmusic.com/wp-content/uploads/2025/09/Sadegh-Poormansori-Ala-Hoba.jpg",
      },
      source: "rozmusic.com",
      plays: 0,
    },
    {
      id: "7",
      title: "نرو",
      artist: "نیماه",
      cover: {
        uri: "https://sakhamusic.ir/wp-content/uploads/2016/11/Nima-Sayadi-Called-Naro.jpg",
      },
      source: "rozmusic.com",
      plays: 0,
    },
    {
      id: "8",
      title: "گیسو کمند",
      artist: "سینا درخشنده",
      cover: {
        uri: "https://static.navaak.com/images/albums/653a24d85e2ae49322291812/653a24d85e2ae49322291812.jpg",
      },
      source: "navazmusics.com",
      plays: 0,
    },
    {
      id: "9",
      title: "جوونیم رفت",
      artist: "حمید عسکری",
      cover: {
        uri: "https://taranehfa.ir/wp-content/uploads/2024/09/Mojtaba-Abedi-Javooniam-Raft.jpg",
      },
      source: "navazmusics.com",
      plays: 0,
    },
    {
      id: "10",
      title: "بی خبر",
      artist: "رضا بهرام",
      cover: {
        uri: "https://upsong.ir/wp-content/uploads/2025/08/reza_bahram_bi_khabar.jpg",
      },
      source: "navazmusics.com",
      plays: 0,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.favoriteMusicBox}>
        <View style={styles.titleCon}>
          <Text style={styles.name}>داغ‌ترین آهنگ‌ها</Text>
          <TouchableOpacity>
            <Text style={styles.link}>مشاهده همه</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={tracks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} activeOpacity={0.7}>
              <Image source={item.cover} style={styles.cover} />
              <View style={styles.textCon}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.artist}>{item.artist}</Text>
              </View>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: .5,
    width: "100%",
    direction: "rtl",
    padding: 5,
  },
  favoriteMusicBox: {
    flexDirection: "column",
    height:220,
  },
  titleCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    fontFamily: "Yekan",
    fontSize: 18,
  },
  link: {
    fontFamily: "Yekan",
    fontSize: 15,
    color: "#0d54ec",
  },
  card: {
    width: 150,
    marginRight: 15,
    marginBottom:10,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cover: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
  },
  textCon: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Yekan",
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
  artist: {
    fontFamily: "Yekan",
    fontSize: 12,
    color: "#777",
    marginTop: 3,
    textAlign: "center",
  },
});
