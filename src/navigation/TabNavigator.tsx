import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProjectStackNavigator } from './ProjectStackNavigator';
import { HomeScreen } from '../screens/HomeScreen';
import type { RootTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen
        name="ProjectsTab"
        component={ProjectStackNavigator}
        options={{ headerShown: false, title: 'Proyectos' }}
      />
    </Tab.Navigator>
  );
}
