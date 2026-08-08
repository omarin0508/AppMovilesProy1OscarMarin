import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
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
  content: {
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 96,
  },
  header: {
    gap: 8,
    marginBottom: 20,
  },
  separator: {
    height: 16,
  },
  title: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: '#4B5563',
    fontSize: 16,
    lineHeight: 23,
  },
  emptyText: {
    color: '#6B7280',
    fontSize: 16,
    lineHeight: 24,
  },
});
