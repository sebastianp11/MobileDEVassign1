import { Alert, Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const photos = [
  require("../../assets/images/photo1.jpg"),
  require("../../assets/images/photo2.jpg"),
  require("../../assets/images/photo3.jpg"),
  require("../../assets/images/photo4.jpg"),
  require("../../assets/images/photo5.jpg"),
  require("../../assets/images/photo6.jpg"),
  require("../../assets/images/photo7.jpg"),
  require("../../assets/images/photo8.jpg"),
  require("../../assets/images/photo9.jpg"),
];

export default function Index() {
  const { width } = useWindowDimensions();
  const size = (width - 4) / 3;

  const onAlertPress = () => {
    Alert.alert("Alert Button pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={28} color="#262626" />
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Group Profile</Text>
          <Text style={styles.headerSub}>ootd_everyday</Text>
        </View>
        <Ionicons name="add-circle-outline" size={28} color="#262626" />
      </View>

      <ScrollView>
        <View style={styles.profileRow}>
          <View style={styles.avatarRing}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>OO{"\n"}TD</Text>
            </View>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>53</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Members</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Admins</Text>
          </View>
        </View>

        <View style={styles.bio}>
          <Text style={styles.bioName}>OOTD Everyday</Text>
          <Text style={styles.bioText}>Fit check! 👕</Text>
          <Text style={styles.bioText}>You know we'll hype you up.</Text>
        </View>

        <TouchableOpacity style={styles.memberButton}>
          <Text style={styles.memberText}>Member ⌄</Text>
        </TouchableOpacity>

        <View style={styles.grid}>
          {photos.map((photo, index) => (
            <Image key={index} source={photo} style={{ width: size, height: size * 1.2 }} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.alertWrapper}>
        <Button title="Alert" onPress={onAlertPress} />
      </View>

      <View style={styles.tabBar}>
        <Ionicons name="home" size={26} color="#262626" />
        <Ionicons name="search" size={26} color="#262626" />
        <Ionicons name="play-circle-outline" size={28} color="#262626" />
        <Ionicons name="bag-handle-outline" size={26} color="#262626" />
        <Ionicons name="person-circle" size={30} color="#262626" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },

  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 14, paddingVertical: 8 },
  headerCenter: { alignItems: "center" },
  headerTitle: { fontSize: 16, fontWeight: "bold", color: "#262626" },
  headerSub: { fontSize: 13, color: "#8e8e8e" },

  profileRow: { flexDirection: "row", alignItems: "center", paddingHorizontal: 14, paddingTop: 12 },
  avatarRing: { width: 92, height: 92, borderRadius: 46, borderWidth: 3, borderColor: "#d6249f", alignItems: "center", justifyContent: "center", marginRight: 10 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: "#1f87d1", alignItems: "center", justifyContent: "center" },
  avatarText: { color: "#ffffff", fontSize: 28, textAlign: "center", lineHeight: 30 },
  stat: { flex: 1, alignItems: "center" },
  statNumber: { fontSize: 17, fontWeight: "bold", color: "#262626" },
  statLabel: { fontSize: 14, color: "#262626" },

  bio: { paddingHorizontal: 14, paddingTop: 12 },
  bioName: { fontWeight: "bold", fontSize: 14, color: "#262626" },
  bioText: { fontSize: 14, color: "#262626" },

  memberButton: { marginHorizontal: 14, marginVertical: 14, paddingVertical: 7, borderWidth: 1, borderColor: "#dbdbdb", borderRadius: 6, alignItems: "center" },
  memberText: { fontWeight: "600", fontSize: 14, color: "#262626" },

 grid: { flexDirection: "row", flexWrap: "wrap", gap: 2 },

  alertWrapper: { paddingVertical: 6, borderTopWidth: 1, borderTopColor: "#dbdbdb" },

  tabBar: { flexDirection: "row", justifyContent: "space-around", alignItems: "center", paddingVertical: 10, borderTopWidth: 1, borderTopColor: "#dbdbdb", backgroundColor: "#ffffff" },
});
