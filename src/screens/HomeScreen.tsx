import { StyleSheet, View } from 'react-native';

import { ProfileHeader } from '../components/ProfileHeader';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <ProfileHeader
        initials="OM"
        name="Oscar Marín"
        professionalTitle="Ingeniero Civil y Desarrollador"
        subtitle="Tecnología, ingeniería y desarrollo de soluciones digitales"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 36,
  },
});
