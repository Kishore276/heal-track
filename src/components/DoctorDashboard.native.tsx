import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export const DoctorDashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Doctor Dashboard</Text>
        <View style={styles.headerRight}>
          <Text style={styles.userName}>{user?.name}</Text>
          <TouchableOpacity onPress={logout} style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Welcome, Dr. {user?.name}!</Text>
          <Text style={styles.cardText}>
            Manage your patients, assign tests, and track their recovery progress.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Assign Tests</Text>
          <Text style={styles.cardText}>
            Create and assign tests to your patients to track their progress.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Patient Messages</Text>
          <Text style={styles.cardText}>
            Communicate with your patients and provide guidance.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Care Tips</Text>
          <Text style={styles.cardText}>
            Share personalized care tips to help your patients recover faster.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: 'white',
    padding: 16,
    paddingTop: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userName: {
    fontSize: 14,
    color: '#374151',
  },
  logoutButton: {
    padding: 8,
  },
  logoutText: {
    color: '#4F46E5',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
});
