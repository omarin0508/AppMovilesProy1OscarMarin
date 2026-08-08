import { StyleSheet, Text, View } from 'react-native';

import { theme } from '../theme/theme';

type SkillChipProps = {
  label: string;
};

export function SkillChip({ label }: SkillChipProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.primarySoft,
    paddingHorizontal: 14,
    paddingVertical: theme.spacing.sm,
  },
  label: {
    color: theme.colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});
