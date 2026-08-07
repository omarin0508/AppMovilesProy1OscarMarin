import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';

import type { ProjectStackParamList } from '../types/navigation';

type ProjectDetailScreenProps = NativeStackScreenProps<
  ProjectStackParamList,
  'ProjectDetail'
>;

export function ProjectDetailScreen({ navigation }: ProjectDetailScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del proyecto</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
