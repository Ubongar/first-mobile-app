import React from 'react';
import {
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Ongoing';
  image?: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Mobile App',
    category: 'Mobile Development',
    description:
      'A comprehensive React Native portfolio application featuring multiple screens including About Us, Work Experience, FAQ, Contact, and Projects showcase. Built with Expo Router for seamless navigation.',
    technologies: ['React Native', 'TypeScript', 'Expo Router', 'React Navigation'],
    status: 'Completed',
  },
  {
    id: '2',
    title: 'AI Chat Interface',
    category: 'Web Development',
    description:
      'Interactive chat interface with AI capabilities. Features real-time messaging, code syntax highlighting, and artifact generation for various content types.',
    technologies: ['React', 'TypeScript', 'Web APIs', 'Real-time Communication'],
    status: 'Completed',
  },
  {
    id: '3',
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description:
      'A full-featured e-commerce platform with product catalog, shopping cart, payment integration, and order management system. Includes admin dashboard for inventory management.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
    status: 'Completed',
  },
  {
    id: '4',
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    description:
      'Mobile application for tracking workouts, nutrition, and fitness goals. Features progress charts, workout plans, and social sharing capabilities.',
    technologies: ['React Native', 'Firebase', 'Chart.js', 'AsyncStorage'],
    status: 'In Progress',
  },
  {
    id: '5',
    title: 'Restaurant Management System',
    category: 'Full Stack',
    description:
      'Complete restaurant management solution with table booking, menu management, order processing, and kitchen display system. Includes customer-facing mobile app.',
    technologies: ['React', 'React Native', 'Express.js', 'PostgreSQL', 'Socket.io'],
    status: 'Completed',
  },
  {
    id: '6',
    title: 'Real Estate Listing Platform',
    category: 'Web Development',
    description:
      'Property listing website with advanced search filters, virtual tours, mortgage calculator, and agent management. Integrated with mapping services for location visualization.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Google Maps API', 'Tailwind CSS'],
    status: 'Completed',
  },
  {
    id: '7',
    title: 'Educational Learning Platform',
    category: 'Full Stack',
    description:
      'Online learning platform with video courses, quizzes, progress tracking, and certification system. Features both student and instructor dashboards.',
    technologies: ['React', 'Node.js', 'MySQL', 'AWS S3', 'JWT Authentication'],
    status: 'Ongoing',
  },
  {
    id: '8',
    title: 'Task Management App',
    category: 'Mobile Development',
    description:
      'Productivity app for managing tasks and projects. Features kanban boards, time tracking, team collaboration, and notification system.',
    technologies: ['React Native', 'Redux Toolkit', 'Firebase', 'Push Notifications'],
    status: 'Completed',
  },
  {
    id: '9',
    title: 'Weather Dashboard',
    category: 'Web Development',
    description:
      'Interactive weather dashboard with real-time updates, forecasts, historical data visualization, and location-based alerts.',
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Geolocation API'],
    status: 'Completed',
  },
  {
    id: '10',
    title: 'Social Media Analytics Tool',
    category: 'Full Stack',
    description:
      'Analytics dashboard for social media management. Tracks engagement metrics, audience insights, and content performance across multiple platforms.',
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Chart.js'],
    status: 'In Progress',
  },
  {
    id: '11',
    title: 'Crypto Portfolio Tracker',
    category: 'Mobile & Web',
    description:
      'Cross-platform application for tracking cryptocurrency investments. Features real-time price updates, portfolio analytics, and market news aggregation.',
    technologies: ['React Native', 'React', 'CoinGecko API', 'WebSocket', 'Redux'],
    status: 'Completed',
  },
  {
    id: '12',
    title: 'Healthcare Appointment System',
    category: 'Full Stack',
    description:
      'Medical appointment booking and management system for clinics. Includes patient records, doctor scheduling, and telemedicine integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'HIPAA Compliance'],
    status: 'Ongoing',
  },
];

export default function ProjectsScreen() {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return '#10b981';
      case 'In Progress':
        return '#f59e0b';
      case 'Ongoing':
        return '#3b82f6';
      default:
        return '#64748b';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Projects</Text>
        <Text style={styles.headerSubtitle}>
          A showcase of work and collaborations
        </Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {projects.filter((p) => p.status === 'Completed').length}
          </Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {projects.filter((p) => p.status === 'In Progress').length}
          </Text>
          <Text style={styles.statLabel}>In Progress</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>
            {projects.filter((p) => p.status === 'Ongoing').length}
          </Text>
          <Text style={styles.statLabel}>Ongoing</Text>
        </View>
      </View>

      <View style={styles.content}>
        {projects.map((project) => (
          <View key={project.id} style={styles.projectCard}>
            <View style={styles.projectHeader}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusColor(project.status) },
                ]}
              >
                <Text style={styles.statusText}>{project.status}</Text>
              </View>
            </View>

            <Text style={styles.category}>{project.category}</Text>
            <Text style={styles.description}>{project.description}</Text>

            <View style={styles.techContainer}>
              <Text style={styles.techLabel}>Technologies:</Text>
              <View style={styles.techTags}>
                {project.technologies.map((tech, index) => (
                  <View key={index} style={styles.techTag}>
                    <Text style={styles.techText}>{tech}</Text>
                  </View>
                ))}
              </View>
            </View>

            {project.link && (
              <TouchableOpacity
                style={styles.viewButton}
                onPress={() => Linking.openURL(project.link!)}
              >
                <Text style={styles.viewButtonText}>View Project</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Interested in collaborating?</Text>
        <Text style={styles.footerText}>
          I&apos;m always open to discussing new projects and opportunities.
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
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  content: {
    padding: 20,
    paddingTop: 0,
  },
  projectCard: {
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
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    flex: 1,
    paddingRight: 10,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  category: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
    marginBottom: 15,
  },
  techContainer: {
    marginTop: 10,
  },
  techLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 8,
  },
  techTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techTag: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  techText: {
    color: '#475569',
    fontSize: 12,
    fontWeight: '500',
  },
  viewButton: {
    marginTop: 15,
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  footerText: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
});