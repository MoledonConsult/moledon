import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const VendorRegistrationReview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <Text style={styles.title}>Review Submission</Text>

      <View style={styles.steps}>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>1</Text>
          <Text style={styles.stepLabel}>Business</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.step}>
          <Text style={styles.stepNumber}>2</Text>
          <Text style={styles.stepLabel}>Manager</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.step}>
          <Text style={styles.stepNumber}>3</Text>
          <Text style={styles.stepLabel}>Review</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Business Info</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Business Name</Text>
          <Text style={styles.infoValue}>Hooli LPG Plant</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Telephone</Text>
          <Text style={styles.infoValue}>+123 456 7890</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>business@email.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>State</Text>
          <Text style={styles.infoValue}>Kaduna State</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>City/LGA</Text>
          <Text style={styles.infoValue}>Kaurwa / Zoo Rd.</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Address</Text>
          <Text style={styles.infoValue}>100 Main Street and fake address</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Manager's Info</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Full Name</Text>
          <Text style={styles.infoValue}>Emeka, Ahmed Ciraq</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Telephone</Text>
          <Text style={styles.infoValue}>+01 234 567 890</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Valid Telephone</Text>
          <Text style={[styles.infoValue, styles.confirmed]}>Confirmed</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink}>Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Inter',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111010d4',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Manrope',
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  step: {
    alignItems: 'center',
  },
  stepNumber: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    lineHeight: 33,
    fontSize: 14,
    fontWeight: '800',
    color: '#4d6ba7',
    fontFamily: 'Manrope',
  },
  stepLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
    marginTop: 5,
  },
  line: {
    width: 75,
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 10,
  },
  infoContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#a2a2a2',
    fontFamily: 'Manrope',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  infoLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  infoValue: {
    fontSize: 12,
    fontWeight: '500',
    color: '#111010d4',
    fontFamily: 'Inter',
  },
  confirmed: {
    color: '#50ac3d',
  },
  createButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  createButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#ffffff',
    fontFamily: 'Inter',
  },
  loginText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Manrope',
  },
  loginLink: {
    color: '#3b5998',
    fontWeight: '600',
  },
});

export default VendorRegistrationReview;
