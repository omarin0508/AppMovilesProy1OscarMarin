import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProjectStackNavigator } from './ProjectStackNavigator';
import { HomeScreen } from '../screens/HomeScreen';
import { theme } from '../theme/theme';
import type { RootTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          fontSize: theme.typography.cardTitle.fontSize,
          fontWeight: '700',
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textMuted,
        tabBarLabelStyle: {
          fontSize: theme.typography.caption.fontSize,
          fontWeight: '700',
          lineHeight: theme.typography.caption.lineHeight,
        },
        tabBarStyle: {
          minHeight: 64,
          borderTopColor: theme.colors.borderSoft,
          backgroundColor: theme.colors.surface,
          paddingTop: theme.spacing.xs,
          paddingBottom: theme.spacing.xs,
        },
        tabBarItemStyle: {
          paddingVertical: theme.spacing.xs,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          tabBarAccessibilityLabel: 'Ir a Inicio',
        }}
      />
      <Tab.Screen
        name="ProjectsTab"
        component={ProjectStackNavigator}
        options={{
          headerShown: false,
          title: 'Proyectos',
          tabBarAccessibilityLabel: 'Ir a Proyectos',
        }}
      />
    </Tab.Navigator>
  );
}
