// app/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2563eb',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#9ca3af',
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Portfolio',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="about" 
        options={{ 
          title: 'About',
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="experience" 
        options={{ 
          title: 'Experience',
          tabBarIcon: ({ color }) => (
            <Ionicons name="briefcase" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="faq" 
        options={{ 
          title: 'FAQ',
          tabBarIcon: ({ color }) => (
            <Ionicons name="help-circle" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="contact" 
        options={{ 
          title: 'Contact',
          tabBarIcon: ({ color }) => (
            <Ionicons name="mail" size={24} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="projects" 
        options={{ 
          title: 'Projects',
          tabBarIcon: ({ color }) => (
            <Ionicons name="folder" size={24} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}