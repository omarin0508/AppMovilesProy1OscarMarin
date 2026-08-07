import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import type { ProjectStackParamList } from '../types/navigation';

type ProjectsScreenProps = NativeStackScreenProps<
  ProjectStackParamList,
  'ProjectsList'
>;

export function ProjectsScreen({ navigation }: ProjectsScreenProps) {
  const previewProject = projects[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proyectos</Text>
      <ProjectCard
        project={previewProject}
        onPress={() => navigation.navigate('ProjectDetail')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
