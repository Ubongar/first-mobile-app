import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

type Experience = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
};

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description:
      'Leading development of mobile applications using React Native. Managing a team of 5 developers and implementing best practices.',
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    period: '2020 - 2022',
    description:
      'Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with designers to implement responsive UI.',
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Creative Agency',
    period: '2018 - 2020',
    description:
      'Built interactive websites and web applications. Worked closely with clients to understand requirements and deliver solutions.',
  },
];

export default function WorkExperienceScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Professional Journey</Text>
        <Text style={styles.headerSubtitle}>
          Years of experience building quality software
        </Text>
      </View>

      <View style={styles.content}>
        {experiences.map((exp) => (
          <View key={exp.id} style={styles.experienceCard}>
            <Text style={styles.title}>{exp.title}</Text>
            <Text style={styles.company}>{exp.company}</Text>
            <Text style={styles.period}>{exp.period}</Text>
            <Text style={styles.description}>{exp.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.skillsSection}>
        <Text style={styles.skillsTitle}>Key Skills</Text>
        <View style={styles.skillsContainer}>
          <View style={styles.skillTag}>
            <Text style={styles.skillText}>React Native</Text>
          </View>
          <View style={styles.skillTag}>
            <Text style={styles.skillText}>JavaScript</Text>
          </View>
          <View style={styles.skillTag}>
            <Text style={styles.skillText}>TypeScript</Text>
          </View>
          <View style={styles.skillTag}>
            <Text style={styles.skillText}>React</Text>
          </View>
          <View style={styles.skillTag}>
            <Text style={styles.skillText}>Node.js</Text>
          </View>
          <View style={styles.skillTag}>
            <Text style={styles.skillText}>UI/UX Design</Text>
          </View>
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
  experienceCard: {
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 5,
  },
  company: {
    fontSize: 16,
    color: '#2563eb',
    marginBottom: 5,
  },
  period: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  skillsSection: {
    padding: 20,
    paddingTop: 10,
  },
  skillsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 15,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillTag: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  skillText: {
    color: '#1e40af',
    fontSize: 14,
    fontWeight: '600',
  },
});