import React, { useState } from 'react';
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ContactUsScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Here you would typically send the data to your backend
    Alert.alert(
      'Success',
      'Thank you for your message! I will get back to you soon.',
      [
        {
          text: 'OK',
          onPress: () => {
            setName('');
            setEmail('');
            setMessage('');
          },
        },
      ]
    );
  };

  const openEmail = () => {
    Linking.openURL('mailto:your.email@example.com');
  };

  const openPhone = () => {
    Linking.openURL('tel:+1234567890');
  };

  const openWebsite = () => {
    Linking.openURL('https://yourwebsite.com');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Get In Touch</Text>
        <Text style={styles.headerSubtitle}>
          I&apos;d love to hear from you
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.contactInfo}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          
          <TouchableOpacity style={styles.infoItem} onPress={openEmail}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>mikeerap14@gmail.com</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoItem} onPress={openPhone}>
            <Text style={styles.infoLabel}>Phone:</Text>
            <Text style={styles.infoValue}>+234 (701) 631 1706</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoItem} onPress={openWebsite}>
            <Text style={styles.infoLabel}>Website:</Text>
            <Text style={styles.infoValue}>www.yourwebsite.com</Text>
          </TouchableOpacity>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Location:</Text>
            <Text style={styles.infoValue}>Ikorodu, Lagos State, Nigeria.</Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Send a Message</Text>

          <TextInput
            style={styles.input}
            placeholder="Your Name"
            placeholderTextColor="#94a3b8"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Your Email"
            placeholderTextColor="#94a3b8"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Your Message"
            placeholderTextColor="#94a3b8"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Send Message</Text>
          </TouchableOpacity>
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
  header: {
    backgroundColor: '#2563eb',
    padding: 25,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e0e7ff',
  },
  content: {
    padding: 20,
  },
  contactInfo: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 15,
  },
  infoItem: {
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 3,
  },
  infoValue: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '500',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    color: '#1e293b',
    marginBottom: 15,
    backgroundColor: '#f8fafc',
  },
  textArea: {
    height: 120,
    paddingTop: 15,
  },
  submitButton: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
