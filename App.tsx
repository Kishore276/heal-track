import React from 'react';
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { Login } from './src/components/Login';
import { DoctorDashboard } from './src/components/DoctorDashboard';
import { PatientDashboard } from './src/components/PatientDashboard';

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return user.role === 'doctor' ? <DoctorDashboard /> : <PatientDashboard />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App; 

