import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Picker } from 'react-native';

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

const ActionDropdown = () => {
  return (
    <View style={styles.dropdownContainer}>
      <Picker style={styles.picker}>
        <Picker.Item label="Action" value="action" />
        <Picker.Item label="Approve" value="approve" />
        <Picker.Item label="Decline" value="decline" />
      </Picker>
    </View>
  );
};

const ReviewSection = () => {
  return (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewTitle}>Review Submission</Text>
      <Text style={styles.reviewSubtitle}>Review Submitted information and perform actions</Text>
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
      <ActionDropdown />
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
  dropdownContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  picker: {
    height: 34,
    width: '100%',
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
  reviewSubtitle: {
    fontSize: 11,
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
