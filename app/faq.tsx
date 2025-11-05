import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

type FAQ = {
  id: string;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What services do you offer?',
    answer:
      'I offer full-stack development services including mobile app development with React Native, web development with React, backend development with Node.js, and UI/UX design consultation.',
  },
  {
    id: '2',
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on complexity and scope. A simple mobile app might take 4-8 weeks, while more complex applications could take 3-6 months. I provide detailed timelines after understanding your requirements.',
  },
  {
    id: '3',
    question: 'What is your development process?',
    answer:
      'I follow an agile methodology with regular sprints and updates. The process includes: requirements gathering, design mockups, development, testing, deployment, and ongoing maintenance.',
  },
  {
    id: '4',
    question: 'Do you provide ongoing support?',
    answer:
      'Yes, I offer maintenance and support packages for all projects. This includes bug fixes, updates, performance optimization, and feature enhancements.',
  },
  {
    id: '5',
    question: 'What are your rates?',
    answer:
      'My rates vary based on project complexity and timeline. I offer both hourly and project-based pricing. Contact me for a detailed quote tailored to your specific needs.',
  },
  {
    id: '6',
    question: 'Can you work with my existing team?',
    answer:
      'Absolutely! I have experience collaborating with various teams and can integrate seamlessly into your existing workflow and development processes.',
  },
];

export default function FAQScreen() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Frequently Asked Questions</Text>
        <Text style={styles.headerSubtitle}>
          Find answers to common questions
        </Text>
      </View>

      <View style={styles.content}>
        {faqs.map((faq) => (
          <TouchableOpacity
            key={faq.id}
            style={styles.faqCard}
            onPress={() => toggleExpand(faq.id)}
            activeOpacity={0.7}
          >
            <View style={styles.questionContainer}>
              <Text style={styles.question}>{faq.question}</Text>
              <Text style={styles.icon}>
                {expandedId === faq.id ? '−' : '+'}
              </Text>
            </View>
            {expandedId === faq.id && (
              <Text style={styles.answer}>{faq.answer}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Have more questions? Feel free to contact me!
        </Text>
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
  faqCard: {
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
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    flex: 1,
    paddingRight: 10,
  },
  icon: {
    fontSize: 24,
    color: '#2563eb',
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
});