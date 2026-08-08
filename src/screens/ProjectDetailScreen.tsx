import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    backgroundColor: '#F9FAFB',
  },
  content: {
    flexGrow: 1,
    gap: 24,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 112,
  },
  notFoundContent: {
    flex: 1,
    justifyContent: 'center',
    gap: 12,
    padding: 24,
  },
  header: {
    width: '100%',
    maxWidth: 640,
    gap: 14,
  },
  title: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 35,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    backgroundColor: '#EAF2FF',
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  category: {
    color: '#1D4ED8',
    fontSize: 13,
    fontWeight: '700',
  },
  section: {
    width: '100%',
    maxWidth: 640,
    borderWidth: 1,
    borderColor: '#DDE3EA',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    gap: 12,
    padding: 18,
  },
  sectionTitle: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '700',
  },
  descriptionText: {
    color: '#374151',
    fontSize: 16,
    lineHeight: 24,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  technologyBadge: {
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  technologyText: {
    color: '#374151',
    fontSize: 13,
    fontWeight: '600',
  },
});
