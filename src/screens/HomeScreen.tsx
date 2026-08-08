import { useState } from 'react';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileHeader } from '../components/ProfileHeader';
import { SkillChip } from '../components/SkillChip';
import { theme } from '../theme/theme';
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
            accessibilityLabel="Abrir lista de proyectos"
            accessibilityRole="button"
            android_ripple={{ color: theme.colors.primarySoft }}
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
            accessibilityLabel={
              isAvailabilityVisible
                ? 'Ocultar disponibilidad profesional'
                : 'Mostrar disponibilidad profesional'
            }
            accessibilityRole="button"
            android_ripple={{ color: theme.colors.primarySoft }}
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
    backgroundColor: theme.colors.surface,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing.xxl + theme.spacing.xs,
    paddingBottom: 104,
    gap: theme.spacing.xxl,
  },
  aboutSection: {
    width: '100%',
    maxWidth: 560,
    gap: theme.spacing.md - 2,
  },
  skillsSection: {
    width: '100%',
    maxWidth: 560,
    gap: theme.spacing.md,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md - 2,
  },
  actionsSection: {
    width: '100%',
    maxWidth: 560,
    gap: theme.spacing.md,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.md,
    minHeight: 48,
    paddingHorizontal: theme.spacing.lg + 2,
    paddingVertical: theme.spacing.md + 2,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.surface,
  },
  pressed: {
    opacity: 0.82,
  },
  primaryButtonText: {
    color: theme.colors.surface,
    fontSize: theme.typography.body.fontSize,
    fontWeight: '700',
  },
  secondaryButtonText: {
    color: theme.colors.primary,
    fontSize: theme.typography.body.fontSize,
    fontWeight: '700',
  },
  availabilityCard: {
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.accentSoft,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md + 2,
  },
  availabilityText: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.secondary.fontSize,
    lineHeight: theme.typography.secondary.lineHeight,
  },
  sectionTitle: {
    color: theme.colors.text,
    fontSize: theme.typography.sectionTitle.fontSize,
    fontWeight: '700',
    lineHeight: theme.typography.sectionTitle.lineHeight,
  },
  aboutText: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.body.fontSize,
    lineHeight: theme.typography.body.lineHeight,
  },
});
