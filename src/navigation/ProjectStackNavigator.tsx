import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProjectDetailScreen } from '../screens/ProjectDetailScreen';
import { ProjectsScreen } from '../screens/ProjectsScreen';
import type { ProjectStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<ProjectStackParamList>();

export function ProjectStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProjectsList"
        component={ProjectsScreen}
        options={{ title: 'Proyectos' }}
      />
      <Stack.Screen
        name="ProjectDetail"
        component={ProjectDetailScreen}
        options={{ title: 'Detalle' }}
      />
    </Stack.Navigator>
  );
}
