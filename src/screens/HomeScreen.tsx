import { useState } from 'react';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileHeader } from '../components/ProfileHeader';
import { SkillChip } from '../components/SkillChip';
import type { RootTabParamList } from '../types/navigation';

const skills = [
  'Ingeniería',
  'React Native',
  'TypeScript',
  'Desarrollo móvil',
  'Gestión de proyectos',
];

type HomeScreenProps = BottomTabScreenProps<RootTabParamList, 'HomeTab'>;

export function HomeScreen({ navigation }: HomeScreenProps) {
  const [isAvailabilityVisible, setIsAvailabilityVisible] = useState(false);

  const availabilityButtonLabel = isAvailabilityVisible
    ? 'Ocultar disponibilidad'
    : 'Ver disponibilidad';

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

        <View style={styles.skillsSection}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <View style={styles.skillsList}>
            {skills.map((skill) => (
              <SkillChip key={skill} label={skill} />
            ))}
          </View>
        </View>

        <View style={styles.actionsSection}>
          <Pressable
            accessibilityLabel="Ver mis proyectos"
            accessibilityRole="button"
            onPress={() =>
              navigation.navigate('ProjectsTab', { screen: 'ProjectsList' })
            }
            style={({ pressed }) => [
              styles.button,
              styles.primaryButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.primaryButtonText}>Ver mis proyectos</Text>
          </Pressable>

          <Pressable
            accessibilityLabel={availabilityButtonLabel}
            accessibilityRole="button"
            onPress={() =>
              setIsAvailabilityVisible((currentValue) => !currentValue)
            }
            style={({ pressed }) => [
              styles.button,
              styles.secondaryButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.secondaryButtonText}>
              {availabilityButtonLabel}
            </Text>
          </Pressable>

          {isAvailabilityVisible ? (
            <View style={styles.availabilityCard}>
              <Text style={styles.availabilityText}>
                Disponible para nuevos proyectos y colaboraciones.
              </Text>
            </View>
          ) : null}
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
    paddingBottom: 96,
    gap: 32,
  },
  aboutSection: {
    width: '100%',
    maxWidth: 560,
    gap: 10,
  },
  skillsSection: {
    width: '100%',
    maxWidth: 560,
    gap: 12,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  actionsSection: {
    width: '100%',
    maxWidth: 560,
    gap: 12,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  primaryButton: {
    backgroundColor: '#1D4ED8',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#1D4ED8',
    backgroundColor: '#FFFFFF',
  },
  pressed: {
    opacity: 0.82,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButtonText: {
    color: '#1D4ED8',
    fontSize: 16,
    fontWeight: '700',
  },
  availabilityCard: {
    borderRadius: 10,
    backgroundColor: '#F3F7FF',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  availabilityText: {
    color: '#1F2937',
    fontSize: 15,
    lineHeight: 22,
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
