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
    backgroundColor: '#F9FAFB',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 34,
    paddingBottom: 120,
  },
  header: {
    gap: 10,
    marginBottom: 24,
  },
  separator: {
    height: 18,
  },
  title: {
    color: '#111827',
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    color: '#4B5563',
    fontSize: 16,
    lineHeight: 24,
  },
  emptyText: {
    color: '#6B7280',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    padding: 18,
  },
});
