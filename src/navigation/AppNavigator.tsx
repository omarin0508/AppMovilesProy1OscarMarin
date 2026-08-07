import { NavigationContainer } from '@react-navigation/native';

import { TabNavigator } from './TabNavigator';

export function AppNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
