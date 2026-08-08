import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Project } from '../types/project';

type ProjectCardProps = {
  project: Project;
  onPress: () => void;
};

export function ProjectCard({ project, onPress }: ProjectCardProps) {
  return (
    <Pressable
      accessibilityLabel={`Abrir proyecto ${project.title}`}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed ? styles.cardPressed : undefined,
      ]}
    >
      <View style={styles.header}>
        <View style={styles.categoryBadge}>
          <Text style={styles.category}>{project.category}</Text>
        </View>
        <Text style={styles.openIndicator}>Ver proyecto →</Text>
      </View>

      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.description}>{project.shortDescription}</Text>

      <View style={styles.technologies}>
        {project.technologies.map((technology) => (
          <View key={technology} style={styles.technologyBadge}>
            <Text style={styles.technologyText}>{technology}</Text>
          </View>
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDE3EA',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    padding: 20,
    gap: 14,
  },
  cardPressed: {
    opacity: 0.88,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  categoryBadge: {
    borderRadius: 8,
    backgroundColor: '#EAF2FF',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  category: {
    color: '#1D4ED8',
    fontSize: 12,
    fontWeight: '700',
  },
  openIndicator: {
    color: '#4B5563',
    flexShrink: 0,
    fontSize: 13,
    fontWeight: '700',
  },
  title: {
    color: '#111827',
    fontSize: 21,
    fontWeight: '700',
    lineHeight: 28,
  },
  description: {
    color: '#374151',
    fontSize: 15,
    lineHeight: 23,
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
    paddingVertical: 6,
  },
  technologyText: {
    color: '#374151',
    fontSize: 13,
    fontWeight: '600',
  },
});
