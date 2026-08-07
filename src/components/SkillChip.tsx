import { StyleSheet, Text, View } from 'react-native';

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
    borderRadius: 18,
    backgroundColor: '#EAF2FF',
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  label: {
    color: '#1D4ED8',
    fontSize: 14,
    fontWeight: '600',
  },
});
