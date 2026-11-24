import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const platforms = ['iOS', 'Android', 'Web'];

export default function App() {
  const { width } = useWindowDimensions();
  const isWide = width >= 720;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.content, { paddingHorizontal: isWide ? 40 : 24 }]}>
          <View style={styles.brandRow}>
            <View style={styles.brandMark}>
              <Text style={styles.brandMarkText}>C</Text>
            </View>
            <Text style={styles.brandName}>CAPSTONE</Text>
          </View>

          <View style={[styles.hero, isWide && styles.heroWide]}>
            <View style={styles.heroCopy}>
              <Text style={styles.eyebrow}>YOUR PROJECT STARTS HERE</Text>
              <Text style={styles.title}>One app.{'\n'}Every screen.</Text>
              <Text style={styles.description}>
                Build for phones, tablets, and the web with one React Native
                codebase.
              </Text>
            </View>

            <View style={styles.platformCard}>
              <Text style={styles.cardLabel}>READY TO RUN ON</Text>
              <View style={styles.platformList}>
                {platforms.map((platform) => (
                  <View key={platform} style={styles.platformItem}>
                    <View style={styles.platformDot} />
                    <Text style={styles.platformText}>{platform}</Text>
                  </View>
                ))}
              </View>
              <Text style={styles.cardHint}>
                Start the development server and open this app on your devices.
              </Text>
            </View>
          </View>

          <Text style={styles.footer}>
            A shared foundation for your next idea.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 1120,
    alignSelf: 'center',
    paddingVertical: 36,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 52,
  },
  brandMark: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: '#3157D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandMarkText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },
  brandName: {
    color: '#17233E',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.8,
  },
  hero: {
    gap: 36,
  },
  heroWide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 64,
  },
  heroCopy: {
    flex: 1,
  },
  eyebrow: {
    color: '#3157D5',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  title: {
    color: '#17233E',
    fontSize: 52,
    fontWeight: '800',
    letterSpacing: -2,
    lineHeight: 58,
  },
  description: {
    color: '#66728A',
    fontSize: 17,
    lineHeight: 27,
    marginTop: 18,
    maxWidth: 440,
  },
  platformCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#E7EBF3',
    borderWidth: 1,
    borderRadius: 20,
    padding: 28,
    shadowColor: '#17233E',
    shadowOpacity: 0.06,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 3,
  },
  cardLabel: {
    color: '#8B96AA',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.4,
    marginBottom: 20,
  },
  platformList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  platformItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderColor: '#E7EBF3',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 13,
    paddingVertical: 10,
  },
  platformDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#35A979',
  },
  platformText: {
    color: '#25324D',
    fontSize: 14,
    fontWeight: '700',
  },
  cardHint: {
    color: '#7A859A',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 22,
  },
  footer: {
    color: '#9AA4B6',
    fontSize: 13,
    marginTop: 56,
  },
});
