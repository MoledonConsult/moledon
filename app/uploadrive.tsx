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
        <Text style={styles.stepLabel}>Upload</Text>
      </View>
      <View style={styles.step}>
        <Text style={styles.stepNumber}>3</Text>
        <Text style={styles.stepLabel}>Review</Text>
      </View>
    </View>
  );
};

const UploadSection = () => {
  return (
    <View style={styles.uploadContainer}>
      <Text style={styles.uploadTitle}>Upload Document For Verification</Text>
      <View style={styles.uploadBoxes}>
        <View style={styles.uploadBox}>
          <Text style={styles.uploadText}>Click to select</Text>
          <Text style={styles.uploadLabel}>Upload NIN</Text>
        </View>
        <View style={styles.uploadBox}>
          <Text style={styles.uploadText}>Click to select</Text>
          <Text style={styles.uploadLabel}>Upload Driver's Licence</Text>
        </View>
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
      <UploadSection />
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
  uploadContainer: {
    marginBottom: 20,
  },
  uploadTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#111',
    marginBottom: 10,
  },
  uploadBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadBox: {
    width: 102,
    height: 86,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadText: {
    fontSize: 12,
    color: '#111',
    opacity: 0.64,
  },
  uploadLabel: {
    fontSize: 11,
    color: '#111',
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
