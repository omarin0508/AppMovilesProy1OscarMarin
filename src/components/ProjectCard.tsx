import { Pressable, StyleSheet, Text, View } from 'react-native';

import { theme } from '../theme/theme';
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
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.surface,
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
    gap: theme.spacing.md,
  },
  categoryBadge: {
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.primarySoft,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  category: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  openIndicator: {
    color: theme.colors.textMuted,
    flexShrink: 0,
    fontSize: 13,
    fontWeight: '700',
  },
  title: {
    color: theme.colors.text,
    fontSize: 21,
    fontWeight: '700',
    lineHeight: 28,
  },
  description: {
    color: theme.colors.textSecondary,
    fontSize: 15,
    lineHeight: 23,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  },
  technologyBadge: {
    borderRadius: theme.borderRadius.sm,
    backgroundColor: theme.colors.chip,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },
  technologyText: {
    color: theme.colors.textSecondary,
    fontSize: 13,
    fontWeight: '600',
  },
});
