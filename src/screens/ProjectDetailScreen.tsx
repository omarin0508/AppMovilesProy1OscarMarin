import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { projects } from '../data/projects';
import { theme } from '../theme/theme';
import type { ProjectStackParamList } from '../types/navigation';

type ProjectDetailScreenProps = NativeStackScreenProps<
  ProjectStackParamList,
  'ProjectDetail'
>;

export function ProjectDetailScreen({ route }: ProjectDetailScreenProps) {
  const { projectId } = route.params;
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.notFoundContent}>
          <Text style={styles.title}>Proyecto no encontrado</Text>
          <Text style={styles.descriptionText}>
            No fue posible encontrar la informacion del proyecto seleccionado.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>{project.title}</Text>
          <View style={styles.categoryBadge}>
            <Text style={styles.category}>{project.category}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripcion</Text>
          <Text style={styles.descriptionText}>{project.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tecnologias</Text>
          <View style={styles.technologies}>
            {project.technologies.map((technology) => (
              <View key={technology} style={styles.technologyBadge}>
                <Text style={styles.technologyText}>{technology}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flexGrow: 1,
    gap: 26,
    paddingHorizontal: theme.spacing.xl,
    paddingTop: 28,
    paddingBottom: 120,
  },
  notFoundContent: {
    flex: 1,
    width: '100%',
    maxWidth: 640,
    alignSelf: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: theme.spacing.xl,
  },
  header: {
    width: '100%',
    maxWidth: 640,
    alignSelf: 'center',
    gap: 12,
  },
  title: {
    color: theme.colors.text,
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 35,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.primarySoft,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  category: {
    color: theme.colors.primary,
    fontSize: 13,
    fontWeight: '700',
  },
  section: {
    width: '100%',
    maxWidth: 640,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.surface,
    gap: 12,
    padding: theme.spacing.lg + 2,
  },
  sectionTitle: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '700',
  },
  descriptionText: {
    color: theme.colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },
  technologyBadge: {
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.chip,
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  technologyText: {
    color: theme.colors.textSecondary,
    fontSize: 13,
    fontWeight: '600',
  },
});
