import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { theme } from '../theme/theme';
import type { Project } from '../types/project';
import type { ProjectStackParamList } from '../types/navigation';

type ProjectsScreenProps = NativeStackScreenProps<
  ProjectStackParamList,
  'ProjectsList'
>;

export function ProjectsScreen({ navigation }: ProjectsScreenProps) {
  const renderProject = ({ item }: { item: Project }) => (
    <ProjectCard
      project={item}
      onPress={() =>
        navigation.navigate('ProjectDetail', { projectId: item.id })
      }
    />
  );

  return (
    <FlatList
      style={styles.list}
      data={projects}
      renderItem={renderProject}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.content}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>Proyectos</Text>
          <Text style={styles.subtitle}>
            Explora algunos proyectos profesionales y académicos.
          </Text>
        </View>
      }
      ListEmptyComponent={
        <Text style={styles.emptyText}>No hay proyectos disponibles.</Text>
      }
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    paddingHorizontal: theme.spacing.xl,
    paddingTop: theme.spacing.xxl + theme.spacing.xs,
    paddingBottom: 120,
  },
  header: {
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl,
  },
  separator: {
    height: theme.spacing.lg + 2,
  },
  title: {
    color: theme.colors.text,
    fontSize: theme.typography.screenTitle.fontSize,
    fontWeight: '700',
    lineHeight: theme.typography.screenTitle.lineHeight,
  },
  subtitle: {
    color: theme.colors.textMuted,
    fontSize: theme.typography.body.fontSize,
    lineHeight: theme.typography.body.lineHeight,
  },
  emptyText: {
    color: theme.colors.textMuted,
    borderWidth: 1,
    borderColor: theme.colors.borderSoft,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.surface,
    fontSize: theme.typography.body.fontSize,
    lineHeight: theme.typography.body.lineHeight,
    padding: theme.spacing.lg + 2,
  },
});
