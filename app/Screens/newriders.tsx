import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

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
        <Text style={styles.stepLabel}>Upload</Text>
      </View>
      <View style={styles.step}>
        <Text style={styles.stepNumber}>3</Text>
        <Text style={styles.stepLabel}>Review</Text>
      </View>
    </View>
  );
};

const PersonalInfoForm = () => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Personal Information</Text>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput style={styles.formInput} placeholder="e.g Mpape LPG Station" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Telephone</Text>
        <TextInput style={styles.formInput} placeholder="09 123 456 789" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput style={styles.formInput} placeholder="email@example.com" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Address (Closest Landmark)</Text>
        <TextInput style={styles.formInput} placeholder="e.g 100 main street, sokale" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>State</Text>
        <TextInput style={styles.formInput} placeholder="Select" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>LGA</Text>
        <TextInput style={styles.formInput} placeholder="Select" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Identification Type</Text>
        <TextInput style={styles.formInput} placeholder="Driver's Licence" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>License ID</Text>
        <TextInput style={styles.formInput} placeholder="1234567890" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>NIN</Text>
        <TextInput style={styles.formInput} placeholder="23/10/2024" />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Select Vehicle to Assign</Text>
        <TextInput style={styles.formInput} placeholder="None Selected" />
      </View>
    </View>
  );
};

const ContinueButton = () => {
  return (
    <TouchableOpacity style={styles.continueButton}>
      <Text style={styles.continueButtonText}>CONTINUE</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Header />
      <ProgressSteps />
      <PersonalInfoForm />
      <ContinueButton />
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
    fontSize: 12,
    fontWeight: '800',
    color: '#000',
  },
  stepLabel: {
    fontSize: 11,
    color: '#111',
  },
  formContainer: {
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#111',
    marginBottom: 10,
  },
  formGroup: {
    marginBottom: 10,
  },
  formLabel: {
    fontSize: 12,
    color: '#000',
  },
  formInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: '#4A6FA5',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
});

export default App;
