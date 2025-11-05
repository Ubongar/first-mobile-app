import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Replace with your logo */}
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Welcome to My Portfolio</Text>
        <Text style={styles.subtitle}>
          Showcasing my professional journey and expertise
        </Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/about' as any)}
        >
          <Text style={styles.menuButtonText}>About Us</Text>
          <Text style={styles.menuButtonDesc}>Learn more about me</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/experience' as any)}
        >
          <Text style={styles.menuButtonText}>Work Experience</Text>
          <Text style={styles.menuButtonDesc}>My professional background</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/faq' as any)}
        >
          <Text style={styles.menuButtonText}>FAQ</Text>
          <Text style={styles.menuButtonDesc}>Frequently asked questions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => router.push('/contact' as any)}
        >
          <Text style={styles.menuButtonText}>Contact Us</Text>
          <Text style={styles.menuButtonDesc}>Get in touch with me</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.menuButton}
         onPress={() => router.push('/projects')}
         >
        <Text style={styles.menuButtonText}>Projects</Text>
         <Text style={styles.menuButtonDesc}>View my portfolio of work</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#2563eb',
    padding: 30,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e7ff',
    textAlign: 'center',
  },
  menuContainer: {
    padding: 20,
  },
  menuButton: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  menuButtonDesc: {
    fontSize: 14,
    color: '#64748b',
  },
});