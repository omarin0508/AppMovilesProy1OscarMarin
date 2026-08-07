import { StyleSheet, Text, View } from 'react-native';

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
    gap: 18,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1D3557',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  textContainer: {
    flex: 1,
    flexShrink: 1,
    gap: 6,
  },
  name: {
    color: '#111827',
    fontSize: 28,
    fontWeight: '700',
  },
  professionalTitle: {
    color: '#1D4ED8',
    fontSize: 17,
    fontWeight: '600',
  },
  subtitle: {
    color: '#4B5563',
    fontSize: 15,
    lineHeight: 21,
  },
});
