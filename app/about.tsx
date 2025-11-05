import React from 'react';
import {
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const PROFILE = {
  name: ' Archie Michael Ubong',
  title: 'Mobile & Web Developer',
  email: 'mikeerap14@gmail.com',
  location: 'Ikorodu. Lagos',
  website: 'https://example.com',
  github: 'https://github.com/Ubongar',
  linkedin: 'https://www.linkedin.com/in/username',
};

export default function AboutUsScreen() {
  const open = (url: string) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) Linking.openURL(url);
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{PROFILE.name}</Text>
        <Text style={styles.title}>{PROFILE.title}</Text>

        <View style={styles.contactRow}>
          <Pressable onPress={() => open(`mailto:${PROFILE.email}`)}>
            <Text style={styles.contactLink}>{PROFILE.email}</Text>
          </Pressable>
          <Text style={styles.contactSeparator}>|</Text>
          <Pressable onPress={() => open(PROFILE.website)}>
            <Text style={styles.contactLink}>Website</Text>
          </Pressable>
        </View>

        <View style={styles.socialRow}>
          <Pressable onPress={() => open(PROFILE.github)}>
            <Text style={styles.socialLink}>GitHub</Text>
          </Pressable>
          <Pressable onPress={() => open(PROFILE.linkedin)}>
            <Text style={styles.socialLink}>LinkedIn</Text>
          </Pressable>
          <Text style={styles.location}>{PROFILE.location}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>About Me</Text>
        <Text style={styles.text}>
          Hello! I&apos;m a passionate professional dedicated to creating exceptional
          digital experiences. With years of experience in the industry, I&apos;ve
          honed my skills in various technologies and methodologies.
        </Text>

        <Text style={styles.subheading}>My Mission</Text>
        <Text style={styles.text}>
          To deliver innovative solutions that make a difference. I believe in
          continuous learning and staying updated with the latest trends in
          technology and design.
        </Text>

        <Text style={styles.subheading}>What I Do</Text>
        <Text style={styles.text}>
          I specialize in building mobile and web applications that are not only
          functional but also beautiful and user-friendly. My approach combines
          technical expertise with creative problem-solving.
        </Text>

        <Text style={styles.subheading}>Values</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.valueItem}>• Innovation & Creativity</Text>
          <Text style={styles.valueItem}>• Quality & Excellence</Text>
          <Text style={styles.valueItem}>• Collaboration & Teamwork</Text>
          <Text style={styles.valueItem}>• Continuous Improvement</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#2563eb',
  },
  name: {
    marginTop: 12,
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
  },
  title: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  contactLink: {
    color: '#2563eb',
    fontSize: 14,
    marginHorizontal: 6,
  },
  contactSeparator: {
    color: '#94a3b8',
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 12,
  },
  socialLink: {
    color: '#2563eb',
    marginHorizontal: 8,
  },
  location: {
    color: '#64748b',
    marginLeft: 12,
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 15,
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#334155',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 10,
  },
  valueContainer: {
    marginTop: 10,
  },
  valueItem: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 28,
  },
});