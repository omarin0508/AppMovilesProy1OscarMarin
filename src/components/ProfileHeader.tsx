import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../theme/theme';

type ProfileHeaderProps = {
  initials: string;
  name: string;
  professionalTitle: string;
  subtitle: string;
};

export function ProfileHeader({
  initials,
  name,
  professionalTitle,
  subtitle,
}: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar} accessibilityRole="image">
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.professionalTitle}>{professionalTitle}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 560,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.lg + 2,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: theme.borderRadius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primaryDark,
  },
  avatarText: {
    color: theme.colors.surface,
    fontSize: 28,
    fontWeight: '700',
  },
  textContainer: {
    flex: 1,
    flexShrink: 1,
    gap: theme.spacing.xs,
  },
  name: {
    color: theme.colors.text,
    fontSize: 28,
    fontWeight: '700',
  },
  professionalTitle: {
    color: theme.colors.primary,
    fontSize: 17,
    fontWeight: '600',
  },
  subtitle: {
    color: theme.colors.textMuted,
    fontSize: 15,
    lineHeight: 21,
  },
});
