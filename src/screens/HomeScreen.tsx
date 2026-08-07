import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileHeader } from '../components/ProfileHeader';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader
          initials="OM"
          name="Oscar Marín"
          professionalTitle="Ingeniero Civil y Desarrollador"
          subtitle="Tecnología, ingeniería y desarrollo de soluciones digitales"
        />

        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>Sobre mí</Text>
          <Text style={styles.aboutText}>
            Profesional enfocado en la integración de ingeniería y tecnología
            para desarrollar soluciones prácticas, eficientes y orientadas a
            resultados.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 40,
    gap: 32,
  },
  aboutSection: {
    width: '100%',
    maxWidth: 560,
    gap: 10,
  },
  sectionTitle: {
    color: '#111827',
    fontSize: 22,
    fontWeight: '700',
  },
  aboutText: {
    color: '#374151',
    fontSize: 16,
    lineHeight: 24,
  },
});
