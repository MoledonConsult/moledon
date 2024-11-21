import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>New Rider</Text>
      <Text style={styles.headerSubtitle}>Add a New Rider/Delivery Agent</Text>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/50x50' }} 
        style={styles.headerImage} 
      />
    </View>
  );
};

const ProgressSteps = () => {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.step}>
        <Text style={styles.stepNumber}>1</Text>
        <Text style={styles.stepLabel}>Personal Info</Text>
      </View>
      <View style={styles.step}>
        <Text style={styles.stepNumber}>2</Text>
        <Text style={styles.stepLabel}>Uploads</Text>
      </View>
      <View style={styles.step}>
        <Text style={styles.stepNumber}>3</Text>
        <Text style={styles.stepLabel}>Review</Text>
      </View>
    </View>
  );
};

const ReviewSection = () => {
  return (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewTitle}>Review Submission</Text>
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <Text style={styles.infoText}>Full Name: Hamed Peter Hassan</Text>
        <Text style={styles.infoText}>Telephone: +123 456 7890</Text>
        <Text style={styles.infoText}>Email: business@email.com</Text>
        <Text style={styles.infoText}>State: Kaduna State</Text>
        <Text style={styles.infoText}>City/LGA: Kaurwa / Zoo Rd.</Text>
        <Text style={styles.infoText}>Address: 100 Main Street and fake address</Text>
      </View>
      <View style={styles.verificationSection}>
        <Text style={styles.sectionTitle}>Uploads/Verification</Text>
        <Text style={styles.infoText}>NIN: Uploaded</Text>
        <Text style={styles.infoText}>Driver's License: Uploaded</Text>
        <Text style={styles.infoText}>Telephone: Confirmed</Text>
        <Text style={styles.infoText}>Email: Confirmed</Text>
      </View>
    </View>
  );
};

const CreateAccountButton = () => {
  return (
    <TouchableOpacity style={styles.createAccountButton}>
      <Text style={styles.createAccountButtonText}>CREATE ACCOUNT</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <ProgressSteps />
      <ReviewSection />
      <CreateAccountButton />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    lineHeight: 38.73,
    fontFamily: 'Inter',
  },
  headerSubtitle: {
    fontSize: 12,
    fontWeight: '300',
    color: '#111',
    marginBottom: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  step: {
    alignItems: 'center',
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: '800',
    color: '#4d6ba7',
  },
  stepLabel: {
    fontSize: 11,
    color: '#111',
  },
  reviewContainer: {
    marginBottom: 20,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 10,
  },
  infoSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  verificationSection: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#a2a2a2',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 12,
    color: '#3c3c3c',
    marginBottom: 5,
  },
  createAccountButton: {
    backgroundColor: '#4A6FA5',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  createAccountButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
});

export default App;
