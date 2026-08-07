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
        <Text style={styles.category}>{project.category}</Text>
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
    borderColor: '#E5E7EB',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    padding: 18,
    gap: 12,
  },
  cardPressed: {
    opacity: 0.84,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  category: {
    color: '#1D4ED8',
    fontSize: 13,
    fontWeight: '700',
  },
  openIndicator: {
    color: '#6B7280',
    flexShrink: 0,
    fontSize: 13,
    fontWeight: '600',
  },
  title: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '700',
  },
  description: {
    color: '#4B5563',
    fontSize: 15,
    lineHeight: 22,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  technologyBadge: {
    borderRadius: 14,
    backgroundColor: '#F3F7FF',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  technologyText: {
    color: '#1F2937',
    fontSize: 13,
    fontWeight: '600',
  },
});
