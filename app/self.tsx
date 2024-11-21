import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const UserProfileHeader = () => {
  return (
    <View style={styles.userProfileContainer}>
      <Text style={styles.greeting}>Good Afternoon</Text>
      <Text style={styles.userName}>Yakubu Daniel</Text>
      <Image 
        source={{ uri: 'https://placeholder.pics/svg/50x50' }} 
        style={styles.userImage} 
      />
    </View>
  );
};

const VerificationTabs = () => {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Upload ID</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, styles.activeTab]}>
        <Text style={styles.activeTabText}>Selfie</Text>
      </TouchableOpacity>
    </View>
  );
};

const SelfieInstruction = () => {
  return (
    <View style={styles.instructionContainer}>
      <Text style={styles.instructionTitle}>Take a Selfie</Text>
      <View style={styles.selfiePlaceholder} />
      <Text style={styles.instructionText}>
        Position Your Front Camera to Show you Holding your ID Card and Click the Button Below
      </Text>
    </View>
  );
};

const CaptureButton = () => {
  return (
    <TouchableOpacity style={styles.captureButton}>
      <Text style={styles.captureButtonText}>CAPTURE</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <UserProfileHeader />
      <Text style={styles.verificationTitle}>Identity Verification</Text>
      <VerificationTabs />
      <SelfieInstruction />
      <CaptureButton />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  userProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  userName: {
    fontSize: 32,
    fontWeight: '900',
    color: '#313131',
    lineHeight: 38.73,
    fontFamily: 'Inter',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  verificationTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#4A6FA5',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
  },
  activeTabText: {
    color: '#fff',
  },
  instructionContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  instructionTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  selfiePlaceholder: {
    width: 156,
    height: 197,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  instructionText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#111',
  },
  captureButton: {
    backgroundColor: '#4A6FA5',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  captureButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
});

export default App;
