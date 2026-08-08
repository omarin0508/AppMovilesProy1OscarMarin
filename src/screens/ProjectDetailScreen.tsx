import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { projects } from '../data/projects';
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
      <View style={styles.container}>
        <Text style={styles.title}>Proyecto no encontrado</Text>
        <Text style={styles.description}>
          No fue posible encontrar la informacion del proyecto seleccionado.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{project.category}</Text>
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.description}>{project.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    gap: 14,
    padding: 24,
  },
  category: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    backgroundColor: '#EAF2FF',
    color: '#1D4ED8',
    fontSize: 13,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  title: {
    color: '#111827',
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 32,
  },
  description: {
    color: '#374151',
    fontSize: 16,
    lineHeight: 24,
  },
});
