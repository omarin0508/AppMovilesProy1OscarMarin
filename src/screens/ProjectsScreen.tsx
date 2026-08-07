import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';

import type { ProjectStackParamList } from '../types/navigation';

type ProjectsScreenProps = NativeStackScreenProps<
  ProjectStackParamList,
  'ProjectsList'
>;

export function ProjectsScreen({ navigation }: ProjectsScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Proyectos</Text>
      <Button
        title="Ver detalle provisional"
        onPress={() => navigation.navigate('ProjectDetail')}
      />
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
