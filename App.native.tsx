import React from 'react';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { Login } from './src/components/Login.native';
import { DoctorDashboard } from './src/components/DoctorDashboard.native';
import { PatientDashboard } from './src/components/PatientDashboard.native';
import { StatusBar } from 'expo-status-bar';

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return user.role === 'doctor' ? <DoctorDashboard /> : <PatientDashboard />;
}

export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <AppContent />
    </AuthProvider>
  );
}
